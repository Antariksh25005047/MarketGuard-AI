import yfinance as yf
import pandas as pd
from datetime import datetime


STOCKS= [
    {"symbol": "RELIANCE.NS", "name": "Reliance Industries"},
    {"symbol": "TCS.NS", "name": "Tata Consultancy"},
    {"symbol": "HDFCBANK.NS", "name": "HDFC Bank"},
    {"symbol": "SUZLON.NS", "name": "Suzlon Energy"},
    {"symbol": "RPOWER.NS", "name": "Reliance Power"},
    {"symbol": "YESBANK.NS", "name": "Yes Bank"},
    {"symbol": "ETERNAL.NS",    "name": "Zomato"},
    {"symbol": "ADANIENT.NS", "name": "Adani Enterprises"},
    {"symbol": "TMCV.NS", "name": "Tata Motors"},
    {"symbol": "IRFC.NS", "name": "IRFC"},
]

def fetch_current_price(symbol: str)-> dict:
    try:
        ticker = yf.Ticker(symbol)
        hist=ticker.history(period="1d", interval="1m")
        if hist.empty:
            print(f"No data for {symbol}")
            return None
        latest= hist.iloc[-1]
        return {
            "symbol": symbol,
            "timestamp": hist.index[-1].to_pydatetime(),
            "open": float(latest["Open"]),
            "high": float(latest["High"]),
            "low": float(latest["Low"]),
            "close": float(latest["Close"]),
            "volume": float(latest["Volume"])
        }
    except Exception as e:
        print(f"Error fetching {symbol}: {e}")
        return None


def fetch_all_stocks()-> list:
    results = []
    for stock in STOCKS:
        print(f"Fetching {stock['name']}...")
        data = fetch_current_price(stock['symbol'])
        if data:
            results.append(data)
            print(f"  {data['close']:.2f} | Vol: {data['volume']:,.0f}")
    return results

def fetch_stock_details(symbol: str):
    try:
        ticker = yf.Ticker(symbol)
        info = ticker.info

        return {
            "symbol": symbol,
            "companyName": info.get("longName"),
            "price": info.get("currentPrice"),
            "previousClose": info.get("previousClose"),
            "marketCap": info.get("marketCap"),
            "volume": info.get("volume"),
            "high52w": info.get("fiftyTwoWeekHigh"),
            "low52w": info.get("fiftyTwoWeekLow"),
            "peRatio": info.get("trailingPE"),
            "eps": info.get("trailingEps"),
            "beta": info.get("beta"),
        }

    except Exception as e:
        print(f"Error fetching stock details: {e}")
        return None
    
def fetch_stock_history(symbol: str, period="6mo"):
    try:
        ticker = yf.Ticker(symbol)


        INTERVAL_MAP = {
            "1d": "5m",
            "5d": "30m",
            "1mo": "1d",
            "6mo": "1d",
            "1y": "1d",
            "5y": "1wk",
        }

        interval = INTERVAL_MAP.get(period, "1d")

        hist = ticker.history(
            period=period,
            interval=interval
        )

        if hist.empty:
            return None
        
        hist = hist.dropna()

        history = []

        for date, row in hist.iterrows():

            if pd.isna(row["Open"]) or pd.isna(row["Close"]):
               continue

            history.append({
                "date": date.strftime("%Y-%m-%d"),
                "open": float(row["Open"]),
                "high": float(row["High"]),
                "low": float(row["Low"]),
                "close": float(row["Close"]),
                "volume": int(row["Volume"]),
            })

        return history

    except Exception as e:
        print(f"Error fetching stock history: {e}")
        return None

if __name__ == "__main__":
    print(" Fetching stock prices...\n")
    results=fetch_all_stocks()
    print(f"\n Fetched {len(results)} stocks successfully")
    