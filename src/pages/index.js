/*
 * This file (index.js) makes importing pages cleaner.
 * Instead of: import Dashboard from './pages/Dashboard/Dashboard';
 * We can just: import { Dashboard } from './pages';
 */

export { default as Dashboard } from "./Dashboard/Dashboard";
export { default as Finance } from "./Finance/Finance";
export { default as HR } from "./HR/HR";
export { default as Operations } from "./Operations/Operations";
export { default as Planning } from "./Planning/Planning";
