import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Dashboard';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
