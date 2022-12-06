import React, { useContext, useState, useEffect } from 'react';
import Logo from '../assets/img/logo-d.svg';
// import { Images } from '../utils/Images';
import Trending from '../assets/img/d-menu/trending_up.svg';
import Person from '../assets/img/d-menu/person.svg';
import ChatBubble from '../assets/img/d-menu/chat_bubble_outline.svg';
import Calendar from '../assets/img/d-menu/calendar_today.png';
import FitnessCenter from '../assets/img/d-menu/fitness_center.svg';
import Computer from '../assets/img/d-menu/computer.svg';
import StoreFront from '../assets/img/d-menu/storefront.svg';
import Avatar from '../assets/img/avatars/avatar1.jpeg'
import Account from '../assets/img/set-img/s-account.svg'
import Notification from '../assets/img/set-img/s-notification.svg';
import Security from '../assets/img/set-img/s-security.svg';
import SCalendar from '../assets/img/set-img/s-calendar.svg';

function Settings() {
   
    return (
<div id="page-top">
    <div id="wrapper" className='d-flex text-start'>
        <nav className="navbar navbar-dark align-items-start d-flex flex-column justify-content-between align-items-center sidebar sidebar-dark accordion bg-white-primary shadow-n p-0">
                <div className="container-fluid d-flex flex-column p-0 vh-100">
                    <div><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-icon rotate-n-15"><img src={Logo} /></div>
                        <div className="sidebar-brand-text mx-3"><span className="text-black" style={{fontSize: "21px",fontWeight: "900"}}>Kalliston</span></div>
                    </a>
                        <hr className="sidebar-divider my-0" />
                            <ul className="navbar-nav text-light" id="accordionSidebar">
                                <li className="nav-item"><a className="nav-link" href="index.html"><img src={Trending} /><span className="f-color ms-md-4 l-size">Sales</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="client.html"><img src={Person} /><span className="f-color ms-md-4 l-size">Client</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="chat.html"><img src={ChatBubble} /><span className="f-color ms-md-4 l-size">Chat</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="schedule.html"><img src={Calendar} /><span className="f-color ms-md-4 l-size">Schedule</span></a></li>
                                <li className="nav-item"><a className="nav-link" href="fitness.html"><img src={FitnessCenter} /><span className="f-color ms-md-4 l-size">Fitness Programs</span></a></li>
                            </ul>
                    </div>
                    <ul className="navbar-nav text-light" id="accordionSidebar-1">
                        <li className="nav-item"><a className="nav-link" href="profile.html"><img src={Computer} /><span className="f-color ms-md-4 l-size">Coach Profile</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="package.html"><img src={StoreFront} /><span className="f-color ms-md-4 l-size">Packages</span></a></li>
                    </ul>
                </div>
            </nav>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar shadow-n" style={{overflow: 'hidden'}}>
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <div>
                            <p className="mb-0 f-color l-size fw-medium">Hi&nbsp;<span>Zakari</span>&nbsp;-&nbsp;<span className="fw-normal">Thu 8 Sep</span></p>
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
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow" style={{zIndex: 999}}><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><img src="assets/img/d-menu/notifications.svg" /></a>
                                    <div className="dropdown-menu dropdown-menu-end dropdown-list position-fixed animated--grow-in">
                                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="me-3">
                                                <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 12, 2019</span>
                                                <p>A new monthly report is ready to download!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="me-3">
                                                <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 7, 2019</span>
                                                <p>$290.29 has been deposited into your account!</p>
                                            </div>
                                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="me-3">
                                                <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                            </div>
                                            <div><span className="small text-gray-500">December 2, 2019</span>
                                                <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                                            </div>
                                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                            </li>
                            <li className="nav-item dropdown no-arrow">
                                <div className="nav-item dropdown show no-arrow" style={{zIndex: 999}}><a className="dropdown-toggle nav-link" aria-expanded="true" data-bs-toggle="dropdown" href="#"><img className="border rounded-circle img-profile border-0" src={Avatar} /></a>
                                    <div className="dropdown-menu show shadow dropdown-menu-end animated--grow-in position-fixed" data-bs-popper="none" style={{display: 'block', right: '30px'}}><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid vh-100">
                    <div>
                        <h1 className="h-size mb-4 f-color fw-normal mt-1">Settings</h1>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <ul className="nav nav-tabs flex-column mt-1 border-0" role="tablist" style={{width: '25%', float: 'left'}}>
                                    <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-1"><img src={Account} />&nbsp; &nbsp; &nbsp;Accout</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-2"><img src={Notification} />&nbsp; &nbsp; &nbsp;Notification</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-3"><img src={Security} />&nbsp; &nbsp; &nbsp;Security</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-4"><img src={SCalendar} />&nbsp; &nbsp; &nbsp;Schedule</a></li>
                                </ul>
                                <div className="tab-content px-4" style={{width: '75%', float: 'right'}}>
                                    <div className="tab-pane" role="tabpanel" id="tab-1">
                                        <div className="card card-s">
                                            <div className="card-body">
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <h1 className="f-color l-size mb-4">Avatar</h1>
                                                        <div className="flex-column d-flex justify-content-start align-items-start gap-3"><img className="img-profile rounded-circle" src={Avatar} /><button className="btn btn-primary text-uppercase btn-profile px-3" type="button">Change</button></div>
                                                    </div>
                                                </div>
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <h1 className="f-color l-size mb-4">Account Info</h1>
                                                        <div className="mb-3">
                                                            <div className="row">
                                                                <div className="col col-12 col-md-6 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: 'none'}} /></div>
                                                                </div>''
                                                                <div className="col col-12 col-md-6 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: 'none'}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: 'none'}} /></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">SAve changes</button>
                                                            <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
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
                                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">SAve changes</button>
                                                            <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
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
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Current Password</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: 'none'}} /></div>
                                                                </div>
                                                                <div className="col col-12">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">New Password</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: 'none'}} /></div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col mb-5">
                                                                    <h1 className="f-color l-size mb-1">Two-Factor Authentication</h1>
                                                                    <p className="mb-4">Enabling this will provide an extra layer of security for your account. When logging in, we will ask for a special authentication code from your device.</p><button className="btn btn-primary text-uppercase btn-profile px-3" type="button" style={{height: '36px',fontSize: '14px'}}>Enable Two-factor authentication</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">SAve changes</button>
                                                            <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
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
                                                        <p className="mb-4">Enabling this will provide an extra layer of security for your account. When logging in, we will ask for a special authentication code from your device.</p><button className="btn btn-primary text-uppercase btn-profile px-3" type="button" style={{height: '36px', fontSize: '14px'}}>synchronize your google calendar</button>
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