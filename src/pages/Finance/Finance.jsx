import React from 'react';
import styles from './Finance.module.css';

const Finance = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Financials</h1>
      
      <div className="card">
        <h2 className={styles.sectionTitle}>Profit & Loss</h2>
        <p>Your P&L statements will be displayed here.</p>
      </div>
    </div>
  );
};

export default Finance;
