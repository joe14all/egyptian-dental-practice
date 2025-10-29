import React from 'react';
import styles from './Operations.module.css';

const Operations = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Clinic Operations</h1>
      
      <div className="card">
        <h2 className={styles.sectionTitle}>Standard Operating Procedures (SOPs)</h2>
        <p>A document viewer for clinical protocols can go here.</p>
      </div>
    </div>
  );
};

export default Operations;
