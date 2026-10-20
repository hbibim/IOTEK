export default function ProgressBar({ label, value, color, showValue = false }) {
  return (
    <div className="progress-group">
      <div className="progress-label-row">
        <span>{label}</span>
        {showValue && <strong>{value}%</strong>}
      </div>
      <div className="progress-track">
        <span style={{ width: `${value}%`, background: color }} />
      </div>
    </div>
  );
}
