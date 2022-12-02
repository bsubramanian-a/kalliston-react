import React, { useContext, useState, useEffect } from 'react';
import Logo from '../assets/img/logo-d.svg';
import Trending from '../assets/img/d-menu/trending_up.svg';
import Person from '../assets/img/d-menu/person.svg';
import ChatBubble from '../assets/img/d-menu/chat_bubble_outline.svg';
import Calendar from '../assets/img/d-menu/calendar_today.png';
import FitnessCenter from '../assets/img/d-menu/fitness_center.svg';
import Computer from '../assets/img/d-menu/computer.svg';
import StoreFront from '../assets/img/d-menu/storefront.svg';
import Notifications from '../assets/img/d-menu/notifications.svg';
import ProfilePic from '../assets/img/avatars/avatar1.jpeg';
import ChartData1 from '../assets/img/d-img/chartData-1.svg';
import ChartData2 from '../assets/img/d-img/chartData-2.svg';
import ChartData3 from '../assets/img/d-img/chartData-3.svg';
import ProImg from '../assets/img/avatars/avatar2.jpeg';
import Online from '../assets/img/online.svg';
import Accept from '../assets/img/d-img/accept.svg';
import Reject from '../assets/img/d-img/reject.svg';
import Left from '../assets/img/d-img/left.svg';
import Right from '../assets/img/d-img/right.svg';

function Profile() {

    return (
        <div id="page-top">
    <div id="wrapper" className="d-flex text-start">
    <nav className="navbar navbar-dark align-items-start d-flex flex-column justify-content-between align-items-center sidebar sidebar-dark accordion bg-white-primary shadow-n p-0">
                <div className="container-fluid d-flex flex-column p-0 vh-100">
                    <div><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-icon rotate-n-15"><img src={Logo} /></div>
                        <div className="sidebar-brand-text mx-3"><span className="text-black" style={{fontSize: "21px",fontWeight: "900"}}>Kalliston</span></div>
                    </a>
                        <hr className="sidebar-divider my-0" />
                            <ul className="navbar-nav text-light" id="accordionSidebar">
                                <li className="nav-item"><a className="nav-link active" href="index.html"><img src={Trending} /><span className="f-color ms-md-4 l-size">Sales</span></a></li>
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
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar shadow-n overflow-hidden">
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
                                    <div className="nav-item dropdown no-arrow" style={{zIndex: 999}}><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><img src={Notifications} /></a>
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
                                    <div className="nav-item dropdown show no-arrow" style={{zIndex: 999}}><a className="dropdown-toggle nav-link" aria-expanded="true" data-bs-toggle="dropdown" href="#"><img className="border rounded-circle img-profile border-0" src={ProfilePic} /></a>
                                        <div className="dropdown-menu show shadow dropdown-menu-end animated--grow-in position-fixed me-5 d-block" data-bs-popper="none" ><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                            <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                <div className="container-fluid vh-100">
                    <div>
                        <h1 className="h-size mb-4 f-color fw-normal mt-1">Coach Profile</h1>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <div>
                                <ul className="nav nav-tabs flex-column mt-1 border-0 w-25" role="tablist" style={{float: "left"}}>
                                    <li className="nav-item" role="presentation"><a className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-1">Details</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-2">Social media</a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-3">Cover</a></li>
                                </ul>
                                <div className="tab-content px-4 w-75" style={{float: "right"}}>
                                    <div className="tab-pane active" role="tabpanel" id="tab-1">
                                        <div className="card card-s" style={{borderRadius: "24px !important"}}>
                                            <div className="card-body py-4">
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <div className="mb-5">
                                                            <div className="row mb-5">
                                                                <div className="col col-12 col-md-6 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 col-md-6 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Customized link</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3 mb-md-0">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{height: "76px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">Save changes</button>
                                                            <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab-2">
                                        <div className="card card-s py-2" style={{borderRadius: "24px !important"}}>
                                            <div className="card-body">
                                                <div className="row mb-4">
                                                    <div className="col">
                                                        <div className="mb-5">
                                                            <div className="row mb-5">
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Website</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Instagram</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Facebook</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">TikTok</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Youtube</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
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
                                    <div className="tab-pane" role="tabpanel" id="tab-3">
                                        <div className="card card-s mb-4" style={{borderRadius: "24px !important"}}>
                                            <div className="card-body">
                                                <div className="row py-2">
                                                    <div className="col col-12">
                                                        <h1 className="f-color fw-normal mb-3" style={{fontSize: "20px"}}>Cover</h1>
                                                        <div className="files color form-group mb-5" style={{border: "1px dashed #00000012"}}><input type="file" name="files" style={{backgroundColor: "transparent", outline: "none", border: "none"}} /></div>
                                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">Save changes</button>
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