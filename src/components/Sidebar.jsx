import { NavLink } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Array Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          📊 Overview
        </NavLink>
        <NavLink to="/schedule" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          📅 Project Schedule
        </NavLink>
        <NavLink to="/timeline" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          📈 Project Timeline
        </NavLink>
        <NavLink to="/module-freeze" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
          🧊 Module Freeze
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
