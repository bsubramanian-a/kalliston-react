import React, { useContext, useState, useEffect } from 'react';
import CloseFilled from '../../assets/img/package-img/closeFilled.svg'
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';

function Package() {

    return (
        <div id="page-top">
            <div id="wrapper" className='d-flex'>
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100">
                            <div className='text-start'><span className="text-black-50 l-size text-start">Sales</span>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1 text-start">Sales</h1>
                            </div>
                            <div className="row mb-4 text-start">
                                <div className="col col-12 col-md-6 col-xl-4">
                                    <div className="card shadow border-0 card-s">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col col-12 px-2 d-flex mb-3">
                                                    <div className="px-3 py-1 tag-p d-flex justify-content-center align-items-center rounded-pill"><span className="text-white" style={{ fontSize: '12px' }}>Published</span></div>
                                                </div>
                                                <div className="col col-12 px-2">
                                                    <h1 className="f-h f-color fw-semibold mb-3">Calisthenics Taster</h1>
                                                    <p className="f-color mb-5">A programme to introduce you to the basics <br />of calisthenics</p>
                                                    <h1 className="f-color mb-3 fw-medium" style={{ fontSize: '20px' }}>Program type</h1>
                                                    <p className="f-color mb-5 l-size">Catisthenics</p>
                                                </div>
                                                <div className="col col-12 px-2">
                                                    <h1 className="f-color mb-3 fw-medium" style={{ fontSize: '20px' }}>Offer</h1>
                                                    <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Duration</span><span className="f-color l-size fw-normal">4 weeks</span></div>
                                                    <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Priority direct chat </span><span className="f-color l-size fw-normal">No</span></div>
                                                    <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-semibold">Checking Calls</span><span className="f-color l-size fw-normal">No</span></div><button className="btn btn-primary w-100 text-uppercase btn-edit" type="submit">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-xl-4">
                                    <div className="card shadow border-0 card-s">
                                        <div className="card-body">
                                            <div className="row align-items-center no-gutters">
                                                <div className="col col-12 px-2 d-flex mb-3">
                                                    <div className="px-3 py-1 tag-d d-flex justify-content-center align-items-center rounded-pill"><span className="text-white" style={{ fontSize: '12px' }}>Draft</span></div>
                                                </div>
                                                <div className="col col-12 px-2">
                                                    <h1 className="f-h f-color fw-semibold mb-3">Calisthenics Taster</h1>
                                                    <p className="f-color mb-5">A programme to introduce you to the basics <br />of calisthenics</p>
                                                    <h1 className="f-color mb-3 fw-medium" style={{ fontSize: '20px' }}>Program type</h1>
                                                    <p className="f-color mb-5 l-size">Catisthenics</p>
                                                </div>
                                                <div className="col col-12 px-2">
                                                    <h1 className="f-color mb-3 fw-medium" style={{ fontSize: '20px' }}>Offer</h1>
                                                    <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Duration</span><span className="f-color l-size fw-normal">12 weeks</span></div>
                                                    <div className="d-flex justify-content-between align-items-center mb-2"><span className="f-color l-size fw-semibold">Priority direct chat </span><span className="f-color l-size fw-normal">Yes</span></div>
                                                    <div className="d-flex justify-content-between align-items-center mb-5"><span className="f-color l-size fw-semibold">Checking Calls</span><span className="f-color l-size fw-normal">6</span></div><button className="btn btn-primary w-100 text-uppercase btn-edit" type="submit">Edit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-md-6 col-xl-4">
                                    <div className="card border-0 card-s h-100" style={{ backgroundColor: '#ECECEC', height: '538px !important' }}>
                                        <div className="card-body d-flex justify-content-center align-items-center">
                                            <div className="d-flex justify-content-center align-items-center flex-column"><img className="mb-2" src={CloseFilled} />
                                                <p className="mb-0 text-uppercase m-p fw-semibold" style={{ color: '#868686' }}>Add</p>
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

export default Package;