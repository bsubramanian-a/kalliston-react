import React, { useContext, useState, useEffect } from 'react';
import Notifications from '../../../assets/img/d-menu/notifications.svg';
import Avatar from "../../../assets/img/avatar.webp";
import { logout } from '../../../slices/auth';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import moment from 'moment';
import { Link, useNavigate, Navigate } from 'react-router-dom';

function TopNav() {

    const dispatch = useDispatch<any>();
    const { coach: currentUser, isLoggedIn } = useSelector((state:any) => state.auth);
    const handleLogout = () => {
        dispatch(logout());     
        navigate('/')         
    };

    let navigate = useNavigate();

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    console.log("current user from topnav");
    console.log(currentUser);

    return (
        <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar shadow-n overflow-hidden">
            <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                <div>
                    <p className="mb-0 f-color l-size fw-medium"><span>{currentUser?.firstname ? `Hi ${currentUser?.firstname}` : currentUser?.email}</span>&nbsp;-&nbsp;<span className="fw-normal">{moment().format('ddd D MMM')}</span></p>
                </div>
                <ul className="navbar-nav flex-nowrap ms-auto">
                    <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                        <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                            <form className="me-auto navbar-search w-100">
                                <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                    <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                </div>
                            </form>
                        </div>
                    </li>
                    
                    <li className="nav-item notification_menu dropdown no-arrow mx-1">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><img src={Notifications} /></a>
                            <div className="dropdown-menu dropdown-menu-end dropdown-list position-fixed animated--grow-in">
                                <h6 className="dropdown-header">alerts center</h6>
                                <Link to={"#"} className="dropdown-item d-flex align-items-center">
                                    <div className="me-3">
                                        <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 12, 2019</span>
                                        <p>A new monthly report is ready to download!</p>
                                    </div>
                                </Link>
                                <Link to={"#"} className="dropdown-item d-flex align-items-center">
                                    <div className="me-3">
                                        <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 7, 2019</span>
                                        <p>$290.29 has been deposited into your account!</p>
                                    </div>
                                </Link>
                                <Link to={"#"} className="dropdown-item d-flex align-items-center">
                                    <div className="me-3">
                                        <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                    </div>
                                    <div><span className="small text-gray-500">December 2, 2019</span>
                                        <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                    </div>
                                </Link>
                                <Link to={"#"} className="dropdown-item text-center small text-gray-500">Show All Alerts</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown no-arrow mx-1">
                        <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                    </li>
                    <li className="nav-item dropdown no-arrow">
                        <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="true" data-bs-toggle="dropdown" href="#"><img className="border rounded-circle img-profile border-0" src={currentUser?.avatar || Avatar} /></a>
                            <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in position-fixed me-5" data-bs-popper="none" style={{ right: "-26px"}} >
                                <p className="mb-1 py-0 l-size" style={{padding: "16px"}}>{currentUser?.firstname ?? ''} {currentUser?.lastname ?? ''}</p>
                                <p className="mb-0 py-0 text-black-50" style={{fontSize: "14px", padding: "16px"}}>{currentUser?.email ?? ''}</p>
                                <div className="dropdown-divider"></div>
                                <Link to={"#"} className="dropdown-item"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Support</Link>
                                <div className="dropdown-divider"></div>
                                <span onClick={handleLogout} style={{cursor:'pointer'}} className="dropdown-item"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" ></i>&nbsp;Logout</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopNav;