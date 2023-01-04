import React, { useContext, useState, useEffect } from 'react';
import Facebook from '../../../assets/img/media-icon/facebook.svg'
import Insta from '../../../assets/img/media-icon/insta.svg'
import TikTok from '../../../assets/img/media-icon/tiktok.svg'
import Twitter from '../../../assets/img/media-icon/twitter.svg'
import LinkedIn from '../../../assets/img/media-icon/linkedIn.svg'
import Web from '../../../assets/img/media-icon/web.svg'

function SocialTab() {

    return (
        // <div className="tab-pane" role="tabpanel" id="tab-2">
        //     <div className="card card-s py-2" style={{ borderRadius: "24px !important" }}>
        //         <div className="card-body">
        //             <div className="row mb-4">
        //                 <div className="col">
        //                     <div className="mb-5">
        //                         <div className="row mb-5">
        //                             <div className="col col-12 mb-3">
        //                                 <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Website</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
        //                             </div>
        //                             <div className="col col-12 mb-3">
        //                                 <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Instagram</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
        //                             </div>
        //                             <div className="col col-12 mb-3">
        //                                 <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Facebook</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
        //                             </div>
        //                             <div className="col col-12 mb-3">
        //                                 <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">TikTok</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
        //                             </div>
        //                             <div className="col col-12 mb-3">
        //                                 <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Youtube</label><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">SAve changes</button>
        //                         <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">CAncel</span></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="tab-pane" role="tabpanel" id="tab-3">
            <div className="card card-s">
                <div className="card-body py-4">
                    <div className="pt-1 pb-2 b-c">
                        <h1 className="f-color fw-regular f-h">Social Links</h1>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="mb-5">
                                <div className="row mb-5">
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative">
                                            <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Facebook</label>
                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                <img src={Facebook} />
                                                <input type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative">
                                            <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Instagram</label>
                                            <div className="d-flex justify-content-start align-items-center gap-2">
                                                <img src={Insta} />
                                                <input type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">TikTok</label>
                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={TikTok} /><input type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                        </div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Twitter</label>
                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={Twitter} /><input type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                        </div>
                                    </div>
                                    <div className="col col-12 mb-3">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">LinkedIn</label>
                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={LinkedIn} /><input type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                        </div>
                                    </div>
                                    <div className="col col-12">
                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Website</label>
                                            <div className="d-flex justify-content-start align-items-center gap-2"><img src={Web} /><input type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                        </div>
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

export default SocialTab;