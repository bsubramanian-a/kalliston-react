import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import CurrentTab from './components/CurrentTab';
import RequestTab from './components/RequestTab';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Clients() {

    return (
        <div id="page-top">
            <div id="wrapper">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100">
                            <div><span className="text-black-50 l-size">Clients</span>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Clients</h1>
                            </div>
                            <div>
                                <ul className="nav nav-tabs border-0 d-flex justify-content-center align-items-center mb-4" role="tablist">
                                    <li className="nav-item w-50" role="presentation"><Link to={"#tab-1"} className="nav-link mb-0 text-capitalize text-center fw-medium" role="tab" data-bs-toggle="tab">CURRENT CLIENTS</Link></li>
                                    <li className="nav-item w-50" role="presentation"><Link to={"#tab-2"} className="nav-link active mb-0 text-capitalize text-center fw-medium" role="tab" data-bs-toggle="tab">NEW REQUESTS</Link></li>
                                </ul>
                                <div className="tab-content">
                                    <CurrentTab />
                                    <RequestTab />
                                </div>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default Clients;