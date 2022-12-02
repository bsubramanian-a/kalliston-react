import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import VerifyMail from './screens/VerifyMail';
import ForgotPassword from './screens/ForgotPassword';
import Register from './screens/Register';
import SecurityCode from './screens/SecurityCode';
import ThankYou from './screens/ThankYou';
import Profile from './screens/Profile';
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
        <Route path='/security-code' element={<SecurityCode/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
