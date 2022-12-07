import React, { useContext, useState, useEffect } from 'react';

function DetailsTab() {

    return (
        <div className="tab-pane active" role="tabpanel" id="tab-1">
            <div className="card card-s" style={{ borderRadius: "24px !important" }}>
                <div className="card-body py-4">
                    <div className="row mb-4">
                        <div className="col">
                            <div className="mb-5">
                                <div className="row mb-5">
                                    <div className="col col-12 col-md-6 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    </div>
                                    <div className="col col-12 col-md-6 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Customized link</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    </div>
                                    <div className="col col-12 mb-3 mb-md-0">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{ height: "76px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea></div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>
                                <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsTab;