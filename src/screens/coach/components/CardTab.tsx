import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

function CardTab() {
    const { coach: currentUser } = useSelector((state:any) => state.auth);
    
    return (
        <div className="tab-pane" role="tabpanel" id="tab-7">
            <div className="card card-s mb-4">
                <div className="card-body">
                    <div className="row py-2">
                        <div className="col col-12">
                            <h1 className="f-h f-color fw-normal mb-5">Your billing details</h1>
                           
                                <div className="payment-div d-flex justify-content-between align-items-start p-3 mb-2">
                                {(currentUser?.billing_address1 || currentUser?.billing_address2) ? 
                                    <div>
                                        {currentUser?.billing_address1 && <p className="f-color fw-normal mb-0 l-size">{currentUser?.billing_address1}</p>}
                                        {currentUser?.billing_address2 && <p>{currentUser?.billing_address2}</p>}
                                        {currentUser?.pin && <p>{currentUser?.pin}</p>}
                                        {currentUser?.city && <p>{currentUser?.city}</p>}
                                        {currentUser?.country && <p>{currentUser?.country}</p>}
                                    </div>:
                                    <div>
                                        No address available.
                                    </div>
                                }
                                    <Link to={"/coach/billing-settings"} className="expire-f mt-1 l-color fw-normal text-uppercase text-decoration-none">{(currentUser?.billing_address1 || currentUser?.billing_address2) ? 'Change' : 'Add Address'}</Link>
                                </div> :
                           
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardTab;