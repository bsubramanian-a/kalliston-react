import React, { useContext, useState, useEffect } from 'react';
import LogoMain from '../../assets/img/logo.svg';

import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from '../../slices/auth';

function Register() {

    const [successful, setSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [emailExist, setEmailExist] = useState(false);

    //const { message } = useSelector((state) => state?.message);
    const dispatch = useDispatch<any>();

    const initialValues = {
        email: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!")
    });

    const handleRegister = (formValue: any) => {
        const { email } = formValue;

        setSuccessful(false);
        setIsLoading(true);

        dispatch(register(email))
            .unwrap()
            .then((res:any) => {
                console.log("response coming in",res);
                if (res == 409) {
                    setIsLoading(false);
                    setSuccessful(false);
                    setEmailExist(true);
                }
                if (res.status == "success") {
                    setIsLoading(false);
                    setSuccessful(true);                    
                }                
            })
            .catch(() => {
                setSuccessful(false);
            });
    };
    
    return (
        <div className="vh-100">
        <div className="row mx-0">
            <div className="col col-12 col-lg-6 main-limg"></div>
            <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
                <div className="container my-auto mx-md-5">
                    <div className="row mb-4">
                        <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                        {successful && (
                            <div className="col col-12">
                                <p className="f-color f-h mb-0 text-start">Thank you for your email!</p>
                                <p className="text-black-50 l-size mb-0 text-start">We will get back to you within 48 working hours</p>
                            </div>
                            )}
                            {!successful && (
                            <div className="col col-12">
                                <p className="f-color f-h mb-0 text-start">Contact us to create an account</p>
                                <p className="text-black-50 l-size mb-0 text-start">To create a coach account please enter your details and we will get back to you within 48 hours</p>
                            </div>
                            )}
                    </div>
                    <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleRegister}
                        >
                            <Form>
                                {!successful && (
                                    <div>
                                        <div className="row mb-5">
                                            <div className="col col-12">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label>
                                                    <Field type="text" name="email" className="input-lg w-100 fw-normal t-color l-size form-control" style={{ outline: "none" }} />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="alert alert-danger"
                                                    />
                                                    {emailExist && (
                                                        <div className="alert alert-danger"> Email already exist </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col col-12 text-start">
                                                {isLoading && (
                                                    <div>Creating the coach...</div>
                                                )}
                                                {!isLoading && (
                                                <button className="btn btn-primary px-4 text-uppercase" type="submit">Send</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                            </Form>
                        </Formik>
                </div>
            </div>
        </div>
    </div>
        );
    }
  
              export default Register;