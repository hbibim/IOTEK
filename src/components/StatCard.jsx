export default function StatCard({ title, value, growth, tone }) {
  return (
    <div className={`stat-card ${tone}`}>
      <div className="stat-header">
        <span>{title}</span>
        <span className="chip">{growth}</span>
      </div>
      <h2>{value}</h2>
    </div>
  );
}
