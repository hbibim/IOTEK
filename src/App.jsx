import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatCard from './components/StatCard';
import ProgressBar from './components/ProgressBar';
import DeviceTable from './components/DeviceTable';
import AlertPanel from './components/AlertPanel';
import './styles/dashboard.css';

const stats = [
  { title: 'Total Devices', value: '1,284', growth: '+12.4%', tone: 'teal' },
  { title: 'Uptime', value: '99.2%', growth: '+0.8%', tone: 'blue' },
  { title: 'Open Alerts', value: '24', growth: '-8.1%', tone: 'amber' },
  { title: 'Energy Use', value: '68%', growth: '+3.7%', tone: 'purple' }
];

const systemLoads = [
  { name: 'CPU Load', value: 76, color: '#2dd4bf' },
  { name: 'Memory', value: 68, color: '#60a5fa' },
  { name: 'Bandwidth', value: 82, color: '#a78bfa' },
  { name: 'Storage', value: 54, color: '#fbbf24' }
];

const networkFlow = [
  { label: 'Northbound', percent: 81, color: '#2dd4bf' },
  { label: 'Southbound', percent: 63, color: '#60a5fa' },
  { label: 'Edge Sync', percent: 91, color: '#a78bfa' }
];

const devices = [
  { name: 'Gateway A12', status: 'Online', zone: 'North Wing', uptime: '99.8%', cpu: '46%' },
  { name: 'Sensor Node 07', status: 'Warning', zone: 'Production', uptime: '96.4%', cpu: '72%' },
  { name: 'Power Unit 3', status: 'Online', zone: 'Basement', uptime: '98.7%', cpu: '58%' },
  { name: 'IoT Hub 9', status: 'Offline', zone: 'Remote', uptime: '89.1%', cpu: '0%' }
];

const alerts = [
  { title: 'Thermal threshold exceeded', time: '2 min ago', level: 'High' },
  { title: 'Backup sync delayed', time: '12 min ago', level: 'Medium' },
  { title: 'Battery at 18%', time: '24 min ago', level: 'Critical' }
];

function App() {
  return (
    <div className="dashboard-shell">
      <Sidebar />

      <main className="main-panel">
        <Topbar />

        <section className="stats-grid">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </section>

        <section className="content-grid">
          <div className="panel panel-large">
            <div className="panel-header">
              <h3>System Load</h3>
              <span>Last 24 hours</span>
            </div>

            <div className="progress-stack">
              {systemLoads.map((item) => (
                <ProgressBar
                  key={item.name}
                  label={item.name}
                  value={item.value}
                  color={item.color}
                  showValue
                />
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="panel-header">
              <h3>Network Flow</h3>
              <span>Live</span>
            </div>

            <div className="flow-list">
              {networkFlow.map((item) => (
                <div className="flow-item" key={item.label}>
                  <div className="flow-label-row">
                    <span>{item.label}</span>
                    <strong>{item.percent}%</strong>
                  </div>
                  <div className="mini-track">
                    <span style={{ width: `${item.percent}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bottom-grid">
          <div className="panel wide-panel">
            <div className="panel-header">
              <h3>Connected Devices</h3>
              <button className="ghost-btn" type="button">Export</button>
            </div>
            <DeviceTable devices={devices} />
          </div>

          <AlertPanel alerts={alerts} />
        </section>
      </main>
    </div>
  );
}

export default App;
