import React, { useContext, useState, useEffect } from 'react';
import UserPro from '../../assets/img/avatars/avatar3.jpeg';
import Online from '../../assets/img/online.svg';
import Message from '../../assets/img/icon-manage/message.svg';
import Audio from '../../assets/img/icon-manage/audio.svg';
import Video from '../../assets/img/icon-manage/video.svg';
import Add from '../../assets/img/icon-manage/addFilled.svg'

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';

function ManageUser() {

    return (
        <div id="page-top">
    <div id="wrapper" className="d-flex">
        <LeftMenu />
        <div className="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <TopNav />
                <div className="container-fluid vh-100">
                    <div>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={"/coach/clients"} className="text-decoration-none"><span className="t-color text-decoration-none">Client List</span></Link></li>
                            <li className="breadcrumb-item"><a className="text-decoration-none" href="#"><span className="f-color">John Doe</span></a></li>
                        </ol>
                        <h1 className="h-size mb-5 f-color fw-normal mt-1">Manage Users</h1>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <div className="card card-s mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex justify-content-start align-items-center gap-2">
                                            <div className="position-relative m-img"><img className="rounded-circle m-img" src={UserPro} /><img className="position-absolute bottom-0 mo-img" src={Online} /></div>
                                            <div>
                                                <p className="mb-0 fw-normal f-color">John Doe</p><span className="m-p text-black-50">Package 1</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center">
                                            <div className="px-3 ll-div d-flex justify-content-center align-items-center"><img className="me-2" src={Message} /><span className="m-p fw-medium text-uppercase">Accept</span></div>
                                            <div className="px-3 m-div d-flex justify-content-center align-items-center"><img className="me-2" src={Audio} /><span className="m-p fw-medium text-uppercase">Audio call</span></div>
                                            <div className="px-3 rr-div d-flex justify-content-center align-items-center"><img className="me-2" src={Video} /><span className="t-h fw-normal text-uppercase">Reject</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 mb-4">
                            <div className="card card-s">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="f-h f-color fw-normal mb-5">Client Information</h1>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-3"><span className="f-color l-size fw-medium">Description</span><span className="f-color l-size fw-normal">client info</span></div>
                                                <div className="d-flex justify-content-between align-items-center mb-3"><span className="f-color l-size fw-medium">Description</span><span className="f-color l-size fw-normal">client info</span></div>
                                                <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-medium">Desctipiton</span><span className="f-color l-size fw-normal">client info</span></div>
                                            </div><button className="btn btn-primary w-100 text-uppercase btn-view" type="button">View Onboarding Answers</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6 mb-4">
                            <div className="card card-s">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <h1 className="f-h f-color fw-normal mb-5">Program</h1>
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-3"><span className="f-color l-size fw-medium">Program name</span><span className="f-color l-size fw-normal">client info</span></div>
                                                <div className="d-flex justify-content-between align-items-center mb-3"><span className="f-color l-size fw-medium">Last changed</span><span className="f-color l-size fw-normal">dd/mm/yyy</span></div>
                                                <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-medium">Client progress</span>
                                                    <div className="d-flex justify-content-center align-items-center gap-3" style={{width: "60%"}}>
                                                        <div className="progress w-100">
                                                            <div className="progress-bar w-50">50%</div>
                                                        </div><span className="m-p text-black-50">50%</span>
                                                    </div>
                                                </div>
                                            </div><button className="btn btn-primary w-100 text-uppercase btn-view" type="button">edit program</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 col-md-6">
                            <div className="card card-s">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="f-h f-color fw-normal mb-0">Book a Call</h1><img src={Add} />
                                            </div>
                                            <div className="py-2 px-3 boder-dashed d-flex justify-content-center align-items-center"><span className="text-black-50 l-size fw-normal">No call booked</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
    </div>
</div>
    );
}

export default ManageUser;