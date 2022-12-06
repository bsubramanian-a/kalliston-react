import React, { useContext, useState, useEffect } from 'react';
import LogoMain from '../../assets/img/logo.svg';

function ForgotPassword() {

    return (
        <div className="vh-100">
            <div className="row mx-0">
                <div className="col col-12 col-lg-6 main-limg"></div>
                <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
                    <div className="container my-auto mx-md-5">
                        <div className="row mb-4">
                            <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                            <div className="col col-12">
                                <p className="f-color f-h mb-0 text-start">Recover your password</p>
                                <p className="text-black-50 l-size text-start">Please type in your email attached to your account</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col col-12 mb-3">
                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12 text-start"><button className="btn btn-primary px-4 text-uppercase" type="button">Send</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;