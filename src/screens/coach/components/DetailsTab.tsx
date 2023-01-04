import React, { useContext, useState, useEffect } from 'react';
import Avatar from '../../../assets/img/avatars/avatar1.jpeg'

function DetailsTab() {

    return (
        <div className="tab-pane active" role="tabpanel" id="tab-1">
            <div className="card card-s">
                <div className="card-body">
                    <div className="pt-1 pb-2 b-c">
                        <h1 className="f-color fw-regular f-h">Profile Details</h1>
                    </div>
                    <div className="row my-4">
                        <div className="col col-12">
                            <div className="mb-5">
                                <div className="row mb-5">
                                    <div className="col col-12">
                                        <h1 className="f-color mb-4 big-font">Avatar</h1>
                                        <div className="d-flex justify-content-start align-items-center gap-4"><img className="img-profile pro-size rounded-circle" src={Avatar} /><button className="btn btn-primary text-uppercase btn-profile px-3 c-btn" type="button">Change</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-5">
                                    <div className="col col-12 mb-4">
                                        <h1 className="f-color mb-0 big-font">Details</h1>
                                    </div>
                                    <div className="col col-12 col-md-6 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                    </div>
                                    <div className="col col-12 col-md-6 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{outline: "none"}} /></div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative py-2"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Category</label>
                                            <div className="dropdown"><button className="btn btn-primary dropdown-toggle w-100 p-0 f-color d-flex justify-content-between align-items-center m-drp" aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown</button>
                                                <div className="dropdown-menu w-100"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 mb-3 mb-md-0">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{height: "76px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">Save changes</button>
                                <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsTab;