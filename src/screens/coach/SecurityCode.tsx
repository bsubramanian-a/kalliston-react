import React, { useContext, useState, useEffect } from 'react';
import LogoMain from '../../assets/img/logo.svg';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function SecurityCode() {

    return (
        <div className="vh-100">
            <div className="row mx-0">
                <div className="col col-12 col-lg-6 main-limg"></div>
                <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
                    <div className="container my-auto mx-md-5">
                        <div className="row mb-4">
                            <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                            <div className="col col-12">
                                <div>
                                    <p className="f-color f-h mb-0 text-start">Enter your security code</p>
                                </div>
                                <p className="text-black-50 l-size mb-0 text-start">Please type in the code we sent to john.deo@gmail.com</p>
                            </div>
                        </div>
                        <div className="row mb-2">
                            <div className="col col-9 mb-3 d-flex justify-content-start align-items-center gap-3">
                                <div className="form-group"><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                <div className="form-group"><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                <div className="form-group"><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                <div className="form-group"><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                <div className="form-group"><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                <div className="form-group"><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-12 mb-5 text-start"><a className="l-color l-size" href="#">Resend code</a></div>
                            <div className="col col-12 text-start"><button className="btn btn-primary text-uppercase px-4" type="submit">Continue</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SecurityCode;