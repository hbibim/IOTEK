export default function DeviceTable({ devices }) {
  return (
    <table className="device-table">
      <thead>
        <tr>
          <th>Device</th>
          <th>Status</th>
          <th>Zone</th>
          <th>Uptime</th>
          <th>CPU</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((device) => (
          <tr key={device.name}>
            <td>{device.name}</td>
            <td>
              <span className={`status-badge ${device.status.toLowerCase()}`}>
                {device.status}
              </span>
            </td>
            <td>{device.zone}</td>
            <td>{device.uptime}</td>
            <td>{device.cpu}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
