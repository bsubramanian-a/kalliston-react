import React, { useContext, useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import LogoMain from "../../assets/img/logo.svg";

import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { forget, forgetotp } from "../../slices/auth";
import OtpInput from "react18-input-otp";

function ForgotPassword() {
  let navigate = useNavigate();

  const [successful, setSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errormessage, setErrorMessage] = useState();
  const [email, setEmail] = useState();
  const [isForget, setIsForget] = useState(true);
  const [isOTP, setIsOTP] = useState(false);
  const [otpcode, setOtpCode] = useState("");

  const dispatch = useDispatch<any>();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
  });

  const initialCode = {
    code1: "",
    code2: "",
    code3: "",
    code4: "",
    code5: "",
    code6: "",
  };

  const handleChange = (enteredOtp: any) => {
    setOtpCode(enteredOtp);
  };

  const handleForget = (formValue: any) => {
    const { email } = formValue;
    setEmail(email);
    setSuccessful(false);
    setIsLoading(true);
    setIsForget(true);
    setIsOTP(false);

    dispatch(forget(email))
      .unwrap()
      .then((res: any) => {
        console.log("response coming in", res);
        if (res.status == 401) {
          setIsLoading(false);
          setSuccessful(false);
          setErrorMessage(res.data.status);
          setIsError(true);
          setIsForget(true);
          setIsOTP(false);
        }
        if (res.status == "success") {
          setIsLoading(false);
          setSuccessful(true);
          setIsError(false);
          setIsForget(false);
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
    setIsForget(false);
    setIsOTP(true);

    dispatch(forgetotp({ email, otp: otpcode }))
      .unwrap()
      .then((res: any) => {
        console.log("otp response coming in", res);
        if (res.status == 401) {
          setIsLoading(false);
          setSuccessful(true);
          setErrorMessage(res.data.status);
          setIsError(true);
          setIsForget(false);
          setIsOTP(true);
        }
        if (res == "success") {
          setIsLoading(false);
          navigate("/coach/login");
          window.location.reload();
          //setSuccessful(true);
        }
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div>
      <div className="vh-100">
        <div className="row mx-0">
          <div className="col col-12 col-lg-6 main-limg"></div>
          <div className="col col-12 col-lg-6 d-flex justify-content-center alert">
            <div className="container my-auto mx-md-5">
              <div className="row mb-4">
                <div className="col col-12 mb-4 text-start">
                  <img src={LogoMain} />
                </div>
                {!successful && isForget && (
                  <div className="col col-12">
                    <p className="f-color f-h mb-0 text-start">
                      Recover your password
                    </p>
                    <p className="text-black-50 l-size text-start">
                      Please type in your email attached to your account
                    </p>
                  </div>
                )}

                {successful && !isForget && (
                  <div className="col col-12">
                    <div>
                      <p className="f-color f-h mb-0 text-start">
                        Enter your security code
                      </p>
                    </div>
                    <p className="text-black-50 l-size mb-0 text-start">
                      Please type in the code we sent to {email}
                    </p>
                  </div>
                )}
              </div>
              {isError && (
                <div className="alert alert-danger"> {errormessage} </div>
              )}
              {!successful && isForget && (
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleForget}
                >
                  <Form>
                    <div className="row mb-2">
                      <div className="col col-12 mb-3">
                        <div className="form-group position-relative">
                          <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                            Email address
                          </label>
                          <Field
                            type="text"
                            className="input-lg w-100 fw-normal t-color l-size form-control"
                            name="email"
                            style={{ outline: "none" }}
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="alert alert-danger"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-12 text-start">
                        {isLoading && (
                          <div>Sending security code to your email...</div>
                        )}
                        {!isLoading && (
                          <button
                            className="btn btn-primary px-4 text-uppercase"
                            type="submit"
                          >
                            Send
                          </button>
                        )}
                      </div>
                    </div>
                  </Form>
                </Formik>
              )}
              {successful && isOTP && (
                <Formik initialValues={initialCode} onSubmit={handleCode}>
                  <Form>
                    <div className="row mb-2">
                      <div className="col col-9 mb-3 d-flex justify-content-start align-items-center gap-3">
                        <OtpInput
                          value={otpcode}
                          onChange={handleChange}
                          numInputs={6}
                          separator={<span>-</span>}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col col-12 mb-5 text-start">
                        <a className="l-color l-size" href="#">
                          Resend code
                        </a>
                      </div>
                      <div className="col col-12 text-start">
                        <button
                          className="btn btn-primary text-uppercase px-4"
                          type="submit"
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </Form>
                </Formik>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
