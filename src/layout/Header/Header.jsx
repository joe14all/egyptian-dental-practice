import React from 'react';
import styles from './Header.module.css';

/**
 * A simple header component.
 * This is a good place for user info, search, or notifications.
 */
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* We can add a search bar or user menu here later */}
        <div className={styles.userInfo}>
          {/* Placeholder for user info */}
          <span>Dr. Joe</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
