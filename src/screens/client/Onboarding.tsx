import React, { useContext, useState, useEffect } from 'react';
import Card from '../../assets/img/card-img/card.svg';

function Onboarding() {

    return (
        <div className="vh-100">
            <div>
                <div id="multple-step-form-n" className="container vh-100 mt-0 mb-2 ob-p">
                    <div id="progress-bar-button" className="multisteps-form">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-12 col-lg-6 ml-auto mr-auto mb-5">
                                <div className="multisteps-form__progress d-flex justify-content-center align-items-center gap-4 mb-0"><a className="btn multisteps-form__progress-btn js-active" role="button" title="User Info"></a><a className="btn multisteps-form__progress-btn" role="button" title="User Info"></a><a className="btn multisteps-form__progress-btn" role="button" title="User Info"></a><a className="btn multisteps-form__progress-btn" role="button" title="User Info"></a><a className="btn multisteps-form__progress-btn" role="button" title="User Info"></a></div>
                            </div>
                        </div>
                    </div>
                    <div id="multistep-start-row" className="row">
                        <div id="multistep-start-column" className="col-12 col-lg-6 m-auto">
                            <form id="main-form" className="multisteps-form__form">
                                <div id="single-form-next" className="multisteps-form__panel js-active" data-animation="scaleIn">
                                    <div className="row mb-5">
                                        <div className="col col-12">
                                            <p className="f-color f-h mb-3">Your details</p>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col col-12 col-lg-6 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col col-12 col-lg-6 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col col-12 col-lg-6 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Gender</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col col-12 col-lg-6 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Date of Birth</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col col-12 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label><input className="form-control input-lg w-100 t-color l-size" type="password" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col col-12 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Password</label><input className="form-control input-lg w-100 t-color l-size" type="password" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col col-12 mb-3">
                                            <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Confirm Password</label><input className="form-control input-lg w-100 t-color l-size" type="password" style={{outline: "none"}} /></div>
                                        </div>
                                        <div className="col">
                                            <div id="next-button" className="button-row d-flex mt-4"><button className="btn btn btn-primary ml-auto js-btn-next w-100 fw-medium text-uppercase" type="button" title="Next">Next</button></div>
                                        </div>
                                    </div>
                                </div>
                                <div id="single-form-next-prev" className="multisteps-form__panel" data-animation="scaleIn">
                                    <div id="form-content-1" className="multisteps-form__content">
                                        <div className="row mb-5">
                                            <div className="col col-12">
                                                <p className="f-color f-h mb-0">What is your goal?</p>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col col-12 mb-3">
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="f-color" style={{fontSize: "18px"}}>Lose weight</h1>
                                                        <p className="l-size mb-0 text-black-50">Get leaner and improve your fitness</p>
                                                    </div>
                                                    <div><input type="radio" className="mb-0 r-input" /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="f-color" style={{fontSize: "18px"}}>Build muscle</h1>
                                                        <p className="l-size mb-0 text-black-50">Build your strength and muscles</p>
                                                    </div>
                                                    <div><input type="radio" className="mb-0 r-input" /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="f-color" style={{fontSize: "18px"}}>Get fit &amp; toned</h1>
                                                        <p className="l-size mb-0 text-black-50">Train for optimum health</p>
                                                    </div>
                                                    <div><input type="radio" className="mb-0 r-input" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="next-prev-buttons" className="button-row d-flex mt-4 gap-3"><button className="btn btn btn-primary js-btn-prev w-100" type="button" title="Prev">Prev</button><button className="btn btn btn-primary ml-auto js-btn-next w-100" type="button" title="Next">Next</button></div>
                                    </div>
                                </div>
                                <div id="single-form-next-prev-1" className="multisteps-form__panel" data-animation="scaleIn">
                                    <div id="form-content-2" className="multisteps-form__content">
                                        <div className="row mb-5">
                                            <div className="col col-12">
                                                <p className="f-color f-h mb-0">What’s your current fitness level?</p>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col col-12 mb-3">
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="f-color" style={{fontSize: "18px"}}>Beginner</h1>
                                                        <p className="l-size mb-0 text-black-50">I currently train 0-1 times a week</p>
                                                    </div>
                                                    <div><input type="radio" className="mb-0 r-input" /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="f-color" style={{fontSize: "18px"}}>Intermediate</h1>
                                                        <p className="l-size mb-0 text-black-50">In currently train 2-4 times a week</p>
                                                    </div>
                                                    <div><input type="radio" className="mb-0 r-input" /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <h1 className="f-color" style={{fontSize: "18px"}}>Advanced</h1>
                                                        <p className="l-size mb-0 text-black-50">I currently train 5-7 times a week</p>
                                                    </div>
                                                    <div><input type="radio" className="mb-0 r-input" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="next-prev-buttons-1" className="button-row d-flex gap-3 mt-4"><button className="btn js-btn-prev btn btn-primary w-100" type="button" title="Prev">Prev</button><button className="btn ml-auto js-btn-next btn btn-primary w-100" type="button" title="Next">Next</button></div>
                                    </div>
                                </div>
                                <div id="single-form-next-prev-2" className="multisteps-form__panel" data-animation="scaleIn">
                                    <div id="form-content-3" className="multisteps-form__content">
                                        <div className="row mb-5">
                                            <div className="col col-12">
                                                <p className="f-color f-h mb-0">Register your card</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="mb-5">
                                                            <div className="row mb-5">
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative d-flex justify-content-center align-items-center"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Card number</label><img className="me-2" src={Card} /><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                    <div className="col col-12 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Cardholder name</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                    <div className="col col-12 col-md-6 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Expiration date</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} placeholder="MM / YY" /></div>
                                                                    </div>
                                                                    <div className="col col-12 col-md-6 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">CVC / CVC2</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                </div>
                                                                <div className="row pt-4">
                                                                    <div className="col col-12 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address line 1</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                    <div className="col col-12 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address line 2</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                    <div className="col col-12 col-md-6">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">City</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                    <div className="col col-12 col-md-6">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Country</label><input className="form-control input-lg w-100 fw-normal t-color l-size" type="text" style={{outline: "none"}} /></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="next-prev-buttons-2" className="button-row d-flex gap-3 mb-5"><button className="btn js-btn-prev btn btn-primary w-100" type="button" title="Prev">Prev</button><button className="btn ml-auto js-btn-next btn btn-primary w-100" type="button" title="Next">Next</button></div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Onboarding;