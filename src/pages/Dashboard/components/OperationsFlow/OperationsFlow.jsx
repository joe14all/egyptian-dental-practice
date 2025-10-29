import React from 'react';
import { SheetTable } from '../../../../components';
import styles from '../FinancialPerformance/FinancialPerformance.module.css'; // Reusing styles

const headers = [
  'Month', 'Total Appointments', 'New Patients', 'Cancellations', 'Avg Visit Duration', 'Case Acceptance %', 'Chair Utilization %'
];
const rows = [
  ['Jan-23', '450', '80', '25', '45 min', '75%', '80%'],
  ['Feb-23', '480', '85', '20', '43 min', '78%', '82%'],
  ['...', '...', '...', '...', '...', '...', '...'],
];

const OperationsFlow = () => {
  return (
    <div>
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>Visualizations:</h3>
        <p>Gauge charts for utilization and acceptance would be visualized here.</p>
      </div>
      <SheetTable headers={headers} rows={rows} />
    </div>
  );
};

export default OperationsFlow;
