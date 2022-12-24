import React, { useContext, useState, useEffect, CSSProperties} from 'react';
import CreditCard from '../../assets/img/card-img/_creditCards.svg';

import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addCard } from '../../slices/auth';
import ClipLoader from "react-spinners/ClipLoader";

function CardSettings() {
    const { card } = useSelector((state:any) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<any>();
    const [errormessage, setErrorMessage] = useState('');

    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        position: 'absolute',
        zIndex: 1000,
        left: '45%',
        top: '45%',
    };
    
    const initialValues = {
        card_number: card?.card_number || "",
        card_holder_name: card?.card_holder_name || "",
        expiry_date: card?.expiry_date || "",
        billing_address1: card?.billing_address1 || "",
        billing_address2: card?.billing_address2 || "",
        city: card?.city || "",
        country: card?.country || ""
    };

    const validationSchema = Yup.object().shape({
        billing_address1: Yup.string().required("This field is required!"),
        city: Yup.string().required("This field is required!"),
        country: Yup.string().required("This field is required!"),
        card_number: Yup.string().required("This field is required!"),
        expiry_date: Yup.string().required("This field is required!"),
        card_holder_name: Yup.string().required("This field is required!")
    });

    const handleUpdate = (formValue: any) => {
        const { card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country, } = formValue;
        setIsLoading(true);

        dispatch(addCard({ card_number, card_holder_name, expiry_date, cvv, billing_address1, billing_address2, city, country, }))
            .unwrap()
            .then((res: any) => {
                if (res.status == 401) {
                    setIsLoading(false);
                    setErrorMessage(res.message);
                }
                if (res.status == 200) {
                    setIsLoading(false);
                    setErrorMessage(res.message);
                }
                setTimeout(() => {
                    setErrorMessage("")
                }, 3000)
            })
            .catch((error:any) => {
                console.log("error", error);
                setIsLoading(false);
                setErrorMessage(error.message);
            });
    };

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/settings"} className="text-decoration-none"><span className="t-color text-decoration-none">Settings</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"#"} className="text-decoration-none"><span className="f-color">Card Settings</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-2 f-color fw-normal mt-1">Card Settings</h1>
                            </div>
                            <div className="row">
                                <div className="col col-12 col-md-4">
                                    <p className="text-black-50 l-size">We recommend enabling MFA even though you have a strong password.</p>
                                </div>
                                <ClipLoader
                                    color={'#ffffff'}
                                    loading={isLoading}
                                    cssOverride={override}
                                    size={150}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                                <div className="col col-12 col-md-8">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="row mb-4">
                                                {errormessage && (
                                                    <div className="alert alert-danger small border-0 py-1 mb-0 text-center my-2 mb-4">{errormessage}</div>
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
                                                                    <div className="form-group position-relative d-flex justify-content-center align-items-center"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Card number</label><img className="me-2" src={CreditCard} /><Field name="card_number" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="card_number"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Cardholder name</label><Field name="card_holder_name" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="card_holder_name"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 col-md-6 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Expiration date</label><Field name="expiry_date" type="text" className="input-lg w-100 fw-normal t-color l-size" placeholder="MM / YY" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="expiry_date"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 col-md-6 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">CVC / CVC2</label><Field name="cvv" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="cvv"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="row pt-4">
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address line 1</label><Field name="billing_address1" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="billing_address1"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Address line 2</label><Field name="billing_address2" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                </div>
                                                                <div className="col col-12 col-md-6 mb-3 mb-md-0">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">City</label><Field name="city" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="city"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 col-md-6 mb-3 mb-md-0">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Country</label><Field name="country" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                                                    <ErrorMessage
                                                                        name="country"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="submit">Save changes</button>
                                                            <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
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

export default CardSettings;