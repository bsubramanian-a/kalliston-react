import React, { useContext, useState, useEffect } from 'react';
import CreditCard from '../../assets/img/card-img/_creditCards.svg';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { coachUpdateBilling } from '../../slices/auth';
import ClipLoader from "react-spinners/ClipLoader";

function BillingSettings() {
    const { coach: currentUser } = useSelector((state:any) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<any>();
    const [errormessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    const initialValues = {
        billing_address1: currentUser?.billing_address1 || "",
        billing_address2: currentUser?.billing_address2 || "",
        city: currentUser?.city || "",
        country: currentUser?.country || ""
    };

    const validationSchema = Yup.object().shape({
        billing_address1: Yup.string().required("This field is required!"),
        city: Yup.string().required("This field is required!"),
        country: Yup.string().required("This field is required!")
    });

    const handleUpdate = (formValue: any) => {
        const { billing_address1, billing_address2, city, country } = formValue;
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        dispatch(coachUpdateBilling({ billing_address1, billing_address2, city, country }))
            .unwrap()
            .then((res: any) => {
                if (res.status == 401) {
                    setIsLoading(false);
                    setErrorMessage(res.message);
                }
                if (res.status == 200) {
                    setIsLoading(false);
                    setSuccessMessage(res.message);
                }
                setTimeout(() => {
                    setErrorMessage("");
                    setSuccessMessage("");
                }, 3000)
            })
            .catch((error:any) => {
                console.log("error", error);
                setIsLoading(false);
                setErrorMessage(error.data.message);
            });
    };


    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/settings"} className="text-decoration-none"><span className="t-color text-decoration-none"> Settings</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Billing settings</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-2 f-color fw-normal mt-1">Your Billing Details</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-md-4">
                                </div>
                                <div className="col col-12 col-md-8">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                {errormessage && (
                                                    <div className="alert alert-danger small border-0 py-1 mb-0 text-center my-2 mb-4">{errormessage}</div>
                                                )}
                                                {successMessage && (
                                                    <div className="alert alert-success small border-0 py-1 mb-0 text-center my-2 mb-4">{successMessage}</div>
                                                )}
                                                <Formik
                                                    initialValues={initialValues}
                                                    validationSchema={validationSchema}
                                                    onSubmit={handleUpdate}
                                                >
                                                    <Form>
                                                        <div className="col">
                                                            <div className="mb-5">
                                                                <div className="row mb-5">
                                                                    <div className="col col-12 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address Line 1</label>
                                                                        <Field type="text" name="billing_address1" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        <ErrorMessage
                                                                            name="billing_address1"
                                                                            component="div"
                                                                            className="alert alert-danger small border-0 py-1 mb-0"
                                                                        />
                                                                    </div>
                                                                    <div className="col col-12 mb-3">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address Line 2</label>
                                                                        <Field name="billing_address2" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    </div>
                                                                    <div className="col col-12 col-md-6 mb-3 mb-md-0">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">City</label>
                                                                        <Field name="city" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        <ErrorMessage
                                                                            name="city"
                                                                            component="div"
                                                                            className="alert alert-danger small border-0 py-1 mb-0"
                                                                        />
                                                                    </div>
                                                                    <div className="col col-12 col-md-6 mb-3 mb-md-0">
                                                                        <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Country</label>
                                                                        <Field name="country" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                        <ErrorMessage
                                                                            name="country"
                                                                            component="div"
                                                                            className="alert alert-danger small border-0 py-1 mb-0"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex justify-content-start align-items-center gap-3">
                                                                {!isLoading && <button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>}
                                                                {isLoading && <div>Updating Billing Address...</div>}
                                                                <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><Link className="l-size  fw-medium link_decoration l-color" to={"/coach/settings"}>Cancel</Link></div>
                                                            </div>
                                                        </div>
                                                    </Form>
                                                </Formik>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><Link to={"#page-top"} className="border rounded d-inline scroll-to-top"><i className="fas fa-angle-up"></i></Link>
            </div>
        </div>
    );
}

export default BillingSettings;