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
import Settings from './screens/coach/Settings';
import InvoiceBilling from './screens/coach/InvoiceBilling';
import AddPackage from './screens/coach/AddPackage';
import Schedule from './screens/coach/Schedule';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/coach/dashboard' element={<Dashboard />} />
        <Route path='/coach/package' element={<Package />} />
        <Route path='/coach/login' element={<Login />} />
        <Route path='/coach/verify-mail' element={<VerifyMail />} />
        <Route path='/coach/forgot-password' element={<ForgotPassword />} />
        <Route path='/coach/register' element={<Register />} />
        <Route path='/coach/settings' element={<Settings />} />
        <Route path='/coach/security-code' element={<SecurityCode />} />
        <Route path='/coach/thank-you' element={<ThankYou />} />
        <Route path='/coach/profile' element={<Profile />} />
        <Route path='/coach/invoice-billing' element={<InvoiceBilling />} />
        <Route path='/coach/add-package' element={<AddPackage />} />
        <Route path='/coach/schedule' element={<Schedule />} />
      </Routes>
    </div>
  );
}

export default App;
