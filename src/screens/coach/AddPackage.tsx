import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import Person from '../../assets/img/package-img/personFilled.svg';
import NotificationsFilled from '../../assets/img/package-img/notificationsFilled.svg';
import LockFilled from '../../assets/img/package-img/lockFilled.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddPackage() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Add Package</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div>
                                        <ul className="nav nav-tabs flex-column mt-1 border-0 w-25" role="tablist" style={{ float: "left" }}>
                                            <li className="nav-item" role="presentation"><Link to="#tab-1" className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab"><img src={Person} />&nbsp; &nbsp; &nbsp; Details</Link></li>
                                            <li className="nav-item" role="presentation"><Link to="#tab-2" className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab"><img src={NotificationsFilled} />&nbsp; &nbsp; &nbsp; Offers</Link></li>
                                            <li className="nav-item" role="presentation"><Link to="#tab-3" className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab"><img src={LockFilled} />&nbsp; &nbsp; &nbsp; Pricing</Link></li>
                                        </ul>
                                        <div className="tab-content px-4 w-75" style={{ float: "right" }}>
                                            <div className="tab-pane active" role="tabpanel" id="tab-1">
                                                <div className="card card-s" style={{ borderRadius: "24px !important" }}>
                                                    <div className="card-body py-4">
                                                        <div className="row mb-4">
                                                            <div className="col">
                                                                <div className="mb-5">
                                                                    <div className="row mb-5">
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Package name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} placeholder="Link here" /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3 mb-md-0">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Description</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{ height: "76px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea></div>
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
                                            <div className="tab-pane" role="tabpanel" id="tab-2">
                                                <div className="card card-s py-2" style={{ borderRadius: "24px !important" }}>
                                                    <div className="card-body">
                                                        <div className="row mb-4">
                                                            <div className="col">
                                                                <div className="mb-5">
                                                                    <div className="row mb-5">
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Website</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Instagram</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Facebook</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">TikTok</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Youtube</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">SAve changes</button>
                                                                    <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab-3">
                                                <div className="card card-s mb-4" style={{ borderRadius: "24px !important" }}>
                                                    <div className="card-body">
                                                        <div className="row py-2">
                                                            <div className="col col-12">
                                                                <h1 className="f-color fw-normal mb-3" style={{ fontSize: "20px" }}>Cover</h1>
                                                                <div className="files color form-group mb-5" style={{ border: "1px dashed #00000012" }}><input type="file" name="files" style={{ backgroundColor: "transparent", outline: "none", border: "none" }} /></div>
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
                            </div>
                        </div>
                    </div>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>
        </div>
    );
}

export default AddPackage;
