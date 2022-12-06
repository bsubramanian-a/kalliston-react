import React, { useContext, useState, useEffect } from 'react';
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


function Profile() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex text-start">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100">
                            <div>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Coach Profile</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div>
                                        <ul className="nav nav-tabs flex-column mt-1 border-0 w-25" role="tablist" style={{ float: "left" }}>
                                            <li className="nav-item" role="presentation"><a className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-1">Details</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-2">Social media</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-3">Cover</a></li>
                                        </ul>
                                        <div className="tab-content px-4 w-75" style={{ float: "right" }}>
                                            <div className="tab-pane active" role="tabpanel" id="tab-1">
                                                <div className="card card-s" style={{ borderRadius: "24px !important" }}>
                                                    <div className="card-body py-4">
                                                        <div className="row mb-4">
                                                            <div className="col">
                                                                <div className="mb-5">
                                                                    <div className="row mb-5">
                                                                        <div className="col col-12 col-md-6 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 col-md-6 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Customized link</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3 mb-md-0">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{ height: "76px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>
                                                                    <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
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
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Website</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Instagram</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Facebook</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">TikTok</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Youtube</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
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
                                                                <div className="files color form-group mb-5" style={{ border: "1px dashed #00000012" }}><Field type="file" name="files" style={{ backgroundColor: "transparent", outline: "none", border: "none" }} /></div>
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

export default Profile;