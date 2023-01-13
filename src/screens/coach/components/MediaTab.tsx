import React, { useContext, useState, useEffect } from 'react';
import Close from '../../../assets/img/upload-icon/closeFilled.svg';
import UpDoc from '../../../assets/img/upload-icon/upDoc.svg';
import ImgPlaceHolder from '../../../assets/img/upload-icon/_placeholderImage.png';
import MediaPlaceHolder from '../../../assets/img/upload-icon/placeholderMImage.png';
import { Link } from 'react-router-dom';

function MediaTab() {

    return (
        <div className="tab-pane" role="tabpanel" id="tab-2">
            <div className="card card-s mb-4">
                <div className="card-body py-4">
                    <div className="pt-1 pb-2 bottomC">
                        <h1 className="f-color fw-regular f-h">Media &amp; Banner</h1>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-12">
                            <div className="mb-4">
                                <h1 className="f-color fw-medium mb-3 big-font">Cover</h1>
                                <div className="mb-4 p-4 uploadDiv">
                                    <div className="d-flex justify-content-center align-items-center mb-3"><img src={UpDoc} />
                                    </div>
                                    <p className="f-color fw-normal text-center mb-1 l-size">
                                        <Link to={"#"} className='cLink'>Click to upload</Link>&nbsp;or drag and drop
                                    </p>
                                    <p className="fw-normal text-black-50 text-center mb-0 expire-f">SVG, PNG, JPG or GIF (max. 3MB)</p>
                                </div>
                                <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                                    <img src={UpDoc} />
                                    <div className="w-100 mt-2">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-0 f-color fw-normal">document_file_name.pdf</p>
                                                <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">100kb</span>
                                                    <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                                </div>
                                            </div>
                                            <img src={Close} />
                                        </div>
                                        <div className="progress">
                                            {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                            <div className="progress-bar w-50">50%</div>
                                        </div>
                                    </div>
                                </div>
                                <div id="preview">
                                    <h1 className="f-color fw-normal mb-3 l-size">Preview</h1>
                                    <div id="preview-img"><img className="w-100" src={ImgPlaceHolder} /></div>
                                </div>
                            </div>
                            <div>
                                <h1 className="f-color fw-medium mb-3 big-font">Media</h1>
                                <div id="multiple-img">
                                    <div className="mb-4 p-4 uploadDiv">
                                        <div className="d-flex justify-content-center align-items-center mb-3">
                                            <img src={UpDoc} />
                                        </div>
                                        <p className="f-color fw-normal text-center mb-1 l-size"><Link to={"#"} className='cLink'>Click to upload</Link>&nbsp;or drag and drop</p>
                                        <p className="fw-normal text-black-50 text-center mb-0 expire-f">SVG, PNG, JPG or GIF (max. 3MB)</p>
                                    </div>
                                    <div className='d-flex flex-column gap-4'>
                                        <div className="w-100 mt-2">
                                            <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                                                <img src={UpDoc} />
                                                <div className="w-100 mt-2">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <p className="mb-0 f-color fw-normal">document_file_name.pdf</p>
                                                            <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">100kb</span>
                                                                <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                                            </div>
                                                        </div>
                                                        <img src={Close} />
                                                    </div>
                                                    <div className="progress">
                                                        {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                                        <div className="progress-bar w-50">50%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-100 mt-2">
                                            <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                                                <img src={UpDoc} />
                                                <div className="w-100 mt-2">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <p className="mb-0 f-color fw-normal">document_file_name.pdf</p>
                                                            <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">100kb</span>
                                                                <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                                            </div>
                                                        </div>
                                                        <img src={Close} />
                                                    </div>
                                                    <div className="progress">
                                                        {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                                        <div className="progress-bar w-50">50%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-100 mt-2">
                                            <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                                                <img src={UpDoc} />
                                                <div className="w-100 mt-2">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <p className="mb-0 f-color fw-normal">document_file_name.pdf</p>
                                                            <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">100kb</span>
                                                                <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                                            </div>
                                                        </div>
                                                        <img src={Close} />
                                                    </div>
                                                    <div className="progress">
                                                        {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                                        <div className="progress-bar w-50">50%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-100 mt-2">
                                            <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                                                <img src={UpDoc} />
                                                <div className="w-100 mt-2">
                                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                                        <div>
                                                            <p className="mb-0 f-color fw-normal">document_file_name.pdf</p>
                                                            <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">100kb</span>
                                                                <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                                            </div>
                                                        </div>
                                                        <img src={Close} />
                                                    </div>
                                                    <div className="progress">
                                                        {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                                        <div className="progress-bar w-50">50%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="preview-multiple">
                                    <h1 className="f-color fw-normal mb-3 l-size">Preview</h1>
                                    <div className="row gy-3 gy-lg-0">
                                        <div className="col col-6 col-lg-3">
                                            <img className="w-100" src={MediaPlaceHolder} />
                                        </div>
                                        <div className="col col-6 col-lg-3">
                                            <img className="w-100" src={MediaPlaceHolder} />
                                        </div>
                                        <div className="col col-6 col-lg-3">
                                            <img className="w-100" src={MediaPlaceHolder} />
                                        </div>
                                        <div className="col col-6 col-lg-3">
                                            <img className="w-100" src={MediaPlaceHolder} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 mt-5">
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