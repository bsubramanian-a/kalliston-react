import React, { useContext, useState, useEffect } from 'react';


function Package() {
   
    return (
<div id="page-top">
    <div id="wrapper">
        <nav className="navbar navbar-dark align-items-start d-flex flex-column justify-content-between align-items-center sidebar sidebar-dark accordion bg-white-primary shadow-n p-0">
            <div className="container-fluid d-flex flex-column p-0 vh-100">
                <div><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
                        <div className="sidebar-brand-icon rotate-n-15"><img src={Logo}/></div>
                        <div className="sidebar-brand-text mx-3"><span className="text-black" style="font-size: 21px;font-weight: 900;">KAlliston</span></div>
                    </a>
                    <hr className="sidebar-divider my-0">
                    <ul className="navbar-nav text-light" id="accordionSidebar">
                        <li className="nav-item"><a className="nav-link" href="index.html"><img src="assets/img/d-menu/trending_up.svg"><span className="f-color ms-md-4 l-size">Sales</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="client.html"><img src="assets/img/d-menu/person.svg"><span className="f-color ms-md-4 l-size">Client</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="chat.html"><img src="assets/img/d-menu/chat_bubble_outline.svg"><span className="f-color ms-md-4 l-size">Chat</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="schedule.html"><img src="assets/img/d-menu/calendar_today.png"><span className="f-color ms-md-4 l-size">Schedule</span></a></li>
                        <li className="nav-item"><a className="nav-link" href="fitness.html"><img src="assets/img/d-menu/fitness_center.svg"><span className="f-color ms-md-4 l-size">Fitness Programs</span></a></li>
                    </ul>
                </div>
                <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button"></button></div>
                <ul className="navbar-nav text-light" id="accordionSidebar-1">
                    <li className="nav-item"><a className="nav-link" href="profile.html"><img src="assets/img/d-menu/computer.svg"><span className="f-color ms-md-4 l-size">Coach Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link active" href="package.html"><img src="assets/img/d-menu/storefront.svg"><span className="f-color ms-md-4 l-size">Packages</span></a></li>
                </ul>
            </div>
        </nav>
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar shadow-n" style="overflow: hidden;">
                    <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars"></i></button>
                        <div>
                            <p className="mb-0 f-color l-size fw-medium">Hi&nbsp;<span>Zakari</span>&nbsp;-&nbsp;<span className="fw-normal">Thu 8 Sep</span></p>
                        </div>
                        <ul className="navbar-nav flex-nowrap ms-auto">
                            <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search"></i></a>
                                <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                    <form className="me-auto navbar-search w-100">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ...">
                                            <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li className="nav-item dropdown no-arrow mx-1">
                                <div className="nav-item dropdown no-arrow" style="z-index: 999;"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><img src="assets/img/d-menu/notifications.svg"></a>
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
                                <div className="nav-item dropdown show no-arrow" style="z-index: 999;"><a className="dropdown-toggle nav-link" aria-expanded="true" data-bs-toggle="dropdown" href="#"><img className="border rounded-circle img-profile border-0" src="assets/img/avatars/avatar1.jpeg"></a>
                                    <div className="dropdown-menu show shadow dropdown-menu-end animated--grow-in position-fixed" data-bs-popper="none" style="display: block;right: 30px;"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Activity log</a>
                                        <div className="dropdown-divider"></div><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i>&nbsp;Logout</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container-fluid vh-100">
                    <div><span className="text-black-50 l-size">Sales</span>
                        <h1 className="h-size mb-4 f-color fw-normal mt-1">Sales</h1>
                    </div>
                    <div className="row mb-4">
                        <div className="col col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0 card-s">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col col-12 px-2 d-flex mb-3">
                                            <div className="px-3 py-1 tag-p d-flex justify-content-center align-items-center rounded-pill"><span className="text-white" style="font-size: 12px;">Published</span></div>
                                        </div>
                                        <div className="col col-12 px-2">
                                            <h1 className="f-h f-color fw-semibold mb-3">Calisthenics Taster</h1>
                                            <p className="f-color mb-5">A programme to introduce you to the basics <br>of calisthenics</p>
                                            <h1 className="f-color mb-3 fw-medium" style="font-size: 20px;">Program type</h1>
                                            <p className="f-color mb-5 l-size">Catisthenics</p>
                                        </div>
                                        <div className="col col-12 px-2">
                                            <h1 className="f-color mb-3 fw-medium" style="font-size: 20px;">Offer</h1>
                                            <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Duration</span><span className="f-color l-size fw-normal">4 weeks</span></div>
                                            <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Priority direct chat </span><span className="f-color l-size fw-normal">No</span></div>
                                            <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-semibold">Checking Calls</span><span className="f-color l-size fw-normal">No</span></div><button className="btn btn-primary w-100 text-uppercase btn-edit" type="button">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 col-xl-4">
                            <div className="card shadow border-0 card-s">
                                <div className="card-body">
                                    <div className="row align-items-center no-gutters">
                                        <div className="col col-12 px-2 d-flex mb-3">
                                            <div className="px-3 py-1 tag-d d-flex justify-content-center align-items-center rounded-pill"><span className="text-white" style="font-size: 12px;">Draft</span></div>
                                        </div>
                                        <div className="col col-12 px-2">
                                            <h1 className="f-h f-color fw-semibold mb-3">Calisthenics Taster</h1>
                                            <p className="f-color mb-5">A programme to introduce you to the basics <br>of calisthenics</p>
                                            <h1 className="f-color mb-3 fw-medium" style="font-size: 20px;">Program type</h1>
                                            <p className="f-color mb-5 l-size">Catisthenics</p>
                                        </div>
                                        <div className="col col-12 px-2">
                                            <h1 className="f-color mb-3 fw-medium" style="font-size: 20px;">Offer</h1>
                                            <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Duration</span><span className="f-color l-size fw-normal">12 weeks</span></div>
                                            <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Priority direct chat </span><span className="f-color l-size fw-normal">Yes</span></div>
                                            <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-semibold">Checking Calls</span><span className="f-color l-size fw-normal">6</span></div><button className="btn btn-primary w-100 text-uppercase btn-edit" type="button">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 col-xl-4">
                            <div className="card border-0 card-s h-100" style="background-color: #ECECEC;height: 538px !important;">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center flex-column"><img className="mb-2" src="assets/img/package-img/closeFilled.svg">
                                        <p className="mb-0 text-uppercase m-p fw-semibold" style="color: #868686;">Add</p>
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
  
export default Package;