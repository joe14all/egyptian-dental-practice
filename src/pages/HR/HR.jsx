import React from 'react';
import styles from './HR.module.css';

const HR = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Human Resources</h1>
      
      <div className="card">
        <h2 className={styles.sectionTitle}>Employee Directory</h2>
        <p>A list of all staff members will go here.</p>
      </div>
    </div>
  );
};

export default HR;
