import React, { useContext, useState, useEffect } from 'react';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';

function OnboardingAnswer() {

    return (
        <body id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/clients"} className="text-decoration-none"><span className="t-color text-decoration-none">Client List</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/manage-user"} className="text-decoration-none"><span className="t-color">John Doe</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Onboarding Answers</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-5 f-color fw-normal mt-1">Onboarding Answers</h1>
                            </div>
                            <div className="table-responsive bg-white card-s">
                                <table className="table mb-0">
                                    <thead>
                                        <tr className="table-s f-color">
                                            <th className="py-3">Question</th>
                                            <th className="py-3">Answer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                        <tr className="table-s f-color">
                                            <td className="py-3">Question here</td>
                                            <td className="py-3">Answer here</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </body>
    );
}

export default OnboardingAnswer;