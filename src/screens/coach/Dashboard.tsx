import React, { useContext, useState, useEffect } from 'react';
import ChartData1 from '../../assets/img/d-img/_chartData.png';
import Chart from '../../assets/img/d-img/chart.png';
import Invoice from '../../assets/img/d-img/invoice.svg';
import Trend from '../../assets/img/d-img/trend.svg'; 
import DownTrend from '../../assets/img/d-img/down-trend.svg';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { logout } from '../../slices/auth';


function Dashboard() {

    const dispatch = useDispatch<any>();

    const { coach: currentUser } = useSelector((state: any) => state.auth);
    // console.log("currentUser", currentUser);

    // console.log("coach local", localStorage.getItem('coach') == null)
    // if (localStorage.getItem('coach') == null) {
    //     console.log("inside")
    //     // return <Navigate to="/coach/login" />;
    // }


    // if (!localStorage.getItem("coach")){ 
    //     // dispatch(logout());
    //     return <Navigate to="/coach/login" />;
    // }

    // if (currentUser == null) {
    //     return <Navigate to="/coach/login" />;
    // }


    return (
        // <div id="wrapper" className='d-flex'>
        //     <LeftMenu />
        //     <div className="d-flex flex-column" id="content-wrapper">
        //         <div id="content">
        //             <TopNav />
        //             <div className="container-fluid vh-100">
        //                 <div className='text-start'><span className="text-black-50 l-size">Sales</span>
        //                     <h1 className="h-size mb-4 f-color fw-normal mt-1 text-start">Sales</h1>
        //                 </div>
        //                 <div className="row mb-4">
        //                     <div className="col col-12 col-lg-6 col-xl-4 mb-4">
        //                         <div className="card shadow border-0 shadow-c">
        //                             <div className="card-body">
        //                                 <div className="row align-items-center no-gutters">
        //                                     <div className="col col-12 px-2">
        //                                         <div className="mb-4 text-start"><span className="text-capitalize fw-normal l-size f-color text-start">Live revenue (this month)</span></div>
        //                                     </div>
        //                                     <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
        //                                         <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">£2,456.20</span></div><img src={ChartData1} />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col col-12 col-lg-6 col-xl-4 mb-4">
        //                         <div className="card shadow border-0 shadow-c">
        //                             <div className="card-body">
        //                                 <div className="row align-items-center no-gutters">
        //                                     <div className="col col-12 px-2">
        //                                         <div className="mb-4 text-start"><span className="text-capitalize fw-normal l-size f-color text-start">Active Client</span></div>
        //                                     </div>
        //                                     <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
        //                                         <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">62</span></div><img src={ChartData2} />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col col-12 col-lg-6 col-xl-4 mb-4">
        //                         <div className="card shadow border-0 shadow-c">
        //                             <div className="card-body">
        //                                 <div className="row align-items-center no-gutters">
        //                                     <div className="col col-12 px-2">
        //                                         <div className="mb-4 text-start"><span className="text-capitalize fw-normal l-size f-color text-start">New client (weekly)</span></div>
        //                                     </div>
        //                                     <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
        //                                         <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">2</span></div><img src={ChartData3} />
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col col-12 col-lg-6 col-xl-4 mb-4">
        //                         <div className="card shadow border-0 shadow-c">
        //                             <div className="card-body">
        //                                 <div className="row align-items-center no-gutters">
        //                                     <div className="col col-12 px-2">
        //                                         <div className="mb-1 text-start"><span className="text-capitalize fw-normal l-size text-black-50">Profile View (this month)</span></div>
        //                                     </div>
        //                                     <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
        //                                         <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">24,154</span></div>
        //                                         <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">+ 140%</span></div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col col-12 col-lg-6 col-xl-4 mb-4">
        //                         <div className="card shadow border-0 shadow-c">
        //                             <div className="card-body">
        //                                 <div className="row align-items-center no-gutters">
        //                                     <div className="col col-12 px-2">
        //                                         <div className="mb-1 text-start"><span className="text-capitalize fw-normal l-size text-black-50">Profile Convesion (this month)</span></div>
        //                                     </div>
        //                                     <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
        //                                         <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal f-color">12,5%</span></div>
        //                                         <div className="rounded-pill d-flex justify-content-center align-items-center" style={{ height: "32px", width: "64px", backgroundColor: "#ebebeb" }}><span className="t-h f-color fw-normal">+ 0.3%</span></div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col col-12 col-lg-6 col-xl-4 mb-4">
        //                         <div className="card shadow border-0 shadow-c">
        //                             <div className="card-body">
        //                                 <div className="row align-items-center no-gutters">
        //                                     <div className="col col-12 px-2">
        //                                         <div className="mb-1 text-start"><span className="text-capitalize fw-normal l-size text-black-50">Active Package</span></div>
        //                                     </div>
        //                                     <div className="col-auto col-12 px-2 d-flex justify-content-between align-items-center">
        //                                         <div className="text-dark fw-bold h5 mb-0"><span className="h-size fw-normal text-black-50">3</span></div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 {/* <div className="row">
        //                     <div className="col col-12">
        //                         <div className="card shadow mb-4 shadow-n">
        //                             <div className="card-header py-3 bg-white border-0 text-start">
        //                                 <h6 className="text-primary h-size f-color fw-normal mb-0">Client Request</h6>
        //                             </div>
        //                             <div className="card-body">
        //                                 <div className="table-responsive">
        //                                     <table className="table">
        //                                         <thead>
        //                                             <tr>
        //                                                 <th className="fw-medium f-color table-s w-25 text-start">Head</th>
        //                                                 <th className="fw-medium f-color table-s text-start" style={{ width: "20%" }}>Package</th>
        //                                                 <th className="fw-medium f-color table-s text-start" style={{ width: "20%" }}>Location</th>
        //                                                 <th className="fw-medium f-color text-end" style={{ width: "35%" }}>Action</th>
        //                                             </tr>
        //                                         </thead>
        //                                         <tbody className="table-s">
        //                                             <tr>
        //                                                 <td>
        //                                                     <div className="d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{ height: "10px", width: "10px", position: "absolute", bottom: 0, right: 0 }} /></div><span className="f-color">Helen Sega</span>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
        //                                                 </td>
        //                                                 <td className="w-100">
        //                                                     <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
        //                                                         <div className="d-flex justify-content-center align-items-center">
        //                                                             <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
        //                                                             <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </td>
        //                                             </tr>
        //                                             <tr>
        //                                                 <td>
        //                                                     <div className="d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{ height: "10px", width: "10px", position: "absolute", bottom: 0, right: 0 }} /></div><span className="f-color">Helen Sega</span>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
        //                                                 </td>
        //                                                 <td className="w-100">
        //                                                     <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
        //                                                         <div className="d-flex justify-content-center align-items-center">
        //                                                             <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
        //                                                             <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </td>
        //                                             </tr>
        //                                             <tr>
        //                                                 <td>
        //                                                     <div className="d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{ height: "10px", width: "10px", position: "absolute", bottom: 0, right: 0 }} /></div><span className="f-color">Helen Sega</span>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
        //                                                 </td>
        //                                                 <td className="w-100">
        //                                                     <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
        //                                                         <div className="d-flex justify-content-center align-items-center">
        //                                                             <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
        //                                                             <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </td>
        //                                             </tr>
        //                                             <tr>
        //                                                 <td>
        //                                                     <div className="d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{ height: "10px", width: "10px", position: "absolute", bottom: 0, right: 0 }} /></div><span className="f-color">Helen Sega</span>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
        //                                                 </td>
        //                                                 <td className="w-100">
        //                                                     <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
        //                                                         <div className="d-flex justify-content-center align-items-center">
        //                                                             <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
        //                                                             <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </td>
        //                                             </tr>
        //                                             <tr>
        //                                                 <td>
        //                                                     <div className="d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="position-relative c-img"><img className="rounded-circle c-img" src={ProImg} /><img src={Online} style={{ height: "10px", width: "10px", position: "absolute", bottom: 0, right: 0 }} /></div><span className="f-color">Helen Sega</span>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2">
        //                                                         <div className="rounded-pill px-3 tag-s d-flex justify-content-center align-items-center"><span className="t-h f-color fw-normal">Package 1</span></div>
        //                                                     </div>
        //                                                 </td>
        //                                                 <td>
        //                                                     <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">London</span></div>
        //                                                 </td>
        //                                                 <td className="w-100">
        //                                                     <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2">
        //                                                         <div className="d-flex justify-content-center align-items-center">
        //                                                             <div className="px-2 a-div d-flex justify-content-center align-items-center"><img className="me-2" src={Accept} /><span className="t-h fw-normal text-uppercase">Accept</span></div>
        //                                                             <div className="px-2 r-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
        //                                                         </div>
        //                                                     </div>
        //                                                 </td>
        //                                             </tr>
        //                                         </tdiv>
        //                                     </table>
        //                                 </div>
        //                                 <div className="row">
        //                                     <div className="col d-flex justify-content-end align-items-center gap-4">
        //                                         <div className="d-flex justify-content-center align-items-center gap-2">
        //                                             <p className="fw-normal t-h text-black-50 mb-0">Rows per page:</p>
        //                                             <div className="dropdown d-flex justify-content-center align-items-center gap-2"><button className="btn btn-primary dropdown-toggle fw-normal t-h f-color d-btn" aria-expanded="false" data-bs-toggle="dropdown" type="button">10&nbsp;</button>
        //                                                 <div className="dropdown-menu"><a className="dropdown-item" href="#">10</a><a className="dropdown-item" href="#">20</a><a className="dropdown-item" href="#">50</a></div>
        //                                             </div>
        //                                         </div>
        //                                         <div>
        //                                             <p className="fw-normal t-h f-color mb-0"><span>1-5&nbsp;</span>of<span>&nbsp;13</span></p>
        //                                         </div>
        //                                         <div><img className="pe-2" src={Left} /><img className="ms-3" src={Right} /></div>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div> */}
        //             </div>
        //         </div>
        //     </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
        // </div>
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div className="row mb-4 align-items-end">
                                <div className="col col-12 col-md-6">
                                    <div><span className="text-black-50 l-size">Sales</span>
                                        <h1 className="h-size f-color fw-normal mt-1 mb-0">Sales</h1>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6">
                                    <div className="d-flex justify-content-end align-items-end">
                                        <Link to={"/coach/invoice-billing"} className="px-3 text-decoration-none d-flex justify-content-center align-items-center invoice-btn"><img className="me-2" src={Invoice} /><span className="fw-medium l-color size-font">INVOICES</span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col col-12 col-xl-6 mb-3 mb-xl-0">
                                    <div className="card shadow border-0 shadow-c">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col">
                                                    <div className="row">
                                                        <div className="col col-12 col-md-7 order-2 order-md-1">
                                                            <div>
                                                                <p className="text-capitalize fw-normal mb-1 size-font text-black-50">Current Income</p>
                                                                <div className="d-flex justify-content-start align-items-center gap-1 gap-lg-2"><span className="h-size fw-normal f-color">£2,340.00</span>
                                                                    <div className="px-2 py-1 rounded-pill bg-pill"><img className="me-2" src={Trend} /><span className="fw-normal p-t">-5%</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-md-5 order-1 order-md-2 mb-3 mb-md-0">
                                                            <div className="d-flex justify-content-end align-items-center"><span className="text-black-50 fw-medium me-3 small_t">WEEK</span><span className="f-color fw-medium me-3 small_t">MONTH</span><span className="text-black-50 fw-medium me-3 small_t">YEAR</span><span className="text-black-50 fw-medium small_t">ALL</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col col-12"><img className="w-100" src={ChartData1} /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-xl-6">
                                    <div className="card shadow border-0 shadow-c">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col col-12 px-2">
                                                    <div className="row">
                                                        <div className="col col-12 col-xxl-4 order-1 order-xxl-3 mb-3 mb-xxl-0">
                                                            <div className="d-flex justify-content-end align-items-center"><span className="text-black-50 fw-medium me-3 small_t">WEEK</span><span className="f-color fw-medium me-3 small_t">MONTH</span><span className="text-black-50 fw-medium me-3 small_t">YEAR</span><span className="text-black-50 fw-medium small_t">ALL</span></div>
                                                        </div>
                                                        <div className="col col-md-5 col-xxl-3 order-2 order-xl-1 col-12 mb-3 mb-xxl-0">
                                                            <div>
                                                                <p className="text-capitalize fw-normal mb-1 size-font text-black-50">Total clients</p>
                                                                <div className="d-flex justify-content-start align-items-center gap-1 gap-lg-3"><span className="h-size fw-normal f-color">22</span>
                                                                    <div className="px-2 py-1 rounded-pill bg-pill"><img className="me-2" src={DownTrend} /><span className="fw-normal p-c">-5%</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-md-7 col-xxl-5 order-3 order-xl-2 px-lg-1 col-12 mb-3 mb-xxl-0">
                                                            <div>
                                                                <p className="text-capitalize fw-normal mb-1 size-font text-black-50">Total client worth</p>
                                                                <div className="d-flex justify-content-start align-items-center gap-1 gap-lg-2"><span className="h-size fw-normal f-color">£2,340.00</span>
                                                                    <div className="px-2 py-1 rounded-pill bg-pill"><img className="me-2" src={DownTrend} /><span className="fw-normal p-c">-5%</span></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col col-12 mb-3"><img className="w-100" src={Chart} /></div>
                                                <div className="col col-12">
                                                    <div className="row gap-3 gap-lg-0">
                                                        <div className="col col-12 col-lg-4">
                                                            <div className="p-2  p-border n-br">
                                                                <div className="d-flex justify-content-start align-items-center gap-2 mb-3">
                                                                    <div className="rounded-circle elite-c"></div><span className="text-black fw-regular t-h">Elite</span>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div>
                                                                        <p className="text-capitalize fw-normal mb-1 s-size text-black-50">Total clients</p>
                                                                        <div className="d-flex justify-content-start align-items-center gap-3"><span className="l-size fw-normal f-color">4</span></div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-capitalize fw-normal mb-1 text-end s-size text-black-50">Client Worth</p>
                                                                        <div className="d-flex justify-content-start align-items-center gap-3"><span className="l-size fw-normal f-color text-end">£2,340.00</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-lg-4">
                                                            <div className="p-2 p-border n-br" >
                                                                <div className="d-flex justify-content-start align-items-center gap-2 mb-3">
                                                                    <div className="rounded-circle pro-c"></div><span className="text-black fw-regular t-h">Pro</span>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div>
                                                                        <p className="text-capitalize fw-normal mb-1 s-size text-black-50">Total clients</p>
                                                                        <div className="d-flex justify-content-start align-items-center gap-3"><span className="l-size fw-normal f-color">8</span></div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-capitalize fw-normal mb-1 text-end s-size text-black-50">Client Worth</p>
                                                                        <div className="d-flex justify-content-start align-items-center gap-3"><span className="l-size fw-normal f-color text-end">£2,340.00</span></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-lg-4">
                                                            <div className="p-2 p-border n-br" >
                                                                <div className="d-flex justify-content-start align-items-center gap-2 mb-3">
                                                                    <div className="rounded-circle basic-c"></div><span className="text-black fw-regular t-h">Basic</span>
                                                                </div>
                                                                <div className="d-flex justify-content-between align-items-center">
                                                                    <div>
                                                                        <p className="text-capitalize fw-normal mb-1 s-size text-black-50">Total clients</p>
                                                                        <div className="d-flex justify-content-start align-items-center gap-3"><span className="l-size fw-normal f-color">16</span></div>
                                                                    </div>
                                                                    <div>
                                                                        <p className="text-capitalize fw-normal mb-1 text-end s-size text-black-50">Client Worth</p>
                                                                        <div className="d-flex justify-content-start align-items-center gap-3"><span className="l-size fw-normal f-color text-end">£2,340.00</span></div>
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
                    </div>
                </div>
                <Link to={"#page-top"} className="border rounded d-inline scroll-to-top">
                    <i className="fas fa-angle-up"></i>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;