import React, { useContext, useState, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LogoMain from '../../assets/img/logo.svg';

import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login, otp } from '../../slices/auth';
import OtpInput from 'react18-input-otp';

function Login() {
    let navigate = useNavigate();

    const { isLoggedIn } = useSelector((state: any) => state.auth);

    const [successful, setSuccessful] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState();
    const [isError, setIsError] = useState(false);
    const [errormessage, setErrorMessage] = useState();
    const [isLogin, setIsLogin] = useState(true);
    const [isOTP, setIsOTP] = useState(false);
    const [otpcode, setOtpCode] = useState('');

    const dispatch = useDispatch<any>();

    const initialValues = {
        email: "",
        password: ""
    };
    const initialCode = {
        code1: "",
        code2: "",
        code3: "",
        code4: "",
        code5: "",
        code6: "",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .required("This field is required!")
    });


    const handleChange = (enteredOtp: any) => {
        setOtpCode(enteredOtp);
    };

    const handleLogin = (formValue: any) => {
        const { email, password } = formValue;
        // setIsLoading(false);
        // setSuccessful(true);
        // setIsLogin(false);
        // setIsOTP(true);
        setEmail(email);
        setIsLogin(true);
        setIsOTP(false);

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
                    setIsLogin(true);
                    setIsOTP(false);
                }
                if (res.status == "success") {
                    setIsLoading(false);
                    setSuccessful(true);
                    setIsLogin(false);
                    setIsOTP(true);
                }
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

    const handleCode = (formValue: any) => {
        // const { code1, code2, code3, code4, code5, code6 } = formValue;
        // let finalCode = parseInt(code1 + code2 + code3 + code4 + code5 + code6);
        // console.log("final code", finalCode);
        setIsLogin(false);
        setIsOTP(true);

        dispatch(otp({ email, otp: otpcode }))
            .unwrap()
            .then((res: any) => {
                console.log("otp response coming in", res);
                if (res.status == 401) {
                    setIsLoading(false);
                    setSuccessful(true);
                    setErrorMessage(res.data.status);
                    setIsError(true);
                    setIsLogin(false);
                    setIsOTP(true);
                }
                if (res.status == "success") {
                    setIsLoading(false);
                    navigate("/coach/dashboard");
                    window.location.reload();
                    //setSuccessful(true);                    
                }
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

    console.log("isLoggedIn", isLoggedIn);

    if (isLoggedIn) {
        return <Navigate to="/coach/dashboard" />;
    }

    return (
        <div className="row vh-100 mx-0">
            <div className="col col-12 col-lg-6 main-limg"></div>
            <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
                <div className="container my-auto mx-md-5">
                    <div className="row mb-4">
                        <div className="col col-12 mb-4 text-start"><img src={LogoMain} /></div>
                        {!successful && isLogin && (
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
                    {isError && (
                        <div className="alert alert-danger small border-0 py-1 mb-0"> {errormessage} </div>
                    )}
                    {!successful && isLogin && (
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form>

                                <div>
                                    <div className="row mb-2">
                                        <div className="col col-12 mb-3">
                                            <div className="form-group position-relative">
                                                <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Email address</label>
                                                <Field type="text" name="email" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                                <ErrorMessage
                                                    name="email"
                                                    component="div"
                                                    className="alert alert-danger small border-0 py-1 mb-0"
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
                                                    className="alert alert-danger small border-0 py-1 mb-0"
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

                    {successful && isOTP && (
                        <div>
                            <Formik
                                initialValues={initialCode}
                                onSubmit={handleCode}
                            >

                                <Form>
                                    <div className="row mb-2">
                                        <div className="col col-10 mb-3">
                                            <OtpInput value={otpcode} onChange={handleChange} numInputs={6} separator={false} inputStyle={{ padding: "16px 12px", border: "1px solid #C2C2C2", borderRadius: "4px", width: "100%", fontWeight: "400", fontSize: "16px", color: "#656565 !important" }} containerStyle={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }} />
                                            {/* <div className="form-group">
                                                <Field name="code1" type="number" maxLength="1" min={1} max={9} className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                            </div>
                                            <div className="form-group">
                                                <Field name="code2" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                            </div>
                                            <div className="form-group">
                                                <Field name="code3" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                            </div>
                                            <div className="form-group">
                                                <Field name="code4" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                            </div>
                                            <div className="form-group">
                                                <Field name="code5" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                            </div>
                                            <div className="form-group">
                                                <Field name="code6" type="text" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} />
                                            </div> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col col-12 mb-4 text-start"><a className="l-color l-size" href="#">Resend code</a></div>
                                        <div className="col col-12 mb-4 text-start">
                                            <p className="mb-0 t-h text-black-50">By continuing, you agree that we create an account for you (unless already created), and accepted our&nbsp;<a className="text-black-50" href="#">Terms and Conditions</a>&nbsp;and&nbsp;<a className="text-black-50" href="#">Privacy Policy</a>.</p>
                                        </div>
                                        <div className="col col-12 text-start"><button className="btn btn-primary text-uppercase px-4" type="submit">Continue</button></div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;