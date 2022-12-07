import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Chat() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div>
                                <h1 className="h-size mb-5 f-color fw-normal mt-1">Chat</h1>
                            </div>
                            <div className="container">
                                {/* <!-- For demo purpose--> */}

                                <div className="row rounded-lg overflow-hidden shadow">
                                    {/* <!-- Users box--> */}
                                    <div className="col-4 px-0">
                                        <div className="bg-white">

                                            <div className="messages-box">
                                                <div className="list-group rounded-0">
                                                    <Link to={"#"} className="list-group-item list-group-item-action active rounded-0">
                                                        <div className="media d-flex justify-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="w-100 media-body ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">25 Dec</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic mb-0 text-small">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justify-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justify-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">14 Dec</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">18 Oct</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">17 Oct</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">2 Sep</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">30 Aug</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-3 mb-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-4">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0">Jason Doe</h6><small className="small font-weight-bold">21 Aug</small>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="font-italic text-muted mb-0 text-small">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Chat Box--> */}
                                    <div className="col-8 px-0">
                                        <div className="px-4 py-3 chat-box bg-white">
                                            {/* <!-- Sender Message--> */}
                                            <div className="mb-4"><div className="media w-75 mb-2 d-flex justify-content-start align-items-center gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                <div className="media-body ml-3">
                                                    <div className="bg-light rounded py-2 px-3">
                                                        <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                                <p className="small text-muted mb-0">12:00 PM | Aug 13</p></div>

                                            {/* <!-- Reciever Message--> */}
                                            <div className="media d-flex justify-content-end align-items-end flex-column w-100 text-end ml-auto mb-3">
                                                <div className="media-body">
                                                    <div className="rounded py-2 px-3 mb-2" style={{ backgroundColor: "#DDD6CD" }}>
                                                        <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                                                    </div>
                                                    <p className="small text-muted">12:00 PM | Aug 13</p>
                                                </div>
                                            </div>

                                            {/* <!-- Sender Message--> */}
                                            <div><div className="media w-75 mb-2 d-flex justify-content-start align-items-center gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                <div className="media-body ml-3">
                                                    <div className="bg-light rounded py-2 px-3">
                                                        <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                                <p className="small text-muted">12:00 PM | Aug 13</p></div>

                                            {/* <!-- Reciever Message--> */}
                                            <div className="media d-flex justify-content-end align-items-end flex-column w-100 text-end ml-auto mb-3">
                                                <div className="media-body">
                                                    <div className="rounded py-2 px-3 mb-2" style={{ backgroundColor: "#DDD6CD" }}>
                                                        <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                                                    </div>
                                                    <p className="small text-muted mb-0">12:00 PM | Aug 13</p>
                                                </div>
                                            </div>

                                            {/* <!-- Sender Message--> */}
                                            <div className="mb-4"><div className="media w-75 mb-2 d-flex justify-content-start align-items-center gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                <div className="media-body ml-3">
                                                    <div className="bg-light rounded py-2 px-3">
                                                        <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                                <p className="small text-muted mb-0">12:00 PM | Aug 13</p></div>

                                            {/* <!-- Reciever Message--> */}
                                            <div className="media d-flex justify-content-end align-items-end flex-column w-100 text-end ml-auto mb-3">
                                                <div className="media-body">
                                                    <div className="rounded py-2 px-3 mb-2" style={{ backgroundColor: "#DDD6CD" }}>
                                                        <p className="text-small mb-0 text-white">Test which is a new approach to have all solutions</p>
                                                    </div>
                                                    <p className="small text-muted mb-0">12:00 PM | Aug 13</p>
                                                </div>
                                            </div>

                                            {/* <!-- Sender Message--> */}
                                            <div className="mb-4"><div className="media w-75 mb-2 d-flex justify-content-start align-items-center gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                <div className="media-body ml-3">
                                                    <div className="bg-light rounded py-2 px-3">
                                                        <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                                <p className="small text-muted mb-0">12:00 PM | Aug 13</p></div>

                                            {/* <!-- Reciever Message--> */}
                                            <div className="media d-flex justify-content-end align-items-end flex-column w-100 text-end ml-auto mb-3">
                                                <div className="media-body">
                                                    <div className="rounded py-2 px-3 mb-2" style={{ backgroundColor: "#DDD6CD" }}>
                                                        <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                                                    </div>
                                                    <p className="small text-muted mb-0">12:00 PM | Aug 13</p>
                                                </div>
                                            </div>

                                            {/* <!-- Sender Message--> */}
                                            <div className="mb-4"><div className="media w-75 mb-2 d-flex justify-content-start align-items-center gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="40" className="rounded-circle" />
                                                <div className="media-body ml-3">
                                                    <div className="bg-light rounded py-2 px-3">
                                                        <p className="text-small mb-0 text-muted">Test which is a new approach all solutions</p>
                                                    </div>
                                                </div>
                                            </div>
                                                <p className="small text-muted mb-0">12:00 PM | Aug 13</p></div>

                                            {/* <!-- Reciever Message--> */}
                                            <div className="media d-flex justify-content-end align-items-end flex-column w-100 text-end ml-auto mb-3">
                                                <div className="media-body">
                                                    <div className="rounded py-2 px-3 mb-2" style={{ backgroundColor: "#DDD6CD" }}>
                                                        <p className="text-small mb-0 text-white">Apollo University, Delhi, India Test</p>
                                                    </div>
                                                    <p className="small text-muted mb-0">12:00 PM | Aug 13</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Typing area --> */}
                                        <form action="#" className="bg-light">
                                            <div className="input-group">
                                                <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" />
                                                <div className="input-group-append">
                                                    <button id="button-addon2" type="submit" className="btn btn-link"> <i className="fa fa-paper-plane"></i></button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
        </div >
    );
}

export default Chat;