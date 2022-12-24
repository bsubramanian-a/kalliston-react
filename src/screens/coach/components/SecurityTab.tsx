import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { changepassword } from '../../../slices/auth';
import * as Yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";

function SecurityTab() {

    const { coach: currentUser } = useSelector((state: any) => state.auth);
    const [errormessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    // const [initialValues, setInitialValues] = useState({oldpassword: "", newpassword:""});
  
    const initialValues = {
      oldpassword: "",
      newpassword:""
    };
  
    const validationSchema = Yup.object().shape({
        oldpassword: Yup.string().required("This field is required!"),
        newpassword: Yup.string().required("This field is required!")
    });

    const dispatch = useDispatch<any>();
  
    const handleChangePassword = (formValue: any) => {
      const { oldpassword, newpassword } = formValue;

      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      dispatch(changepassword({ email : currentUser?.email, currentpassword:oldpassword, newpassword}))
          .unwrap()
          .then((res: any) => {
            console.log("response coming in", res);
            if (res.status == 401) {
                setIsLoading(false);
                setErrorMessage(res.message);
            }
            if (res.status == 200) {
                setIsLoading(false);
                setSuccessMessage(res.message);
                // setInitialValues({oldpassword: "", newpassword:""})
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
        <div className="tab-pane" role="tabpanel" id="tab-3">
            <div className="card card-s">
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col">
                            <h1 className="f-color l-size mb-4">
                                Change Password
                            </h1>
                            {errormessage && (
                                <div className="alert alert-danger small border-0 py-1 mb-0 text-center my-2 mb-4">{errormessage}</div>
                            )}
                            {successMessage && (
                                <div className="alert alert-success small border-0 py-1 mb-0 text-center my-2 mb-4">{successMessage}</div>
                            )}
                            <Formik initialValues={initialValues} onSubmit={handleChangePassword} validationSchema={validationSchema}>
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
                                                     <ErrorMessage
                                                        name="oldpassword"
                                                        component="div"
                                                        className="alert alert-danger small border-0 py-1 mb-0"
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
                                                     <ErrorMessage
                                                        name="newpassword"
                                                        component="div"
                                                        className="alert alert-danger small border-0 py-1 mb-0"
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
                                        {!isLoading && <button
                                            className="btn btn-primary text-uppercase px-3"
                                            type="submit"
                                        >
                                            Save changes
                                        </button>}
                                        {isLoading && (
                                                <div>Updating New Password...</div>
                                        )}
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