import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import VerifyMail from './screens/VerifyMail';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';
import { Route, Routes } from 'react-router-dom';
import Package from './screens/Package';
import Settings
 from './screens/Settings';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/package' element={<Package/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/verify-mail' element={<VerifyMail/>}/>
        <Route path='/forgot-password' element={<ForgotPassword/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
