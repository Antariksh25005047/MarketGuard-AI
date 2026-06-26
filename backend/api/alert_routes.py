from fastapi import APIRouter, HTTPException
from datetime import datetime, timedelta
from backend.core.models import get_session, Alert

router = APIRouter(prefix="/api/alerts", tags=["alerts"])



@router.get("/")
def get_alerts(hours: int = 24, limit: int = 20):
    """Get recent manipulation alerts"""
    session = get_session()
    try:
        cutoff = datetime.utcnow() - timedelta(hours=hours)
        alerts = session.query(Alert).filter(
            Alert.created_at >= cutoff
        ).order_by(Alert.created_at.desc()).limit(limit).all()

        return {
            "alerts": [
                {
                    "id":          a.id,
                    "symbol":      a.symbol,
                    "risk_score":  a.risk_score,
                    "risk_level":  a.risk_level,
                    "pattern":     a.pattern,
                    "description": a.description,
                    "is_resolved": a.is_resolved,
                    "created_at":  a.created_at.isoformat(),
                }
                for a in alerts
            ],
            "count": len(alerts)
        }
    finally:
        session.close()


@router.get("/{symbol}")
def get_alerts_by_symbol(symbol: str):
    """Get all alerts for a specific stock"""
    session = get_session()
    try:
        alerts = session.query(Alert).filter_by(
            symbol=symbol
        ).order_by(Alert.created_at.desc()).all()

        if not alerts:
            return {"symbol": symbol, "alerts": [], "count": 0}

        return {
            "symbol": symbol,
            "alerts": [
                {
                    "id":          a.id,
                    "risk_score":  a.risk_score,
                    "risk_level":  a.risk_level,
                    "pattern":     a.pattern,
                    "description": a.description,
                    "is_resolved": a.is_resolved,
                    "created_at":  a.created_at.isoformat(),
                }
                for a in alerts
            ],
            "count": len(alerts)
        }
    finally:
        session.close()



@router.post("/")
def create_alert(
    symbol:      str,
    risk_score:  float,
    risk_level:  str,
    pattern:     str,
    description: str,
):
    """Create a new manipulation alert"""
    session = get_session()
    try:
        alert = Alert(
            symbol      = symbol,
            risk_score  = risk_score,
            risk_level  = risk_level,
            pattern     = pattern,
            description = description,
        )
        session.add(alert)
        session.commit()
        session.refresh(alert)

        return {
            "message":   "Alert created",
            "alert_id":  alert.id,
            "symbol":    alert.symbol,
            "risk_level": alert.risk_level,
        }
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        session.close()



@router.patch("/{alert_id}/resolve")
def resolve_alert(alert_id: int):
    """Mark an alert as resolved"""
    session = get_session()
    try:
        alert = session.query(Alert).filter_by(id=alert_id).first()
        if not alert:
            raise HTTPException(status_code=404, detail="Alert not found")

        alert.is_resolved = True
        session.commit()

        return {"message": "Alert resolved", "alert_id": alert_id}
    except Exception as e:
        session.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        session.close()
