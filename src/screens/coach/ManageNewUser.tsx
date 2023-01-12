import React, { useContext, useState, useEffect } from 'react';
import UserPro from '../../assets/img/avatars/avatar3.jpeg';
import Message from '../../assets/img/icon-manage/message.svg';
import Approve from '../../assets/img/icon-manage/approve.svg';
import Reject from '../../assets/img/icon-manage/reject.svg'

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';

function ManageNewUser() {

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
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Henry Brown</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-5 f-color fw-normal mt-1">Henry Brown</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div className="card card-s mb-3">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="d-flex justify-content-start align-items-center gap-2">
                                                    <div className="m-img"><img className="rounded-circle m-img" src={UserPro} /></div>
                                                    <div>
                                                        <p className="mb-0 fw-normal f-color">John Doe</p><span className="m-p text-black-50">Elite</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center">
                                                    <div className="px-3 msgBtn me-3 d-flex justify-content-center align-items-center"><img className="me-2" src={Message} /><span className="m-p fw-medium text-uppercase">Message</span></div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <div className="px-3 cursor-pointer ll-div d-flex justify-content-center align-items-center"><img className="me-2" src={Approve} /><span className="m-p fw-medium text-uppercase">Approve</span></div>
                                                        <div className="px-3 cursor-pointer rl-div d-flex justify-content-center align-items-center"><img className="me-2" src={Reject} /><span className="m-p fw-medium text-uppercase">Reject</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 mb-4">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="pt-1 pb-2 mb-4 bottomC">
                                                <h1 className="f-color fw-regular f-h">Client Information</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <div className="mb-5">
                                                        <div className="d-flex justify-content-between align-items-center mb-4"><span className="f-color l-size fw-medium">Email</span><span className="f-color l-size fw-normal">henry@gmail.com</span></div>
                                                        <div className="d-flex justify-content-between align-items-center mb-3"><span className="f-color l-size fw-medium">Phone</span><span className="f-color l-size fw-normal">+447236 5489 721</span></div>
                                                    </div>
                                                    <div className="px-3 w-100 cursor-pointer ll-div d-flex justify-content-center align-items-center bR"><span className="m-p fw-medium text-uppercase">See more details</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 mb-4">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="pt-1 pb-2 mb-4 bottomC">
                                                <h1 className="f-color fw-regular f-h" >Programme</h1>
                                            </div>
                                            <div className="row">
                                                <div className="col col-12">
                                                    <p className="mb-2 l-size text-black-50">To start the programme, you need to accept the client </p>
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

export default ManageNewUser;