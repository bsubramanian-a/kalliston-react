import React, { useContext, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { coachUpdateNotification } from '../../../slices/auth';
import { Formik, Field, Form, ErrorMessage } from "formik";
import ClipLoader from "react-spinners/ClipLoader";

function NotificationTab() {
    const { coach: currentUser } = useSelector((state:any) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<any>();
    const [errormessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const initialValues = {
        email_notification: currentUser?.email_notification || false,
        otp_required: currentUser?.otp_required || false,
        client_request_notification: currentUser?.client_request_notification || false,
        message_from_client: currentUser?.message_from_client || false
    };

    const handleUpdate = (formValue: any) => {
        const { email_notification, otp_required, client_request_notification, message_from_client } = formValue;
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        dispatch(coachUpdateNotification({ email_notification, otp_required, client_request_notification, message_from_client }))
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
        <div className="tab-pane" role="tabpanel" id="tab-2">
            <div className="card card-s">
                <div className="card-body">
                    {errormessage && (
                        <div className="alert alert-danger small border-0 py-1 mb-0"> {errormessage} </div>
                    )}
                    {successMessage && (
                        <div className="alert alert-success small border-0 py-1 mb-0 text-center my-2 mb-4">{successMessage}</div>
                    )}
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleUpdate}
                    >
                        <Form>
                            <div className="row mb-4">
                                <div className="col col-12 mb-5">
                                    <h1 className="f-h f-color fw-normal mb-4">
                                        Privacy
                                    </h1>
                                    <div className="mb-3">
                                        <div className="mb-1">
                                            <label className="switch">
                                                <Field type="checkbox" name="email_notification"/>
                                                <span className="slider round"></span>
                                            </label>
                                            <span className="f-color l-size">
                                                Email notification
                                            </span>
                                        </div>
                                        <p className="text-black-50 t-h">
                                            The point of using Lorem Ipsum is that it
                                            has a more-or-less normal distribution of
                                            letters.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <label className="switch">
                                                <Field type="checkbox" name="otp_required" />
                                                <span className="slider round"></span>
                                            </label>
                                            <span className="f-color l-size">
                                                New logins
                                            </span>
                                        </div>
                                        <p className="text-black-50 t-h">
                                            The point of using Lorem Ipsum is that it
                                            has a more-or-less normal distribution of
                                            letters.
                                        </p>
                                    </div>
                                </div>
                                <div className="col col-12 mb-5">
                                    <h1 className="f-h f-color fw-normal mb-4">
                                        Clients
                                    </h1>
                                    <div className="mb-3">
                                        <div className="mb-1">
                                            <label className="switch">
                                                <Field type="checkbox" name="client_request_notification"/>
                                                <span className="slider round"></span>
                                            </label>
                                            <span className="f-color l-size">
                                                New request
                                            </span>
                                        </div>
                                        <p className="text-black-50 t-h">
                                            The point of using Lorem Ipsum is that it
                                            has a more-or-less normal distribution of
                                            letters.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="mb-1">
                                            <label className="switch">
                                                <Field type="checkbox" name="message_from_client"/>
                                                <span className="slider round"></span>
                                            </label>
                                            <span className="f-color l-size">
                                                Messages
                                            </span>
                                        </div>
                                        <p className="text-black-50 t-h">
                                            The point of using Lorem Ipsum is that it
                                            has a more-or-less normal distribution of
                                            letters.
                                        </p>
                                    </div>
                                </div>
                                <div className="col pt-5">
                                    <div className="d-flex justify-content-start align-items-center gap-3">
                                        {!isLoading && <button
                                            className="btn btn-primary text-uppercase px-3"
                                            type="submit"
                                        >
                                            Save changes
                                        </button>}
                                        {isLoading && (
                                                <div>Updating notification settings...</div>
                                        )}
                                        {/* <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase">
                                            <span className="l-size">Cancel</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default NotificationTab;