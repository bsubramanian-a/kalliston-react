import React, { useContext, useState, useEffect } from 'react';
import ClientPro from '../../assets/img/avatars/avatar2.jpeg';
import Left from '../../assets/img/d-img/left.svg';
import Right from '../../assets/img/d-img/right.svg'
import { Link } from 'react-router-dom';

function CurrentTab() {

    return (
        <div className="tab-pane  active" role="tabpanel" id="tab-1">
            <div className="card shadow mb-4 shadow-n">
                <div className="card-header py-3 bg-white border-0">
                    <div className="row">
                        <div className="col col-12 col-md-3">
                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Search</label><input type="text" className="input-lg w-100 fw-normal f-color l-size" placeholder="Name, email, etc..." style={{ outline: "none" }} /></div>
                        </div>
                        <div className="col col-12 col-md-2">
                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Attribute</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="fw-medium f-color table-s" style={{ width: "28%" }}>Full Name</th>
                                    <th className="fw-medium f-color table-s" style={{ width: "28%" }}>Email</th>
                                    <th className="fw-medium f-color table-s" style={{ width: "28%" }}>Package</th>
                                    <th className="fw-medium f-color table-s" style={{ width: "16%" }}>Programme status</th>
                                </tr>
                            </thead>
                            <tbody className="table-s">
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-unpublished d-flex justify-content-center align-items-center"><span className="t-h text-white fw-normal">Unpublished</span></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-publish d-flex justify-content-center align-items-center"><span className="t-h text-white fw-normal">Published</span></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-publish d-flex justify-content-center align-items-center"><span className="t-h text-white fw-normal">Published</span></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-publish d-flex justify-content-center align-items-center"><span className="t-h text-white fw-normal">Published</span></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-publish d-flex justify-content-center align-items-center"><span className="t-h text-white fw-normal">Published</span></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-publish d-flex justify-content-center align-items-center" ><span className="t-h text-white fw-normal">Published</span></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><img className="rounded-circle c-img" src={ClientPro} /><span className="f-color">Helen Sega</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                    </td>
                                    <td>
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-3 py-1 p-tag d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Elite</span></div>
                                        </div>
                                    </td>
                                    <td className="w-100">
                                        <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                            <div className="rounded-pill px-2 py-1 t-publish d-flex justify-content-center align-items-center"><span className="t-h text-white fw-normal">Published</span></div>
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

export default CurrentTab;