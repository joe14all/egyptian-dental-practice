import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import styles from './AppLayout.module.css';

function AppLayout() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsSidebarExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsSidebarExpanded(false);
  };

  return (
    <div 
      // This logic remains perfect
      className={`${styles.appContainer} ${isSidebarExpanded ? styles.sidebarExpanded : styles.sidebarCollapsed}`}
    >
      <div 
        className={styles.sidebarArea}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Sidebar isExpanded={isSidebarExpanded} />
      </div>

      <div className={styles.headerArea}>
        <Header />
      </div>
      <main className={styles.mainContent}>
        <Outlet /> {/* This renders the current page */}
      </main>
    </div>
  );
}

export default AppLayout;

