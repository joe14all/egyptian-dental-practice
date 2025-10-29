import React from 'react';
import { SheetTable } from '../../../../components';
import styles from './FinancialPerformance.module.css';

// Mock data for the table
const headers = [
  'Year', 'Month', 'Revenue', 'Expenses', 'Net Income', 'Margin %', 'Cumulative Cashflow', 'Notes'
];

const rows = [
  ['2023', 'Jan', '$100,000', '$80,000', '$20,000', '20.0%', '$20,000', 'Launch month'],
  ['2023', 'Feb', '$110,000', '$82,000', '$28,000', '25.5%', '$48,000', ''],
  ['2023', 'Mar', '$120,000', '$85,000', '$35,000', '29.2%', '$83,000', 'Marketing push'],
  ['...', '...', '...', '...', '...', '...', '...', '...'],
];

const FinancialPerformance = () => {
  return (
    <div>
      <div className={styles.infoBox}>
        <h3 className={styles.infoTitle}>Graphs:</h3>
        <p>Line chart (Revenue vs Expenses over time) and Waterfall chart (Cashflow components) would be visualized here.</p>
      </div>
      <SheetTable headers={headers} rows={rows} />
    </div>
  );
};

export default FinancialPerformance;
