import React, { useContext, useState, useEffect } from 'react';
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import DetailsTab from './components/DetailsTab';
import SocialTab from './components/SocialTab';
import MediaTab from './components/MediaTab';


function Profile() {

    return (
        // <div id="page-top">
        //     <div id="wrapper" className="d-flex text-start">
        //         <LeftMenu />
        //         <div className="d-flex flex-column" id="content-wrapper">
        //             <div id="content">
        //                 <TopNav />
        //                 <div className="container-fluid vh-100">
        //                     <div>
        //                         <h1 className="h-size mb-4 f-color fw-normal mt-1">Coach Profile</h1>
        //                     </div>
        //                     <div className="row">
        //                         <div className="col col-12">
        //                             <div>
        //                                 <ul className="nav nav-tabs flex-column mt-1 border-0 w-25" role="tablist" style={{ float: "left" }}>
        //                                     <li className="nav-item" role="presentation"><a className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-1">Details</a></li>
        //                                     <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-2">Social media</a></li>
        //                                     <li className="nav-item" role="presentation"><a className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab" href="#tab-3">Cover</a></li>
        //                                 </ul>
        //                                 <div className="tab-content px-4 w-75" style={{ float: "right" }}>
        //                                     <DetailsTab />
        //                                     <SocialTab />
        //                                     <CoverTab />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
        //     </div>
        // </div>
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/package"} className="text-decoration-none"><span className="t-color text-decoration-none">Packages</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/profile"} className="text-decoration-none"><span className="f-color">Profile</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Profile</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div>
                                        <ul className="nav nav-tabs flex-column mt-1 border-0 w-25" role="tablist" style={{float: "left"}}>
                                            <li className="nav-item" role="presentation">
                                                <Link to={"#tab-1"} className="nav-link active d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab">Profile Details</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <Link to={"#tab-2"} className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab">Media & Banner</Link>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <Link to={"#tab-3"} className="nav-link d-flex justify-content-start align-items-center" role="tab" data-bs-toggle="tab">Social Links</Link>
                                            </li>
                                        </ul>
                                        <div className="tab-content px-4 w-75" style={{float: "right"}}>
                                            <DetailsTab />
                                            <MediaTab />
                                            <SocialTab />
                                        </div>
                                        <a className="border rounded d-inline scroll-to-top" href="#page-top">
                                            <i className="fas fa-angle-up"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;