import React, { useContext, useState, useEffect } from 'react';
import Avatar from "../../../assets/img/avatars/avatar1.jpeg";

function AccountTab() {
    return (
        <div className="tab-pane  active" role="tabpanel" id="tab-1">
            <div className="card card-s">
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col">
                            <h1 className="f-color l-size mb-4">Avatar</h1>
                            <div className="flex-column d-flex justify-content-start align-items-start gap-3">
                                <img
                                    className="img-profile rounded-circle"
                                    src={Avatar}
                                />
                                <button
                                    className="btn btn-primary text-uppercase btn-profile px-3"
                                    type="submit"
                                >
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col">
                            <h1 className="f-color l-size mb-4">
                                Account Info
                            </h1>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col col-12 col-md-6 mb-3">
                                        <div className="form-group position-relative">
                                            <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                First name
                                            </label>
                                            <input
                                                type="text"
                                                className="input-lg w-100 fw-normal t-color l-size"
                                                style={{ outline: "none" }}
                                            />
                                        </div>
                                    </div>
                                    ''
                                    <div className="col col-12 col-md-6 mb-3">
                                        <div className="form-group position-relative">
                                            <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                Last name
                                            </label>
                                            <input
                                                type="text"
                                                className="input-lg w-100 fw-normal t-color l-size"
                                                style={{ outline: "none" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative">
                                            <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                className="input-lg w-100 fw-normal t-color l-size"
                                                style={{ outline: "none" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-start align-items-center gap-3">
                                <button
                                    className="btn btn-primary text-uppercase px-3"
                                    type="submit"
                                >
                                    Save changes
                                </button>
                                <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase">
                                    <span className="l-size">Cancel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountTab;