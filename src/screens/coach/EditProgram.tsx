import React, { useContext, useState, useEffect } from 'react';
import AddRow from '../../assets/img/icon-manage/addRow.svg';

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
                            <div className="pb-5">
                                <ul className="nav nav-tabs border-0 mb-4" role="tablist">
                                    <li className="nav-item" role="presentation"><a className="nav-link active nav-a d-flex justify-content-center align-items-center gap-1 text-uppercase" role="tab" data-bs-toggle="tab" href="#tab-1">Week 1<div style={{background: "url(&quot;assets/img/icon-manage/moreActive.svg&quot;) center / cover no-repeat", height: "20px", width: "20px"}}></div></a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link nav-a d-flex justify-content-center align-items-center gap-1 text-uppercase" role="tab" data-bs-toggle="tab" href="#tab-2">Week 2<div style={{background: "url(&quot;assets/img/icon-manage/moreInactive.svg&quot;) center / cover no-repeat", height: "20px", width: "20px"}}></div></a></li>
                                    <li className="nav-item" role="presentation"><a className="nav-link nav-a d-flex justify-content-center align-items-center gap-1 text-uppercase" role="tab" data-bs-toggle="tab" href="#tab-3">Week 3<div style={{background: "url(&quot;assets/img/icon-manage/moreInctive.svg&quot;) center / cover no-repeat", height: "20px", width: "20px"}}></div></a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active bg-white-primary" role="tabpanel" id="tab-1">
                                        <div className="accordion d-flex flex-column gap-3" role="tablist" id="accordion-1">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="false" aria-controls="accordion-1 .item-1">Day 1</button></h2>
                                                <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="true" aria-controls="accordion-1 .item-2">Day 2</button></h2>
                                                <div className="accordion-collapse collapse show item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Day 3</button></h2>
                                                <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">Day 4</button></h2>
                                                <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-5" aria-expanded="false" aria-controls="accordion-1 .item-5">Day 5</button></h2>
                                                <div className="accordion-collapse collapse item-5" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-6" aria-expanded="false" aria-controls="accordion-1 .item-6">Day 6</button></h2>
                                                <div className="accordion-collapse collapse item-6" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-7" aria-expanded="false" aria-controls="accordion-1 .item-7">Day 7</button></h2>
                                                <div className="accordion-collapse collapse item-7" role="tabpanel" data-bs-parent="#accordion-1">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab-2">
                                        <div className="accordion d-flex flex-column gap-3" role="tablist" id="accordion-2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-1" aria-expanded="false" aria-controls="accordion-2 .item-1">Day 1</button></h2>
                                                <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-2" aria-expanded="true" aria-controls="accordion-2 .item-2">Day 2</button></h2>
                                                <div className="accordion-collapse collapse show item-2" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-3" aria-expanded="false" aria-controls="accordion-2 .item-3">Day 3</button></h2>
                                                <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-4" aria-expanded="false" aria-controls="accordion-2 .item-4">Day 4</button></h2>
                                                <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-5" aria-expanded="false" aria-controls="accordion-2 .item-5">Day 5</button></h2>
                                                <div className="accordion-collapse collapse item-5" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-6" aria-expanded="false" aria-controls="accordion-2 .item-6">Day 6</button></h2>
                                                <div className="accordion-collapse collapse item-6" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-2 .item-7" aria-expanded="false" aria-controls="accordion-2 .item-7">Day 7</button></h2>
                                                <div className="accordion-collapse collapse item-7" role="tabpanel" data-bs-parent="#accordion-2">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" role="tabpanel" id="tab-3">
                                        <div className="accordion d-flex flex-column gap-3" role="tablist" id="accordion-3">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-1" aria-expanded="false" aria-controls="accordion-3 .item-1">Day 1</button></h2>
                                                <div className="accordion-collapse collapse item-1" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-2" aria-expanded="true" aria-controls="accordion-3 .item-2">Day 2</button></h2>
                                                <div className="accordion-collapse collapse show item-2" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-3" aria-expanded="false" aria-controls="accordion-3 .item-3">Day 3</button></h2>
                                                <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-4" aria-expanded="false" aria-controls="accordion-3 .item-4">Day 4</button></h2>
                                                <div className="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-5" aria-expanded="false" aria-controls="accordion-3 .item-5">Day 5</button></h2>
                                                <div className="accordion-collapse collapse item-5" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-6" aria-expanded="false" aria-controls="accordion-3 .item-6">Day 6</button></h2>
                                                <div className="accordion-collapse collapse item-6" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" role="tab"><button className="accordion-button collapsed py-4" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-3 .item-7" aria-expanded="false" aria-controls="accordion-3 .item-7">Day 7</button></h2>
                                                <div className="accordion-collapse collapse item-7" role="tabpanel" data-bs-parent="#accordion-3">
                                                    <div className="accordion-body">
                                                        <div className="table-responsive">
                                                            <table className="table mb-0">
                                                                <thead>
                                                                    <tr>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Exercise</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Sets</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "15%"}}>Reps</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>RPE</th>
                                                                        <th className="fw-medium f-color table-s py-3" style={{width: "12%"}}>Rest</th>
                                                                        <th className="fw-medium f-color table-s" style={{width: "20%"}}>Notes</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr className="fw-normal f-color table-s py-3">
                                                                        <td className="py-3">DEADLIFT</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="text-lowercase py-3" style={{color: "#a3a3a387"}}>BRACE YOUR LATS, CHEST TALL, HIPS HIGH...</td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">OVERHEAD PRESS</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">CHEST-SUPPORTED</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="fw-normal f-color table-s">
                                                                        <td className="py-3">LEG EXTENSION</td>
                                                                        <td className="py-3">3</td>
                                                                        <td className="py-3">6</td>
                                                                        <td className="py-3">7</td>
                                                                        <td className="py-3">3-4MIN</td>
                                                                        <td className="py-3"></td>
                                                                    </tr>
                                                                    <tr className="border-0 fw-medium f-color table-s">
                                                                        <td className="l-color border-0 py-3">
                                                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={AddRow} style={{marginBottom: "1.5px"}} /><span>Add row</span></div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
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