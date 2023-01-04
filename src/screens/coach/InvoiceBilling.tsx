import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import InvoicePayout from './components/InovicePayout';

function InvoiceBilling() {

    return (
        <div id="page-top">
            <div id="wrapper" className='d-flex'>
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start px-4">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/dashboard"} className="text-decoration-none"><span className="t-color text-decoration-none">Sales</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/invoice-billing"} className="text-decoration-none"><span className="f-color">Invoice</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Invoice</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div>
                                        <div>
                                            <InvoicePayout />
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
        );
}

export default InvoiceBilling;                              