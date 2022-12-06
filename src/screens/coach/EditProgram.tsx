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

function EditProgram() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/clients"} className="text-decoration-none"><span className="t-color text-decoration-none">Client List</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/manage-user"} className="text-decoration-none"><span className="t-color">John Doe</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Program</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-5 f-color fw-normal mt-1">Edit Program</h1>
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
                                    <div className="row">
                                        <div className="col col-12 col-md-6">
                                            <div className="card card-s">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col">
                                                            <h1 className="f-h f-color fw-normal mb-5">Template</h1>
                                                            <div className="dropdown" style={{ boxShadow: "none" }}><button className="btn btn-primary dropdown-toggle w-100 btn-drp d-flex justify-content-between align-items-center mb-5" aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown </button>
                                                                <div className="dropdown-menu w-100 bg-white btn-drp"><a className="dropdown-item l-size f-color fw-normal" href="#">First Item</a><a className="dropdown-item l-size f-color fw-normal" href="#">Second Item</a><a className="dropdown-item l-size f-color fw-normal" href="#">Third Item</a></div>
                                                            </div><button className="btn btn-primary w-100 text-uppercase" type="submit">Select</button>
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
                                                            <h1 className="f-h f-color fw-normal mb-5">Create a new program</h1><button className="btn btn-primary w-100 text-uppercase" type="submit">Select</button>
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
        </div>
    );
}

export default EditProgram;