import React, { useContext, useState, useEffect } from 'react';
import AddRow from '../../assets/img/icon-manage/addRow.svg';
import Create from '../../assets/img/create.svg';
import AddT from '../../assets/img/add-t.svg';
import AddDay from '../../assets/img/addDay.svg';
import DotIcon from '../../assets/img/dotIcon.svg';
import MoreVert from '../../assets/img/more_vert.svg'

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
                                    <li className="breadcrumb-item"><a className="text-decoration-none" href="#"><span className="t-color text-decoration-none">Settings</span></a></li>
                                    <li className="breadcrumb-item"><a className="text-decoration-none" href="#"><span className="f-color">Full body level 2</span></a></li>
                                </ol>
                                <div className="d-flex justify-content-start align-items-center gap-3 mb-4">
                                    <h1 className="h-size mb-0 f-color fw-normal mt-1">Full body level 2</h1><img src={Create} />
                                </div>
                            </div>
                            <div className="pb-5">
                                <ul className="nav nav-tabs border-0 mb-4" role="tablist">
                                    <li className="nav-item" role="presentation"><a className="nav-link active nav-a position-relative d-flex justify-content-center align-items-center gap-1 text-uppercase" role="tab" data-bs-toggle="tab" href="#tab-1">Week 1<div className='mActive'></div><img className="position-absolute cursor-pointer" src={AddT} style={{right: "-18%"}} /></a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active bg-white-primary" role="tabpanel" id="tab-1">
                                        <div className="col col-12">
                                            <div className="card card-s mb-4">
                                                <div className="card-body">
                                                    <div className="row align-items-center">
                                                        <div className="col col-6">
                                                            <h1 className="f-color mb-1 fw-regular l-size">Full body</h1>
                                                            <p className="text-black-50 mb-0 fw-regular expire-f">Day 1</p>
                                                        </div>
                                                        <div className="col col-6">
                                                            <div className="d-flex justify-content-end align-items-center"><img src={DotIcon} /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card card-s mb-4">
                                                <div className="card-body">
                                                    <div className="row align-items-center mb-4">
                                                        <div className="col col-6">
                                                            <h1 className="f-color mb-1 fw-regular l-size">Full body</h1>
                                                            <p className="text-black-50 mb-0 fw-regular expire-f">Day 2</p>
                                                        </div>
                                                        <div className="col col-6">
                                                            <div className="d-flex justify-content-end align-items-center"><img src={DotIcon} /></div>
                                                        </div>
                                                        <div className="col col-12 mt-3">
                                                            <div className='bottomC'></div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-5">
                                                        <div className="col col-12 col-lg-6">
                                                            <div className="row mb-3 mb-lg-0">
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center text-black-50 t-h">Workout name</label><input type="text" className="input-lg w-100 fw-normal f-color l-size" style={{outline: "none"}} /></div>
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center text-black-50 t-h">Type of exercise</label><select className="btn w-100 fw-normal border-0 f-color l-size text-start" style={{backgroundColor: "transparent", boxShadow: "none"}}>
                                                                        <optgroup label="This is a group">
                                                                            <option value="12">This is item 1</option>
                                                                            <option value="13">This is item 2</option>
                                                                            <option value="14">This is item 3</option>
                                                                        </optgroup>
                                                                    </select></div>
                                                                </div>
                                                                <div className="col col-12 d-flex justify-content-center align-items-center">
                                                                    <div className="form-group position-relative h-100 w-50" style={{borderRadius: "4px 0px 0px 4px", marginRight: "-1px"}}><label className="form-label px-1 d-flex justify-content-center align-items-center text-black-50 t-h">Estimated time (mins)</label>
                                                                        <div className="row">
                                                                            <div className="col col-12 d-flex justify-content-center align-items-center"><input type="text" className="input-lg w-100 fw-normal f-color l-size py-1 text-start border-0" style={{outline: "none"}} /><span className="text-black-50 s-size">Hours</span></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group position-relative h-100 w-50" style={{borderRadius: "0px 4px 4px 0px"}}>
                                                                        <div className="row">
                                                                            <div className="col col-12 d-flex justify-content-center align-items-center"><input type="text" className="input-lg w-100 fw-normal f-color l-size py-1 text-start border-0" style={{outline: "none"}} /><span className="text-black-50 s-size">Mins</span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 col-lg-6">
                                                            <div className="form-group position-relative h-100"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal f-color l-size border-0" style={{height: "178px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </textarea></div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col">
                                                            <div className="table-responsive">
                                                                <table className="table">
                                                                    <thead className='bbStyle'>
                                                                        <tr>
                                                                            <th className="f-color fw-medium expire-f bbStyle">Column 1</th>
                                                                            <th className="f-color fw-medium expire-f brStyle" style={{width: "8%"}}>Sets</th>
                                                                            <th className="f-color fw-medium expire-f brStyle" style={{width: "8%"}}>Reps</th>
                                                                            <th className="f-color fw-medium expire-f brStyle" style={{width: "8%"}}>RPE</th>
                                                                            <th className="fw-medium f-color expire-f brStyle" style={{width: "12.5%"}}>Rest between sets</th>
                                                                            <th className="fw-medium f-color expire-f brStyle" style={{width: "12.5%"}}>Exersise Time</th>
                                                                            <th className="fw-medium f-color expire-f brStyle" style={{width: "32%"}}>Column 1</th>
                                                                            <th><img src={MoreVert} /></th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="Deadlift" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="3" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="6" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="7" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle">
                                                                                <div className="fw-normal f-color d-flex justify-content-between align-items-center gap-2"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="4" /><span className="text-black-50 fw-medium s-size">Minutes</span></div>
                                                                            </td>
                                                                            <td className="fw-normal f-color expire-f brStyle">
                                                                                <div className="fw-normal f-color d-flex justify-content-between align-items-center gap-2"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="-" /><span className="text-black-50 fw-medium s-size">Minutes</span></div>
                                                                            </td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} /></td>
                                                                            <td className="fw-normal f-color expire-f"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="Rest" /></td>
                                                                            <td>
                                                                                <div className="fw-normal f-color d-flex justify-content-between align-items-center gap-2"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="10" /><span className="text-black-50 fw-medium s-size">Minutes</span></div>
                                                                            </td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td className="fw-normal f-color expire-f"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="Deadlift" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="3" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="6" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="7" /></td>
                                                                            <td className="fw-normal f-color expire-f brStyle">
                                                                                <div className="fw-normal f-color d-flex justify-content-between align-items-center gap-2"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="4" /><span className="text-black-50 fw-medium s-size">Minutes</span></div>
                                                                            </td>
                                                                            <td className="fw-normal f-color expire-f brStyle">
                                                                                <div className="fw-normal f-color d-flex justify-content-between align-items-center gap-2"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="-" /><span className="text-black-50 fw-medium s-size">Minutes</span></div>
                                                                            </td>
                                                                            <td className="fw-normal f-color expire-f brStyle"><input type="text" className="w-100 border-0 f-color" style={{outline: "none"}} /></td>
                                                                            <td className="fw-normal f-color expire-f"><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} /></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td><input type="text" className="w-100 border-0 f-color expire-f" style={{outline: "none"}} value="Rest" /></td>
                                                                            <td>
                                                                                <div className="fw-normal f-color d-flex justify-content-between align-items-center gap-2"><input type="text" className="w-100 f-color border-0 expire-f" style={{outline: "none"}} value="10" /><span className="text-black-50 fw-medium s-size">Minutes</span></div>
                                                                            </td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td className="fw-normal f-color expire-f"></td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <div className="d-flex justify-content-start align-items-center gap-1 cursor-pointer"><img className="cursor-pointer" src={AddDay} />
                                                                                    <p className="fw-regular f-color cursor-pointer mb-0 expire-f" style={{opacity: "50%"}}>Add day</p>
                                                                                </div>
                                                                            </td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td></td>
                                                                            <td className="fw-normal f-color expire-f"></td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-4 d-flex justify-content-center align-items-center gap-1 addDiv"><img src={AddDay} /><span className="fw-regular f-color cursor-pointer expire-f" style={{opacity: "50%"}}>Add day</span></div>
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