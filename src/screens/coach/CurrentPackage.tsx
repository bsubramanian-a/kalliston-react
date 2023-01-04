import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import DotMenu from '../../assets/img/dotIcon.svg'

function CurrentPackage() {
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
                                    <li className="breadcrumb-item"><Link to={"/coach/package"} className="text-decoration-none"><span className="t-color text-decoration-none">Packages</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/current-package"} className="text-decoration-none"><span className="f-color">Current Packages</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-2 f-color fw-normal mt-1">Current Packages</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-md-4">
                                    <p className="text-black-50 l-size">We recommend enabling MFA even though you have a strong password.</p>
                                </div>
                                <div className="col col-12 col-md-8">
                                    <div className="card card-s mb-4">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col col-6">
                                                    <h1 className="f-color mb-1 fw-regular l-size">Basic</h1>
                                                    <p className="text-black-50 mb-0 fw-regular expire-f">Package 1</p>
                                                </div>
                                                <div className="col col-6">
                                                    <div className="d-flex justify-content-end align-items-center"><img src={DotMenu} /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-s mb-4">
                                        <div className="card-body">
                                            <div className="row align-items-center mb-4">
                                                <div className="col col-6">
                                                    <h1 className="f-color mb-1 fw-regular l-size">Premium</h1>
                                                    <p className="text-black-50 mb-0 fw-regular expire-f">Package 2</p>
                                                </div>
                                                <div className="col col-6">
                                                    <div className="d-flex justify-content-end align-items-center"><img src={DotMenu} /></div>
                                                </div>
                                                <div className="col col-12 mt-3">
                                                    <div className='b-m'></div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div>
                                                        <div className="row">
                                                            <div className="col col-12 mb-3">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Package name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                            </div>
                                                            <div className="col col-12 col-md-6 mb-3">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Amount</label>
                                                                    <div className="d-flex justify-content-start align-items-center">
                                                                        <div className="dropdown"><button className="btn dropdown-toggle border-0 px-1 p-0 t-color no-bg" aria-expanded="false" data-bs-toggle="dropdown" type="button" style={{outline: "none"}}>$</button>
                                                                            <div className="dropdown-menu"><a className="dropdown-item" href="#"><span className='t-color'>£</span></a><a className="dropdown-item" href="#"><span className='t-color'>€</span></a><a className="dropdown-item" href="#"><span className='t-color'>₹</span></a></div>
                                                                        </div><input type="text" className="input-lg w-100 fw-normal t-color l-size border-0" style={{outline: "none"}} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col col-12 col-md-6 mb-3">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Maximum space</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                            </div>
                                                            <div className="col col-12 mb-3 mb-md-0">
                                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{height: "200px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </textarea></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-s mb-4">
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <div className="col col-6">
                                                    <h1 className="f-color mb-1 fw-regular l-size">Elite</h1>
                                                    <p className="text-black-50 mb-0 fw-regular expire-f">Package 3</p>
                                                </div>
                                                <div className="col col-6">
                                                    <div className="d-flex justify-content-end align-items-center"><img src={DotMenu} /></div>
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

export default CurrentPackage;