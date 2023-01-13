import React, { useContext, useState, useEffect } from 'react';
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';

function ClientInfo() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/clients"} className="text-decoration-none"><span className="t-color text-decoration-none">Client List</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/manage-user"} className="text-decoration-none"><span className="t-color">Henry Brown</span></Link></li>
                                    <li className="breadcrumb-item">
                                        <Link to={"#"} className="text-decoration-none">
                                            <span className="f-color">Client Information</span>
                                        </Link>
                                    </li>
                                </ol>
                                <h1 className="h-size mb-5 f-color fw-normal mt-1">Eva Briley</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-md-4">
                                    <p className="text-black-50 l-size">The client details and informations are private and con’t be shared</p>
                                </div>
                                <div className="col col-12 col-md-8">
                                    <div className="card card-s mb-4">
                                        <div className="card-body">
                                            <div className="pt-1 pb-2 mb-4 b-c">
                                                <h1 className="f-color fw-regular f-h">Client Information</h1>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col col-6"><span className="f-color l-size fw-medium">Email</span></div>
                                                <div className="col col-6"><span className="f-color l-size fw-normal">henry@gmail.com</span></div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col col-6"><span className="f-color l-size fw-medium">Phone</span></div>
                                                <div className="col col-6"><span className="f-color l-size fw-normal">+447236 5489 721</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="pt-1 pb-2 mb-4 bottomC">
                                                <h1 className="f-color fw-regular f-h">Onboarding Informations</h1>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col col-6"><span className="f-color l-size fw-medium">Experience</span></div>
                                                <div className="col col-6"><span className="f-color l-size fw-normal">I’m going to the gym 3 times per week.</span></div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col col-6"><span className="f-color l-size fw-medium">Injuries/additional information</span></div>
                                                <div className="col col-6"><span className="f-color l-size fw-normal">No</span></div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col col-6"><span className="f-color l-size fw-medium">Goals</span></div>
                                                <div className="col col-6"><span className="f-color l-size fw-normal">I want to gain weight.</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to={"#page-top"} className="border rounded d-inline scroll-to-top">
                        <i className="fas fa-angle-up"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ClientInfo;