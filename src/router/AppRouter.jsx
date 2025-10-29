import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Layout
// The import path is updated to point to the 'layout' directory's index file
import AppLayout from '../layout';

// Import Pages
import { 
  Dashboard, 
  Finance, 
  HR, 
  Planning, 
  Operations 
} from '../pages';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        {/* This <Route> path="/" element={<AppLayout />} /> wrapper
          is the key. It makes every page component listed inside
          render within the AppLayout (Sidebar + Header + Content Area).
        */}
        <Route path="/" element={<AppLayout />}>
          {/* 'index' makes this the default child route for "/" */}
          <Route index element={<Dashboard />} />
          
          <Route path="finance" element={<Finance />} />
          <Route path="hr" element={<HR />} />
          <Route path="planning" element={<Planning />} />
          <Route path="operations" element={<Operations />} />
          
          {/* A "catch-all" route. If no other route matches,
              it will redirect to the Dashboard. */}
          <Route path="*" element={<Dashboard />} /> 
        </Route>
      </Routes>
    </Router>
  );
}
