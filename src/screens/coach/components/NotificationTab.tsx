import React, { useContext, useState, useEffect } from 'react';

function NotificationTab() {
    return (
        <div className="tab-pane" role="tabpanel" id="tab-2">
            <div className="card card-s">
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col col-12 mb-5">
                            <h1 className="f-h f-color fw-normal mb-4">
                                Privacy
                            </h1>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <span className="f-color l-size">
                                        Email notification
                                    </span>
                                </div>
                                <p className="text-black-50 t-h">
                                    The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of
                                    letters.
                                </p>
                            </div>
                            <div>
                                <div className="mb-1">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <span className="f-color l-size">
                                        New logins
                                    </span>
                                </div>
                                <p className="text-black-50 t-h">
                                    The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of
                                    letters.
                                </p>
                            </div>
                        </div>
                        <div className="col col-12 mb-5">
                            <h1 className="f-h f-color fw-normal mb-4">
                                Clients
                            </h1>
                            <div className="mb-3">
                                <div className="mb-1">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <span className="f-color l-size">
                                        New request
                                    </span>
                                </div>
                                <p className="text-black-50 t-h">
                                    The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of
                                    letters.
                                </p>
                            </div>
                            <div>
                                <div className="mb-1">
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider round"></span>
                                    </label>
                                    <span className="f-color l-size">
                                        Messages
                                    </span>
                                </div>
                                <p className="text-black-50 t-h">
                                    The point of using Lorem Ipsum is that it
                                    has a more-or-less normal distribution of
                                    letters.
                                </p>
                            </div>
                        </div>
                        <div className="col pt-5">
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

export default NotificationTab;