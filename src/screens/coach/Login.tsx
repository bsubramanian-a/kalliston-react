import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../assets/img/logo.svg';

function Login() {
    
    return (
        <div className="row vh-100 mx-0">
        <div className="col col-12 col-lg-6 main-limg"></div>
        <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
            <div className="container my-auto mx-md-5">
                <div className="row mb-4">
                    <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                    <div className="col col-12 text-start">
                        <p className="f-color f-h">Login into Kalliston Coach</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col col-12 mb-3">
                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                    </div>
                    <div className="col col-12">
                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Password</label><input type="password" className="input-lg w-100 t-color l-size" style={{outline: "none"}} /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 mb-4 text-start"><Link to={"/register"} className="me-4 l-color l-size">Create an account</Link><Link to={"/forgot-password"} className="l-color l-size" >Forgot password</Link></div>
                    <div className="col col-12"><button className="btn btn-primary w-100 text-uppercase" type="button">Sign in</button></div>
                </div>
            </div>
        </div>
    </div>
        );
    }
  
              export default Login;