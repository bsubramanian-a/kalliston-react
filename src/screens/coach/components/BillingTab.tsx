import React, { useContext, useState, useEffect } from 'react';
import CreditCard from '../../../assets/img/card-img/_creditCards.svg';
import { Link } from 'react-router-dom';

function BillingTab() {

    return (
        <div className="tab-pane" role="tabpanel" id="tab-6">
            <div className="card mb-4 card-s">
                <div className="card-body">
                    <div className="row py-2">
                        <div className="col col-12">
                            <h1 className="f-h f-color fw-normal mb-5">Your Card</h1>
                            <div className="payment-div d-flex justify-content-between align-items-start p-3 mb-2">
                                <div className="d-flex justify-content-start align-items-start gap-3"><img src={CreditCard} />
                                    <div>
                                        <p className="f-color fw-normal mb-0" style={{ fontSize: "20px" }}>**** 4242</p>
                                        <p className="expire-f text-black-50 fw-normal mb-0">Expires at 08/24</p>
                                    </div>
                                </div><Link to={"/coach/card-settings"} className="expire-f mt-1 l-color fw-normal text-uppercase text-decoration-none">Change</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingTab;    