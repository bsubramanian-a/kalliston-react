import React, { useContext, useState, useEffect } from 'react';
import Add from "../../../assets/img/icon-manage/addFilled.svg"
import Dot from "../../../assets/img/dotIcon.svg"
import Left from "../../../assets/img/d-img/left.svg"
import Right from "../../../assets/img/d-img/right.svg"
import { Link } from 'react-router-dom';

function ProgramTab() {
    return (
        <div className="tab-pane" role="tabpanel" id="tab-8">
            <div className="card card-s mb-5">
                <div className="card-body">
                    <div className="pt-1 pb-2 mb-4 bottomC">
                        <h1 className="f-color fw-regular f-h">Programme template</h1>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th className="fw-medium f-color table-s" style={{ width: "40%" }}>Name</th>
                                            <th className="fw-medium f-color table-s w-25">Last modify</th>
                                            <th className="fw-medium f-color text-end" style={{ width: "40%" }}>
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center">
                                                    <Link to={"/coach/add-program"} className="px-3 d-flex justify-content-center align-items-center text-decoration-none cursor-pointer addBtn">
                                                        <img className="me-2" src={Add} />
                                                        <span className="fw-medium text-uppercase l-color expire-f">
                                                            add template
                                                        </span>
                                                    </Link>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-s">
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">Full body level 2</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">28/12/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Full body level 1</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">03/10/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Full body level 3</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">03/10/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Body weight</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">03/10/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Calisthenic</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">03/10/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Full body level 4</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">17/08/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center"><span className="f-color">Full body level 5</span></div>
                                            </td>
                                            <td>
                                                <div className="c-img w-100 d-flex justify-content-start align-items-center gap-2"><span className="f-color">17/08/22</span></div>
                                            </td>
                                            <td className="w-100">
                                                <div className="c-img w-100 d-flex justify-content-end align-items-center gap-2"><img className="cursor-pointer" src={Dot} /></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="row mb-2">
                                <div className="col d-flex justify-content-end align-items-center gap-4">
                                    <div className="d-flex justify-content-center align-items-center gap-2">
                                        <p className="fw-normal t-h text-black-50 mb-0">Rows per page:</p><select className="fw-normal border-0 t-h f-color d-btn">
                                            <optgroup label="Display content">
                                                <option value="12" selected>10</option>
                                                <option value="13">20</option>
                                                <option value="14">50</option>
                                            </optgroup>
                                        </select>
                                    </div>
                                    <div>
                                        <p className="fw-normal t-h f-color mb-0"><span>1-5&nbsp;</span>of<span>&nbsp;13</span></p>
                                    </div>
                                    <div><img className="pe-2" src={Left} /><img className="ms-3" src={Right} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgramTab;
