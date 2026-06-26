from fastapi import APIRouter, HTTPException
from datetime import datetime, timedelta
from backend.core.models import get_session, Stock, StockPrice
from ml_and_db.scrapers.stock_scraper import fetch_current_price, STOCKS

router = APIRouter(prefix="/api/stocks", tags=["stocks"])



def seed_stocks():
    session = get_session()
    try:
        for s in STOCKS:
            existing = session.query(Stock).filter_by(symbol=s["symbol"]).first()
            if not existing:
                stock = Stock(symbol=s["symbol"], name=s["name"])
                session.add(stock)
        session.commit()
        print(" Stocks seeded into database")
    except Exception as e:
        session.rollback()
        print(f" Error seeding stocks: {e}")
    finally:
        session.close()



def save_price(data: dict):
    session = get_session()
    try:
        record = StockPrice(
            symbol    = data["symbol"],
            open      = data["open"],
            high      = data["high"],
            low       = data["low"],
            close     = data["close"],
            volume    = data["volume"],
            timestamp = data["timestamp"],
        )
        session.add(record)
        session.commit()
    except Exception as e:
        session.rollback()
        print(f" Error saving price: {e}")
    finally:
        session.close()



@router.get("/")
def get_all_stocks():
    """Get all monitored stocks with latest price"""
    session = get_session()
    try:
        stocks = session.query(Stock).filter_by(is_active=True).all()
        result = []
        for stock in stocks:
            # Get latest price using subquery
            latest = session.query(StockPrice).filter(
                StockPrice.symbol == stock.symbol
            ).order_by(StockPrice.timestamp.desc()).first()

            # Debug — print what we find
            print(f"{stock.symbol} → latest price: {latest}")

            result.append({
                "symbol":    stock.symbol,
                "name":      stock.name,
                "price":     round(latest.close, 2) if latest else None,
                "volume":    latest.volume if latest else None,
                "timestamp": latest.timestamp.isoformat() if latest else None,
            })

        return {"stocks": result, "count": len(result)}
    finally:
        session.close()


@router.get("/{symbol}")
def get_stock(symbol: str):
    """Get a single stock with its price history"""
    session = get_session()
    try:
        stock = session.query(Stock).filter_by(symbol=symbol).first()
        if not stock:
            raise HTTPException(status_code=404, detail="Stock not found")

        # Get last 24 hours of prices
        cutoff = datetime.utcnow() - timedelta(hours=24)
        prices = session.query(StockPrice).filter(
            StockPrice.symbol == symbol,
            StockPrice.timestamp >= cutoff
        ).order_by(StockPrice.timestamp.asc()).all()

        return {
            "symbol": stock.symbol,
            "name":   stock.name,
            "prices": [
                {
                    "open":      p.open,
                    "high":      p.high,
                    "low":       p.low,
                    "close":     p.close,
                    "volume":    p.volume,
                    "timestamp": p.timestamp.isoformat(),
                }
                for p in prices
            ]
        }
    finally:
        session.close()


@router.get("/{symbol}/refresh")
def refresh_stock_price(symbol: str):
    """Fetch latest price for a stock and save to DB"""
    data = fetch_current_price(symbol)
    if not data:
        raise HTTPException(status_code=404, detail="Could not fetch price")

    save_price(data)
    return {
        "symbol": symbol,
        "price":  data["close"],
        "volume": data["volume"],
        "time":   data["timestamp"].isoformat(),
    }
@router.get("/refresh/all")
def refresh_all_stocks():
    """Fetch and save latest prices for all stocks"""
    results = []
    failed = []
    errors_detail = []

    for stock in STOCKS:
        try:
            data = fetch_current_price(stock["symbol"])
            if data:
                save_price(data)
                results.append({
                    "symbol": data["symbol"],
                    "price":  data["close"],
                })
            else:
                failed.append(stock["symbol"])
                errors_detail.append(f"{stock['symbol']}: returned None")
        except Exception as e:
            failed.append(stock["symbol"])
            errors_detail.append(f"{stock['symbol']}: {str(e)}")

    return {
        "success": len(results),
        "failed":  len(failed),
        "stocks":  results,
        "errors":  failed,
        "details": errors_detail,
    }
