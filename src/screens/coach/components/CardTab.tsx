import React, { useContext, useState, useEffect } from 'react';
import CreditCard from '../../../assets/img/card-img/_creditCards.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function BillingTab() {
    const { card } = useSelector((state:any) => state.auth);
    
    return (
        <div className="tab-pane" role="tabpanel" id="tab-7">
            <div className="card mb-4 card-s">
                <div className="card-body">
                    <div className="row py-2">
                        <div className="col col-12">
                            <h1 className="f-h f-color fw-normal mb-5">Your Card</h1>
                            <div className="payment-div d-flex justify-content-between align-items-start p-3 mb-2">
                                <div className="d-flex justify-content-start align-items-start gap-3">
                                {card ? 
                                    <>
                                        <img src={CreditCard} />
                                        <div>
                                            {card?.card_number && <p className="f-color fw-normal mb-0" style={{ fontSize: "20px" }}>**** {card?.card_number.substr(card?.card_number.length - 4)}</p>}
                                            {card?.card_number && <p className="expire-f text-black-50 fw-normal mb-0">Expires at {card?.expiry_date}</p>}
                                        </div>
                                    </>:
                                    <div>No card available</div>
                                }
                                </div><Link to={"/coach/card-settings"} className="expire-f mt-1 l-color fw-normal text-uppercase text-decoration-none">{card ? 'Change' : 'Add Card'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingTab;    