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
if __name__ == "__main__":
    print(" Fetching stock prices...\n")
    results=fetch_all_stocks()
    print(f"\n Fetched {len(results)} stocks successfully")
    