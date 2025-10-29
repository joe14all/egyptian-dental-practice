import React from 'react';
import { KpiTile } from '../../../../components'; // Import global component
import styles from './ExecutiveSummary.module.css';

// Simple progress bar sub-component
const ProgressBar = ({ percentage }) => (
  <div className={styles.progressBarContainer}>
    <div className={styles.progressBar} style={{ width: `${percentage}%` }} />
  </div>
);

const ExecutiveSummary = () => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Financial KPI Tiles</h3>
      <div className={styles.kpiGrid}>
        <KpiTile 
          title="Total Revenue" 
          value="$1.2M" 
          variance="+12% vs. Target" 
          varianceColor="green" 
        />
        <KpiTile 
          title="Operating Cost" 
          value="$800K" 
          variance="+5% vs. Target" 
          varianceColor="red" 
        />
        <KpiTile 
          title="EBITDA" 
          value="$400K" 
          variance="+8% vs. Target" 
          varianceColor="green" 
        />
        <KpiTile 
          title="Profit Margin" 
          value="33.3%" 
          variance="-1% vs. Target" 
          varianceColor="yellow" 
        />
      </div>

      <h3 className={styles.sectionTitle}>Operational KPI Tiles</h3>
      <div className={styles.kpiGrid}>
        <KpiTile title="Chair Utilization" value="85%">
          <ProgressBar percentage={85} />
        </KpiTile>
        <KpiTile title="Patient Flow Efficiency" value="92%">
          <ProgressBar percentage={92} />
        </KpiTile>
        <KpiTile title="Case Acceptance Rate" value="78%">
          <ProgressBar percentage={78} />
        </KpiTile>
      </div>
    </div>
  );
};

export default ExecutiveSummary;
