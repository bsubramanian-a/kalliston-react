import React, { useContext, useState, useEffect } from 'react';
import LogoMain from '../../assets/img/logo.svg';

function VerifyMail() {
    
    return (
        <div className="row vh-100 mx-0">
        <div className="col col-12 col-lg-6 main-limg"></div>
        <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
            <div className="container my-auto mx-md-5">
                <div className="row mb-4">
                    <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                    <div className="col col-12">
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="f-color f-h mb-0">Continue with email</p><a className="l-color l-size fw-normal" href="#">Edit email</a>
                        </div>
                        <p className="text-black-50 text-start l-size">Please type in the code we sent to john.deo@gmail.com</p>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col col-9 mb-3 d-flex justify-content-start align-items-center gap-3">
                        <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                        <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                        <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                        <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                        <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                        <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-12 mb-4 text-start"><a className="l-color l-size" href="#">Resend code</a></div>
                    <div className="col col-12 mb-4 text-start">
                        <p className="mb-0 t-h text-black-50">By continuing, you agree that we create an account for you (unless already created), and accepted our&nbsp;<a className="text-black-50" href="#">Terms and Conditions</a>&nbsp;and&nbsp;<a className="text-black-50" href="#">Privacy Policy</a>.</p>
                    </div>
                    <div className="col col-12 text-start"><button className="btn btn-primary text-uppercase px-4" type="button">Continue</button></div>
                </div>
            </div>
        </div>
    </div>
        );
    }
  
              export default VerifyMail;