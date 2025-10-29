import React, { useState } from 'react';
import styles from './Dashboard.module.css';

// Import the new tab components
import { 
  ExecutiveSummary, 
  FinancialPerformance,
  OperationsFlow,
  HrTracking
} from './components';

// Define our tabs
const TABS = [
  { id: 'exec_summary', label: '1. Executive Summary' },
  { id: 'financial_perf', label: '2. Financial Performance' },
  { id: 'ops_flow', label: '3. Operations & Patient Flow' },
  { id: 'hr_tracking', label: '4. HR Tracking' },
  // { id: 'marketing_perf', label: '5. Marketing Performance' },
  // { id: 'milestones', label: '6. Milestones & Timeline' },
  // { id: 'risk_register', label: '7. Risk Register' },
];

// Helper component to render the correct tab content
const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'exec_summary':
      return <ExecutiveSummary />;
    case 'financial_perf':
      return <FinancialPerformance />;
    case 'ops_flow':
      return <OperationsFlow />;
    case 'hr_tracking':
      return <HrTracking />;
    default:
      return <ExecutiveSummary />;
  }
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('exec_summary'); // Default tab

  return (
    <div className={`page-content ${styles.dashboardContainer}`}>
      {/* Page title is global */}
      <h1 className="page-title">Master Dashboard</h1>

      {/* Tab Navigation */}
      <div className={styles.tabContainer}>
        <nav className={styles.tabNav} aria-label="Tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.tabActive : ''
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content Area */}
      <div className={styles.tabContent}>
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default Dashboard;

