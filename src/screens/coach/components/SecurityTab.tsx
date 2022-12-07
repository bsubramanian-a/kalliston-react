import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { changepassword } from '../../../slices/auth';
import * as Yup from "yup";

function SecurityTab() {

    const { coach: currentUser } = useSelector((state: any) => state.auth);
    console.log("currentUser", currentUser);
  
    const initialValues = {
      oldpassword: "",
      newpassword:""
    };
  
    const dispatch = useDispatch<any>();
  
    const handleChangePassword = (formValue: any) => {
      const { oldpassword, newpassword } = formValue;

      console.log("formvalue",formValue);
      
  
      dispatch(changepassword({ email : currentUser?.email, currentpassword:oldpassword, newpassword}))
          .unwrap()
          .then((res: any) => {
              console.log("response coming in", res);
              if (res.status == 401) {
                  
              }
              if (res.status == "success") {
                  
              }
          })
          .catch(() => {
              //setSuccessful(false);
          });
  };
  

    return (
        <div className="tab-pane" role="tabpanel" id="tab-3">
            <div className="card card-s">
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col">
                            <h1 className="f-color l-size mb-4">
                                Change Password
                            </h1>
                            <Formik initialValues={initialValues} onSubmit={handleChangePassword}>
                                <Form>
                                    <div className="mb-5">
                                        <div className="row mb-5">
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                        Current Password
                                                    </label>
                                                    <Field
                                                        name="oldpassword"
                                                        type="text"
                                                        className="input-lg w-100 fw-normal t-color l-size"
                                                        style={{ outline: "none" }}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col col-12">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                        New Password
                                                    </label>
                                                    <Field
                                                        name="newpassword"
                                                        type="text"
                                                        className="input-lg w-100 fw-normal t-color l-size"
                                                        style={{ outline: "none" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col mb-5">
                                                <h1 className="f-color l-size mb-1">
                                                    Two-Factor Authentication
                                                </h1>
                                                <p className="mb-4">
                                                    Enabling this will provide an extra
                                                    layer of security for your account.
                                                    When logging in, we will ask for a
                                                    special authentication code from
                                                    your device.
                                                </p>
                                                <button
                                                    className="btn btn-primary text-uppercase btn-profile px-3"
                                                    type="submit"
                                                    style={{
                                                        height: "36px",
                                                        fontSize: "14px",
                                                    }}
                                                >
                                                    Enable Two-factor authentication
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-start align-items-center gap-3">
                                        <button
                                            className="btn btn-primary text-uppercase px-3"
                                            type="submit"
                                        >
                                            Save changes
                                        </button>
                                        <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase">
                                            <span className="l-size">Cancel</span>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecurityTab;