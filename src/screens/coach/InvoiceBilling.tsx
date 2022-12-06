import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import Left from '../../assets/img/d-img/left.svg';
import Right from '../../assets/img/d-img/right.svg';
import CreditCard from '../../assets/img/card-img/_creditCards.svg';
import { Link } from 'react-router-dom';

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
                                            <div className="tab-pane" role="tabpanel" id="tab-1">
                                                <div className="card card-s mb-4">
                                                    <div className="card-body">
                                                        <div className="row py-2">
                                                            <div className="col col-12">
                                                                <h1 className="f-h f-color fw-normal mb-5">Next Payout</h1>
                                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                                    <p className="f-color fw-normal mb-0" style={{ fontSize: "20px" }}>Estimed on 12 September</p><span className="f-h f-color fw-normal">£2,365.28</span>
                                                                </div>
                                                                <p className="l-size text-black-50 fw-normal mb-0">For custom solutions and pricing contact our support team</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card shadow mb-4 py-2 card-s">
                                                    <div className="card-header py-3 pb-4 bg-white border-0">
                                                        <h6 className="text-primary f-h f-color fw-normal">Client Request</h6>
                                                    </div>
                                                    <div className="card-body py-0">
                                                        <div className="table-responsive">
                                                            <table className="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s" style={{ width: "35%" }}>Month</th>
                                                                        <th className="fw-medium f-color table-s w-25">Invoice Number</th>
                                                                        <th className="fw-medium f-color text-end" style={{ width: "40%" }}>Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody className="table-s">
                                                                    <tr>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">Sep</span></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">IN-0123</span></div>
                                                                        </td>
                                                                        <td className="w-100">
                                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                                <div className="px-3 down-load d-flex justify-content-center align-items-center"><span className="t-h fw-normal text-uppercase">Download</span></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Aug</span></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">IN-0123</span></div>
                                                                        </td>
                                                                        <td className="w-100">
                                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                                <div className="px-3 down-load d-flex justify-content-center align-items-center"><span className="t-h fw-normal text-uppercase">Download</span></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Jul</span></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">IN-0123</span></div>
                                                                        </td>
                                                                        <td className="w-100">
                                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                                <div className="px-3 down-load d-flex justify-content-center align-items-center"><span className="t-h fw-normal text-uppercase">Download</span></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Jun</span></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">IN-0123</span></div>
                                                                        </td>
                                                                        <td className="w-100">
                                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                                <div className="px-3 down-load d-flex justify-content-center align-items-center"><span className="t-h fw-normal text-uppercase">Download</span></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">May</span></div>
                                                                        </td>
                                                                        <td>
                                                                            <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">IN-0123</span></div>
                                                                        </td>
                                                                        <td className="w-100">
                                                                            <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
                                                                                <div className="px-3 down-load d-flex justify-content-center align-items-center"><span className="t-h fw-normal text-uppercase">Download</span></div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col d-flex justify-content-end align-items-center gap-4">
                                                                <div className="d-flex justify-content-center align-items-center gap-2">
                                                                    <p className="fw-normal t-h text-black-50 mb-0">Rows per page:</p>
                                                                    <div className="dropdown d-flex justify-content-center align-items-center gap-2"><button className="btn btn-primary dropdown-toggle fw-normal t-h f-color d-btn" aria-expanded="false" data-bs-toggle="dropdown" type="button">10&nbsp;</button>
                                                                        <div className="dropdown-menu"><a className="dropdown-item" href="#">10</a><a className="dropdown-item" href="#">20</a><a className="dropdown-item" href="#">50</a></div>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <p className="fw-normal t-h f-color mb-0"><span>1-5&nbsp;</span>of<span>&nbsp;13</span></p>
                                                                </div>
                                                                <div><img className="pe-2" src={Left} /><img className="ms-3" src={Right} /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane active" role="tabpanel" id="tab-2">
                                                <div className="card mb-4 card-s">
                                                    <div className="card-body">
                                                        <div className="row py-2">
                                                            <div className="col col-12">
                                                                <h1 className="f-h f-color fw-normal mb-5">Your Card</h1>
                                                                <div className="payment-div d-flex justify-content-between align-items-start p-3 mb-2">
                                                                    <div className="d-flex justify-content-start align-items-start gap-3"><img src={CreditCard} />
                                                                        <div>
                                                                            <p className="f-color fw-normal mb-0" style={{ fontSize: "20px" }}>**** 4242</p>
                                                                            <p className="expire-f text-black-50 fw-normal mb-0">Expires at 08/24</p>
                                                                        </div>
                                                                    </div><Link to={"#"} className="expire-f mt-1 l-color fw-normal text-uppercase text-decoration-none">Change</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="tab-pane" role="tabpanel" id="tab-3">
                                                <div className="card card-s mb-4">
                                                    <div className="card-body">
                                                        <div className="row py-2">
                                                            <div className="col col-12">
                                                                <h1 className="f-h f-color fw-normal mb-5">Your billing details</h1>
                                                                <div className="payment-div d-flex justify-content-between align-items-start p-3 mb-2">
                                                                    <div>
                                                                        <p className="f-color fw-normal mb-0 l-size">[First line here]</p>
                                                                        <p>[Second line here]</p>
                                                                        <p>[Post code]</p>
                                                                        <p>[City]</p>
                                                                        <p>[Country]</p>
                                                                    </div><Link to={"#"} className="expire-f mt-1 l-color fw-normal text-uppercase text-decoration-none">Change</Link>
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
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
        );
}

export default InvoiceBilling;                              