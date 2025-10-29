import React from 'react';
import styles from './KpiTile.module.css';

/**
 * A reusable KPI Tile.
 * @param {string} title - The title of the metric
 * @param {string} value - The main value
 * @param {string} [variance] - The variance string (e.g., "+12% vs. Target")
 * @param {'green' | 'red' | 'yellow'} [varianceColor] - Controls the text color of the variance
 * @param {React.ReactNode} [children] - For extra content like progress bars
 */
const KpiTile = ({ title, value, variance, varianceColor, children }) => {
  
  // Maps the color prop to the correct CSS module class
  const varianceClasses = {
    green: styles.textGreen,
    red: styles.textRed,
    yellow: styles.textYellow,
  };

  const varianceClassName = varianceColor ? varianceClasses[varianceColor] : '';

  return (
    <div className={`${styles.kpiTile} card`}> {/* Re-using global .card style */}
      <h4 className={styles.kpiTitle}>{title}</h4>
      <p className={styles.kpiValue}>{value}</p>
      {variance && (
        <p className={`${styles.kpiVariance} ${varianceClassName}`}>
          {variance}
        </p>
      )}
      {children}
    </div>
  );
};

export default KpiTile;
