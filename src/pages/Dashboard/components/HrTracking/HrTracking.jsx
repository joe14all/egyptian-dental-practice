import React from 'react';
import { SheetTable } from '../../../../components';
import styles from '../FinancialPerformance/FinancialPerformance.module.css'; // Reusing styles

const headers = [
  'Employee Name', 'Role', 'Start Date', 'Training Completed', 'Performance Score', 'Retention Status', 'Productivity Index'
];
const rows = [
  ['Jane Doe', 'Senior Dentist', '2022-01-15', '100%', '4.8 / 5.0', 'Active', '1.2'],
  ['John Smith', 'Dental Assistant', '2023-03-01', '80%', '4.2 / 5.0', 'Active', '0.9'],
  ['...', '...', '...', '...', '...', '...', '...'],
];

const HrTracking = () => {
  return (
    <div>
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>Visualizations:</h3>
        <p>Heatmap of staff performance and Pivot summary by department would be visualized here.</p>
      </div>
      <SheetTable headers={headers} rows={rows} />
    </div>
  );
};

export default HrTracking;
