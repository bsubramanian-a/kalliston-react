import React, { useContext, useState, useEffect } from 'react';
import CreditCard from '../../assets/img/card-img/_creditCards.svg';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function BillingSettings() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/settings"} className="text-decoration-none"><span className="t-color text-decoration-none"> settings</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Billing settings</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-2 f-color fw-normal mt-1">Your Billing Details</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-md-4">
                                    <p className="text-black-50 l-size">We recommend enabling MFA even though you have a strong password.</p>
                                </div>
                                <div className="col col-12 col-md-8">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                <div className="col">
                                                    <div className="mb-5">
                                                        <div className="row mb-5">
                                                            <div className="col col-12 mb-3">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address Line 1</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                            </div>
                                                            <div className="col col-12 mb-3">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address Line 2</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                            </div>
                                                            <div className="col col-12 col-md-6 mb-3 mb-md-0">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">City</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                            </div>
                                                            <div className="col col-12 col-md-6 mb-3 mb-md-0">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Country</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>
                                                        <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default BillingSettings;