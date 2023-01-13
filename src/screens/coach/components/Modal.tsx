import React, { useContext, useState, useEffect } from 'react';
import Close from '../../../assets/img/upload-icon/closeFilled.svg';
import UpDoc from '../../../assets/img/upload-icon/upDoc.svg';
import { Link } from 'react-router-dom';


function Modal() {
    return (
        <div className="modal fade" role="dialog" id="modal-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="mb-4 p-4 uploadDiv">
                            <div className="d-flex justify-content-center align-items-center mb-3"><img src={UpDoc} /></div>
                            <p className="f-color fw-normal text-center mb-1 l-size">
                                <Link to={"#"} className='cLink'>Click to upload</Link>&nbsp;or drag and drop
                            </p>
                            <p className="fw-normal text-black-50 text-center mb-0 expire-f">SVG, PNG, JPG or GIF (max. 3MB)</p>
                        </div>
                        <div className="card card-s">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div>
                                        <p className="mb-0 f-color fw-normal">document_file_name.pdf</p>
                                        <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">100kb</span>
                                            <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                        </div>
                                    </div><img src={Close} />
                                </div>
                                <div className="progress">
                                    {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                    <div className="progress-bar w-50">50%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer d-flex justify-content-start gap-4 border-0"><button className="btn btn-primary text-uppercase px-4" type="button">Save</button><button className="btn btn-primary text-uppercase px-3 py-2 bCancel" type="button" data-bs-dismiss="modal">Cancel</button></div>
                </div>
            </div>
        </div>
    );
}

export default Modal;