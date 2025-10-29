import React from "react";
import "./App.css"; // Import page-level styles
import AppRouter from "./router/AppRouter";

/**
 * The main App component is now very simple.
 * Its only job is to render the AppRouter, which
 * handles all navigation and layout logic.
 */
function App() {
  return <AppRouter />;
}

export default App;
