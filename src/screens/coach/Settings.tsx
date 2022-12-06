import React, { useContext, useState, useEffect } from 'react';

import Avatar from '../../assets/img/avatars/avatar1.jpeg'
import Account from '../../assets/img/set-img/s-account.svg'
import Notification from '../../assets/img/set-img/s-notification.svg';
import Security from '../../assets/img/set-img/s-security.svg';
import SCalendar from '../../assets/img/set-img/s-calendar.svg';
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Settings() {

    return (
        <div id="page-top">
            <div id="wrapper" className='d-flex text-start'>
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100">
                            <div>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Settings</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div>
                                        <ul className="nav nav-tabs flex-column mt-1 border-0" role="tablist" style={{ width: '25%', float: 'left' }}>
                                            <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-1"><img src={Account} />&nbsp; &nbsp; &nbsp;Accout</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-2"><img src={Notification} />&nbsp; &nbsp; &nbsp;Notification</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-3"><img src={Security} />&nbsp; &nbsp; &nbsp;Security</a></li>
                                            <li className="nav-item" role="presentation"><a className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-4"><img src={SCalendar} />&nbsp; &nbsp; &nbsp;Schedule</a></li>
                                        </ul>
                                        <div className="tab-content px-4" style={{ width: '75%', float: 'right' }}>
                                            <div className="tab-pane" role="tabpanel" id="tab-1">
                                                <div className="card card-s">
                                                    <div className="card-body">
                                                        <div className="row mb-4">
                                                            <div className="col">
                                                                <h1 className="f-color l-size mb-4">Avatar</h1>
                                                                <div className="flex-column d-flex justify-content-start align-items-start gap-3"><img className="img-profile rounded-circle" src={Avatar} /><button className="btn btn-primary text-uppercase btn-profile px-3" type="submit">Change</button></div>
                                                            </div>
                                                        </div>
                                                        <div className="row mb-4">
                                                            <div className="col">
                                                                <h1 className="f-color l-size mb-4">Account Info</h1>
                                                                <div className="mb-3">
                                                                    <div className="row">
                                                                        <div className="col col-12 col-md-6 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: 'none' }} /></div>
                                                                        </div>''
                                                                        <div className="col col-12 col-md-6 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: 'none' }} /></div>
                                                                        </div>
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: 'none' }} /></div>
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
                                                <div className="card card-s">
                                                    <div className="card-body">
                                                        <div className="row mb-4">
                                                            <div className="col col-12 mb-5">
                                                                <h1 className="f-h f-color fw-normal mb-4">Privacy</h1>
                                                                <div className="mb-3">
                                                                    <div className="mb-1"><label className="switch">
                                                                        <input type="checkbox" />
                                                                        <span className="slider round"></span>
                                                                    </label><span className="f-color l-size">Email notification</span></div>
                                                                    <p className="text-black-50 t-h">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-1"><label className="switch">
                                                                        <input type="checkbox" />
                                                                        <span className="slider round"></span>
                                                                    </label><span className="f-color l-size">New logins</span></div>
                                                                    <p className="text-black-50 t-h">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col col-12 mb-5">
                                                                <h1 className="f-h f-color fw-normal mb-4">Clients</h1>
                                                                <div className="mb-3">
                                                                    <div className="mb-1"><label className="switch">
                                                                        <input type="checkbox" />
                                                                        <span className="slider round"></span>
                                                                    </label><span className="f-color l-size">New request</span></div>
                                                                    <p className="text-black-50 t-h">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                                                </div>
                                                                <div>
                                                                    <div className="mb-1"><label className="switch">
                                                                        <input type="checkbox" />
                                                                        <span className="slider round"></span>
                                                                    </label><span className="f-color l-size">Messages</span></div>
                                                                    <p className="text-black-50 t-h">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                                                                </div>
                                                            </div>
                                                            <div className="col pt-5">
                                                                <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>
                                                                    <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab-3">
                                                <div className="card card-s">
                                                    <div className="card-body">
                                                        <div className="row mb-4">
                                                            <div className="col">
                                                                <h1 className="f-color l-size mb-4">Change Password</h1>
                                                                <div className="mb-5">
                                                                    <div className="row mb-5">
                                                                        <div className="col col-12 mb-3">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Current Password</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: 'none' }} /></div>
                                                                        </div>
                                                                        <div className="col col-12">
                                                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">New Password</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: 'none' }} /></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                        <div className="col mb-5">
                                                                            <h1 className="f-color l-size mb-1">Two-Factor Authentication</h1>
                                                                            <p className="mb-4">Enabling this will provide an extra layer of security for your account. When logging in, we will ask for a special authentication code from your device.</p><button className="btn btn-primary text-uppercase btn-profile px-3" type="submit" style={{ height: '36px', fontSize: '14px' }}>Enable Two-factor authentication</button>
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
                                            <div className="tab-pane active" role="tabpanel" id="tab-4">
                                                <div className="card card-s">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col py-3">
                                                                <h1 className="f-color l-size mb-1">Synchronize on Google calendar</h1>
                                                                <p className="mb-4">Enabling this will provide an extra layer of security for your account. When logging in, we will ask for a special authentication code from your device.</p><button className="btn btn-primary text-uppercase btn-profile px-3" type="submit" style={{ height: '36px', fontSize: '14px' }}>synchronize your google calendar</button>
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

    )
}
export default Settings;