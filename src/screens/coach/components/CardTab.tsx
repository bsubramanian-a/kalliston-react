import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardTab() {

    return (
        <div className="tab-pane" role="tabpanel" id="tab-7">
            <div className="card card-s mb-4">
                <div className="card-body">
                    <div className="row py-2">
                        <div className="col col-12">
                            <h1 className="f-h f-color fw-normal mb-5">Your billing details</h1>
                            <div className="payment-div d-flex justify-content-between align-items-start p-3 mb-2">
                                <div>
                                    <p className="f-color fw-normal mb-0 l-size">[First line here]</p>
                                    <p>[Second line here]</p>
                                    <p>[Post code]</p>
                                    <p>[City]</p>
                                    <p>[Country]</p>
                                </div><Link to={"/coach/card-settings"} className="expire-f mt-1 l-color fw-normal text-uppercase text-decoration-none">Change</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardTab;