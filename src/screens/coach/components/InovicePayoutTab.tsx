import React, { useContext, useState, useEffect } from 'react';
import Left from '../../assets/img/d-img/left.svg';
import Right from '../../assets/img/d-img/right.svg';

function InvoicePayoutTab() {

    return (
        <div className="tab-pane  active" role="tabpanel" id="tab-1">
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
    );
}

export default InvoicePayoutTab;