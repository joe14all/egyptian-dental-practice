import React from 'react';
import styles from './SheetTable.module.css';

/**
 * A reusable "spreadsheet-style" table.
 * @param {string[]} headers - An array of header titles (e.g., ['Month', 'Revenue'])
 * @param {React.ReactNode[][]} rows - A 2D array of data for the cells
 */
const SheetTable = ({ headers, rows }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.sheetTable}>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetTable;
