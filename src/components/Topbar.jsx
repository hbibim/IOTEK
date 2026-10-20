import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi';

export default function Topbar() {
  return (
    <header className="topbar">
      <label className="search-box" aria-label="Search">
        <FiSearch />
        <input type="text" placeholder="Search devices, alerts, zones..." />
      </label>

      <div className="topbar-actions">
        <button className="icon-btn" type="button" aria-label="Notifications">
          <FiBell />
        </button>

        <div className="profile-box">
          <div className="avatar">HB</div>
          <div>
            <strong>Hbibim</strong>
            <small>Admin</small>
          </div>
          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}
