import React, { useContext, useState, useEffect } from 'react';
import Facebook from '../../../assets/img/media-icon/facebook.svg'
import Insta from '../../../assets/img/media-icon/insta.svg'
import TikTok from '../../../assets/img/media-icon/tiktok.svg'
import Twitter from '../../../assets/img/media-icon/twitter.svg'
import LinkedIn from '../../../assets/img/media-icon/linkedIn.svg'
import Web from '../../../assets/img/media-icon/web.svg'
import { useUpdateCoachMutation } from '../../../services/coach-service';
import { useGetCoachQuery } from '../../../services/coach-service';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function SocialTab() {
    const { data: currentUser = [], isFetching, isError, error }:any = useGetCoachQuery(1);
    const [ coachUpdate ]:any = useUpdateCoachMutation();
    const [isLoading, setIsLoading] = useState(false);
    const [errormessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const initialValues = {
        facebook_link: currentUser?.facebook_link || "",
        instagram_link: currentUser?.instagram_link || "",
        twitter_link: currentUser?.twitter_link || "",
        linkedin_link: currentUser?.linkedin_link || "",
        tiktok_link: currentUser?.tiktok_link || "",
        website_link: currentUser?.website_link || "",
    };

    const handleUpdate = async(formValue: any) => {
        const { facebook_link, instagram_link, tiktok_link, twitter_link, linkedin_link, website_link } = formValue;
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const res = await coachUpdate({ facebook_link, instagram_link, tiktok_link, twitter_link, linkedin_link, website_link });
        console.log("res link update", res);

        if(res?.data?.status == 200){
            setSuccessMessage(res?.data?.message);
        }else{
            setErrorMessage(res?.data?.message);
        }
        setIsLoading(false);
    };

    return (
        <div className="tab-pane active" role="tabpanel" id="tab-3">
            <div className="card card-s">
                <div className="card-body py-4">
                    <div className="pt-1 pb-2 b-c">
                        <h1 className="f-color fw-regular f-h">Social Links</h1>
                    </div>
                    {isFetching ? <div>Loading...</div> :
                    <div className="row mt-4">
                        <div className="col">
                            <div className="mb-5">
                                {errormessage && (
                                    <div className="alert alert-danger small border-0 py-1 mb-0 text-center my-2 mb-4">{errormessage}</div>
                                )}
                                {successMessage && (
                                    <div className="alert alert-success small border-0 py-1 mb-0 text-center my-2 mb-4">{successMessage}</div>
                                )}
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={handleUpdate}
                                >
                                    <Form>
                                        <div className="row mb-5">
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Facebook</label>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <img src={Facebook} />
                                                        <Field name="facebook_link" type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Instagram</label>
                                                    <div className="d-flex justify-content-start align-items-center gap-2">
                                                        <img src={Insta} />
                                                        <Field name="instagram_link" type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">TikTok</label>
                                                    <div className="d-flex justify-content-start align-items-center gap-2"><img src={TikTok} /><Field name="tiktok_link" type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Twitter</label>
                                                    <div className="d-flex justify-content-start align-items-center gap-2"><img src={Twitter} /><Field name="twitter_link" type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">LinkedIn</label>
                                                    <div className="d-flex justify-content-start align-items-center gap-2"><img src={LinkedIn} /><Field name="linkedin_link" type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                                </div>
                                            </div>
                                            <div className="col col-12">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Website</label>
                                                    <div className="d-flex justify-content-start align-items-center gap-2"><img src={Web} /><Field name="website_link" type="text" className="input-lg w-100 fw-normal f-color l-size border-0" style={{ outline: "none" }} /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">{isLoading ? 'Updating...' : 'Save changes'}</button>
                                            <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default SocialTab;