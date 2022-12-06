import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/img/logo.svg';

import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from '../../slices/auth';

function Login() {

    const [successful, setSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState();
    const [isError, setIsError] = useState(false);
    const [errormessage, setErrorMessage] = useState();

    const dispatch = useDispatch<any>();

    const initialValues = {
        email: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .required("This field is required!")
    });

    const handleLogin = (formValue: any) => {
        const { email, password } = formValue;
        setEmail(email);

        setSuccessful(false);
        setIsLoading(true);

        dispatch(login({ email, password }))
            .unwrap()
            .then((res: any) => {
                console.log("response coming in", res);
                if (res.status == 401) {
                    setIsLoading(false);
                    setSuccessful(false);
                    setErrorMessage(res.data.status);
                    setIsError(true);
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
        <div className="row vh-100 mx-0">
            <div className="col col-12 col-lg-6 main-limg"></div>
            <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
                <div className="container my-auto mx-md-5">
                    <div className="row mb-4">
                        <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                        {!successful && (
                            <div className="col col-12 text-start">
                                <p className="f-color f-h">Login into Kalliston Coach</p>
                            </div>
                        )}
                        {successful && (
                            <div className="col col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="f-color f-h mb-0">Continue with email</p><a className="l-color l-size fw-normal" href="#">Edit email</a>
                                </div>
                                <p className="text-black-50 text-start l-size">Please type in the code we sent to {email}</p>
                            </div>
                        )}
                    </div>
                    {!successful && (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form>
                                {isError && (
                                    <div className="alert alert-danger"> {errormessage} </div>
                                )}
                                <div>
                                    <div className="row mb-2">
                                        <div className="col col-12 mb-3">
                                            <div className="form-group position-relative">
                                                <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label>
                                                <Field type="text" name="email" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="alert alert-danger"
                                                />
                                            </div>
                                        </div>
                                        <div className="col col-12">
                                            <div className="form-group position-relative">
                                                <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Password</label>
                                                <Field type="password" name="password" className="input-lg w-100 t-color l-size" style={{ outline: "none" }} />
                                                <ErrorMessage
                                                    name="password"
                                                    component="div"
                                                    className="alert alert-danger"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-12 mb-4 text-start">
                                            <Link to={"/coach/register"} className="me-4 l-color l-size">Create an account</Link>
                                            <Link to={"/coach/forgot-password"} className="l-color l-size" >Forgot password</Link>
                                        </div>
                                        <div className="col col-12">
                                            {isLoading && (
                                                <div>Signing in...</div>
                                            )}
                                            {!isLoading && (
                                                <button className="btn btn-primary w-100 text-uppercase" type="submit">Sign in</button>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </Formik>
                    )}

                    {successful && (
                        <div>
                            <div className="row mb-2">
                                <div className="col col-9 mb-3 d-flex justify-content-start align-items-center gap-3">
                                    <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                    <div className="form-group"><input type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-12 mb-4 text-start"><a className="l-color l-size" href="#">Resend code</a></div>
                                <div className="col col-12 mb-4 text-start">
                                    <p className="mb-0 t-h text-black-50">By continuing, you agree that we create an account for you (unless already created), and accepted our&nbsp;<a className="text-black-50" href="#">Terms and Conditions</a>&nbsp;and&nbsp;<a className="text-black-50" href="#">Privacy Policy</a>.</p>
                                </div>
                                <div className="col col-12 text-start"><button className="btn btn-primary text-uppercase px-4" type="button">Continue</button></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;