import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/coach/Dashboard';
import Login from './screens/coach/Login';
import VerifyMail from './screens/coach/VerifyMail';
import ForgotPassword from './screens/coach/ForgotPassword';
import Register from './screens/coach/Register';
import SecurityCode from './screens/coach/SecurityCode';
import ThankYou from './screens/coach/ThankYou';
import Profile from './screens/coach/Profile';
import { Route, Routes } from 'react-router-dom';
import Package from './screens/coach/Package';
import Settings
 from './screens/coach/Settings';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
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
