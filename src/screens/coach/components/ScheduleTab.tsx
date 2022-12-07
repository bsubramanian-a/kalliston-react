import React, { useContext, useState, useEffect } from 'react';

function ScheduleTab() {
    return (
        <div className="tab-pane" role="tabpanel" id="tab-4">
            <div className="card card-s">
                <div className="card-body">
                    <div className="row">
                        <div className="col py-3">
                            <h1 className="f-color l-size mb-1">
                                Synchronize on Google calendar
                            </h1>
                            <p className="mb-4">
                                Enabling this will provide an extra layer of
                                security for your account. When logging in, we
                                will ask for a special authentication code
                                from your device.
                            </p>
                            <button
                                className="btn btn-primary text-uppercase btn-profile px-3"
                                type="submit"
                                style={{ height: "36px", fontSize: "14px" }}
                            >
                                synchronize your google calendar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleTab;
