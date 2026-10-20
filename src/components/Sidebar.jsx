import {
  FiHome,
  FiCpu,
  FiServer,
  FiShield,
  FiBarChart2,
  FiSettings
} from 'react-icons/fi';

const items = [
  { icon: FiHome, label: 'Overview', active: true },
  { icon: FiCpu, label: 'Operations' },
  { icon: FiServer, label: 'Devices' },
  { icon: FiShield, label: 'Security' },
  { icon: FiBarChart2, label: 'Analytics' },
  { icon: FiSettings, label: 'Settings' }
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div>
        <div className="brand">
          <div className="brand-mark">I</div>
          <div>
            <strong>IOTEK</strong>
            <small>Control Hub</small>
          </div>
        </div>

        <nav className="nav" aria-label="Sidebar navigation">
          {items.map(({ icon: Icon, label, active }) => (
            <button key={label} className={`nav-item ${active ? 'active' : ''}`} type="button">
              <Icon />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="sidebar-card">
        <div className="status-dot" />
        <div>
          <strong>System Healthy</strong>
          <small>92.3% performance</small>
        </div>
      </div>
    </aside>
  );
}
