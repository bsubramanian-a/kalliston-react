import React, { useContext, useState, useEffect } from 'react';

function MediaTab() {

    return (
        // <div className="tab-pane" role="tabpanel" id="tab-3">
        //     <div className="card card-s mb-4" style={{ borderRadius: "24px !important" }}>
        //         <div className="card-body">
        //             <div className="row py-2">
        //                 <div className="col col-12">
        //                     <h1 className="f-color fw-normal mb-3" style={{ fontSize: "20px" }}>Cover</h1>
        //                     <div className="files color form-group mb-5" style={{ border: "1px dashed #00000012" }}><input type="file" name="files" style={{ backgroundColor: "transparent", outline: "none", border: "none" }} /></div>
        //                     <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>
        //                         <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="tab-pane" role="tabpanel" id="tab-2">
            <div className="card card-s mb-4">
                <div className="card-body py-4">
                    <div className="pt-1 pb-2 b-c">
                        <h1 className="f-color fw-regular f-h">Media & Banner</h1>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-12">
                            <h1 className="f-color fw-normal mb-3 big-font">Cover</h1>
                            <div className="files color form-group mb-4 b-m"><input type="file" name="files" className='border-0 bg_t' /></div>
                            <h1 className="f-color fw-normal mb-3 big-font">Media</h1>
                            <div className="files color form-group mb-5 b-m"><input type="file" name="files" className='border-0 bg_t' /></div>
                            <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">Save changes</button>
                                <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-s"></div>
        </div>
    );
}

export default MediaTab;