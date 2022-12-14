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
                            <div className="container-fluid">
                                {/* <!-- For demo purpose--> */}

                                <div className="row rounded-lg overflow-hidden shadow">
                                    {/* <!-- Users box--> */}
                                    <div className="col-4 px-0">
                                        <div className="bg-white h-100">

                                            <div className="messages-box">
                                                <div className="list-group rounded-0">
                                                    <Link to={"#"} className="list-group-item list-group-item-action active rounded-0">
                                                        <div className="media d-flex justify-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="w-100 media-body ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">25/12/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-start justify-content-between gap-2'>
                                                            <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                            <div className='p-1 rounded-circle d-flex align-items-center justify-content-center msg-count'>
                                                                <span className='text-white s-size'>7</span>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justify-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">16/12/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='d-flex align-items-start justify-content-between gap-2'>
                                                            <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                            <div className='rounded-circle d-flex align-items-center justify-content-center msg-count'>
                                                                <span className='text-white s-size'>3</span>
                                                            </div>
                                                        </div>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justify-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">06/12/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">18/11/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">17/09/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">02/09/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">30/08/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>

                                                    <Link to={"#"} className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                                        <div className="media d-flex justity-content-start align-items-center gap-2 mb-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                            <div className="media-body w-100 ml-2">
                                                                <div className="d-flex align-items-center justify-content-between">
                                                                    <h6 className="mb-0 fw-normal m-p">Jason Doe</h6><span className="fw-normal t-h">21/09/2022</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-black-50 mb-0 t-h">Lorem ipsum dolor sit amet, consectetur. incididunt ut labore.</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Chat Box--> */}
                                    <div className="col-8 px-0">
                                        <div className="px-4 py-3 chat-box bg-white">
                                            <div className='mb-4'>
                                                <div className='d-flex justify-content-center align-items-center mb-3'>
                                                    <div className='px-3 py-1 rounded-pill d-flex justify-content-center align-items-center' style={{ background: "#00000020" }}>
                                                        <span className='t-pack text-center'>Mon 10 Dec</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Sender Message--> */}
                                                <div className="mb-3">
                                                    <div className="media w-75 mb-2 d-flex justify-content-start align-items-start gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                        <div className="media-body ml-3">
                                                            <div className="rounded py-2 px-3 d-flex justify-content-between align-items-end gap-3" style={{ background: "#F2F2F2" }}>
                                                                <p className="mb-0 f-color l-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                                <p className="s-size mb-0 text-black">12:30PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Reciever Message--> */}
                                                <div className="mb-0 d-flex justify-content-end align-items-start">
                                                    <div className="media d-flex justify-content-end align-items-start w-75 text-start mb-3">
                                                        <div className="media-body me-3">
                                                            <div className="rounded py-2 px-3 d-flex justify-content-between align-items-end gap-3" style={{ background: "#DDD6CD" }}>
                                                                <p className="mb-0 f-color l-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                                <p className="s-size mb-0 text-black">12:30PM</p>
                                                            </div>
                                                        </div>
                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mb-4'>
                                                <div className='d-flex justify-content-center align-items-center mb-3'>
                                                    <div className='px-3 py-1 rounded-pill d-flex justify-content-center align-items-center' style={{ background: "#00000020" }}>
                                                        <span className='t-pack text-center'>Yesterday</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Sender Message--> */}
                                                <div className="mb-3">
                                                    <div className="media w-75 mb-2 d-flex justify-content-start align-items-start gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                        <div className="media-body ml-3">
                                                            <div className="rounded py-2 px-3 d-flex justify-content-between align-items-end gap-3" style={{ background: "#F2F2F2" }}>
                                                                <p className="mb-0 f-color l-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                                <p className="s-size mb-0 text-black">12:30PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Reciever Message--> */}
                                                <div className="mb-0 d-flex justify-content-end align-items-start">
                                                    <div className="media d-flex justify-content-end align-items-start w-75 text-start mb-3">
                                                        <div className="media-body me-3">
                                                            <div className="rounded py-2 px-3 d-flex justify-content-between align-items-end gap-3" style={{ background: "#DDD6CD" }}>
                                                                <p className="mb-0 f-color l-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                                <p className="s-size mb-0 text-black">12:30PM</p>
                                                            </div>
                                                        </div>
                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mb-4'>
                                                <div className='d-flex justify-content-center align-items-center mb-3'>
                                                    <div className='px-3 py-1 rounded-pill d-flex justify-content-center align-items-center' style={{ background: "#00000020" }}>
                                                        <span className='t-pack text-center'>Today</span>
                                                    </div>
                                                </div>
                                                {/* <!-- Sender Message--> */}
                                                <div className="mb-3">
                                                    <div className="media w-75 mb-2 d-flex justify-content-start align-items-start gap-3"><img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                        <div className="media-body ml-3">
                                                            <div className="rounded py-2 px-3 d-flex justify-content-between align-items-end gap-3" style={{ background: "#F2F2F2" }}>
                                                                <p className="mb-0 f-color l-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                                <p className="s-size mb-0 text-black">12:30PM</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* <!-- Reciever Message--> */}
                                                <div className="mb-0 d-flex justify-content-end align-items-start">
                                                    <div className="media d-flex justify-content-end align-items-start w-75 text-start mb-3">
                                                        <div className="media-body me-3">
                                                            <div className="rounded py-2 px-3 d-flex justify-content-between align-items-end gap-3" style={{ background: "#DDD6CD" }}>
                                                                <p className="mb-0 f-color l-size">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                                                <p className="s-size mb-0 text-black">12:30PM</p>
                                                            </div>
                                                        </div>
                                                        <img src="https://res.cloudinary.com/mhmd/image/upload/v1564960395/avatar_usae7z.svg" alt="user" width="24" className="rounded-circle" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <!-- Typing area --> */}
                                        <form action="#">
                                            <div className="d-flex justify-content-center align-items-center" style={{background: "#F2F2F2"}}>
                                                <div className='px-3 py-2 w-100'>
                                                    <input type="text" placeholder="Message here..." aria-describedby="button-addon2" style={{background: "#E6E6E6"}} className="form-control f-color rounded-0 border-0 py-3" />
                                                </div>
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