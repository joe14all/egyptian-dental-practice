import React from 'react';
import styles from './Planning.module.css';

const Planning = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">Project Planning (5-Year Plan)</h1>
      
      <div className="card">
        <h2 className={styles.sectionTitle}>Year 1: Foundation</h2>
        <p>A kanban board or task list for your milestones will go here.</p>
      </div>
    </div>
  );
};

export default Planning;
