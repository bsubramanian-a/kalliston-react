import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import InvoicePayoutTab from './components/InovicePayoutTab';
import BillingTab from './components/BillingTab';
import CardTab from './components/CardTab';

function InvoiceBilling() {

    return (
        <div id="page-top">
            <div id="wrapper" className='d-flex'>
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Invoice & Billing</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div>
                                        <ul className="nav nav-tabs flex-column mt-1 border-0 w-25" role="tablist" style={{ float: "left" }}>
                                            <li className="nav-item" role="presentation"><Link to={"#tab-1"} className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab">Invoice &amp; Payout</Link></li>
                                            <li className="nav-item" role="presentation"><Link to={"#tab-2"} className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab">Billing Setting</Link></li>
                                            <li className="nav-item" role="presentation"><Link to={"#tab-3"} className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab">Card Setting</Link></li>
                                        </ul>
                                        <div className="tab-content px-4 w-75" style={{ float: "right" }}>
                                            <InvoicePayoutTab />
                                            <BillingTab />
                                            <CardTab />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
        );
}

export default InvoiceBilling;                              