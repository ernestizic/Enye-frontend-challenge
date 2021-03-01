import React from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  return ( 
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
};
 
export default App;

