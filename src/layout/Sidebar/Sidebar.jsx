import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css'; // Import CSS module
import {
  LuLayoutDashboard,
  LuLandmark,
  LuUsers,
  LuClipboardCheck,
  LuClipboardList,
  LuBuilding,
} from 'react-icons/lu';

function Sidebar({ isExpanded }) {
  
  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    /* * CLEANUP: We only need *one* state class: '.collapsed'.
     * If it's not collapsed, it's expanded by default.
     */
    <nav className={`${styles.sidebar} ${!isExpanded ? styles.collapsed : ''}`}>
      
      <div className={styles.sidebarHeader}>
        <LuBuilding className={styles.logoIcon} />
        <span className={styles.logoText}>
          Egyptian Dental Practice
        </span>
      </div>

      <ul className={styles.sidebarNav}>
        <li>
          <NavLink to="/" className={getNavLinkClass} end>
            <LuLayoutDashboard className={styles.icon} />
            <span className={styles.navText}>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/finance" className={getNavLinkClass}>
            <LuLandmark className={styles.icon} />
            <span className={styles.navText}>Finance</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/hr" className={getNavLinkClass}>
            <LuUsers className={styles.icon} />
            <span className={styles.navText}>Human Resources</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/planning" className={getNavLinkClass}>
            <LuClipboardCheck className={styles.icon} />
            <span className={styles.navText}>Project Planning</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/operations" className={getNavLinkClass}>
            <LuClipboardList className={styles.icon} />
            <span className={styles.navText}>Operations</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;

