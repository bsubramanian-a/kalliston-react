import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';

function Fitness() {

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div><span className="text-black-50 l-size">Fitness Program</span>
                                <h1 className="h-size mb-4 f-color fw-normal mt-1">Fitness Program</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12"></div>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default Fitness;