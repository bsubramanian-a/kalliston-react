import React, { useContext, useState, useEffect } from 'react';
import Online from '../../assets/img/online.svg';
import Filter from '../../assets/img/set-img/filterListFilled.svg';
import LocIcon from '../../assets/img/locationOnFilled.svg';
import ClientPro from '../../assets/img/avatars/avatar2.jpeg';
import Left from '../../assets/img/d-img/left.svg';
import Right from '../../assets/img/d-img/right.svg'

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Clients() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div><span className="text-black-50 l-size">Client List</span>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Client List</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div className="card shadow mb-4 shadow-n">
                                        <div className="card-header py-3 bg-white border-0">
                                            <div className="row justify-content-start align-items-center">
                                                <div className="col col-12 col-md-4">
                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Search</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                </div>
                                                <div className="col col-12 col-md-3">
                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Attribute</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                                </div>
                                                <div className="col col-12 col-md-5"><img src={Filter} /></div>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th className="fw-medium f-color table-s w-25">Full Name</th>
                                                            <th className="fw-medium f-color table-s w-25">Email</th>
                                                            <th className="fw-medium f-color table-s w-25">Location</th>
                                                            <th className="fw-medium f-color w-25">Package</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody className="table-s">
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center" style={{height: "24px"}}><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="position-relative c-img"><img className="rounded-circle c-img" src={ClientPro} /><img className='status-img' src={Online} /></div><span className="f-color">Helen Sega</span>
                                                                    </div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="m-p f-color fw-normal">test@gmail.com</span></div>
                                                            </td>
                                                            <td>
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><img src={LocIcon} /><span className="m-p f-color fw-normal">Bucharest, RO</span></div>
                                                            </td>
                                                            <td className="w-100">
                                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
                                                                    <div className="rounded-pill px-3 tag-c d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Calisthenics Taster</span></div>
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
                                </div>
                            </div>
                        </div>
                    </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
                </div>
            </div>
            );
}

            export default Clients;