export default function AlertPanel({ alerts }) {
  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Alerts</h3>
        <span>Today</span>
      </div>

      <div className="alert-list">
        {alerts.map((alert) => (
          <div key={alert.title} className="alert-item">
            <div className={`alert-dot ${alert.level.toLowerCase()}`} />
            <div className="alert-content">
              <strong>{alert.title}</strong>
              <small>{alert.time}</small>
            </div>
            <span className={`alert-tag ${alert.level.toLowerCase()}`}>{alert.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
