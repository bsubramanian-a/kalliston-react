import React, { useContext, useState, useEffect, useRef } from 'react';
import Avatar from "../../../assets/img/avatar.webp";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { coachUpdateProfile, coachUpdateProfilePic } from '../../../slices/auth';
import { useGetCoachQuery } from '../../../services/coach-service';
import { useUpdateCoachMutation } from '../../../services/coach-service';
import Modal from './Modal';

function AccountTab() {
    // const { coach: currentUser } = useSelector((state:any) => state.auth);
    const { data: currentUser = [], isFetching, isError, error }:any = useGetCoachQuery(1);
    const [ coachUpdate ]:any = useUpdateCoachMutation();
    // console.log("coach", coach);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<any>();
    const [errormessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const hiddenFileInput = useRef<any>(null);

    if(isFetching) return <div>Loading...</div>
      
    const initialValues = {
        email: currentUser?.email || "",
        firstname: currentUser?.firstname || "",
        lastname: currentUser?.lastname || ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!")
    });

    const handleUpdate = async(formValue: any) => {
        const { email, firstname, lastname } = formValue;
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        const res = await coachUpdate({ email, firstname, lastname });
        console.log("res", res);

        if(res?.data?.status == 200){
            setSuccessMessage(res?.data?.message);
        }else{
            setErrorMessage(res?.data?.message);
        }
        setIsLoading(false);
    };

    const handleChange = async(event:any) => {
        setIsLoading(true);
        const fileUploaded = event.target.files[0];
        console.log("account image", fileUploaded);

        setErrorMessage("");
        setSuccessMessage("");

        dispatch(coachUpdateProfilePic(fileUploaded))
        .unwrap()
        .then((res: any) => {
            console.log("image upload res", res);
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

    const handleClick = (event:any) => {
        if(hiddenFileInput.current) hiddenFileInput.current.click();
    };

    console.log("current user from account tab");
    console.log(currentUser);
  
    return (
        <div className="tab-pane active" role="tabpanel" id="tab-1">
            <div className="card card-s">
                <Modal/>
                <div className="card-body">
                    <div className="row mb-4">
                        <div className="col">
                            <h1 className="f-color l-size mb-4">Avatar</h1>
                            <div className="d-flex justify-content-start align-items-center gap-4">
                                <img
                                    className="img-profile rounded-circle profile_pic"
                                    src={currentUser?.avatar || Avatar}
                                />
                               <button className="btn btn-primary bCancel text-uppercase px-3 fw-medium expire-f" type="button" data-bs-toggle="modal" data-bs-target="#modal-1">CHANGE</button>
                            </div>
                        </div>
                     
                        <input
                            type="file"
                            ref={hiddenFileInput}
                            onChange={handleChange}
                            style={{display: 'none'}}
                            accept="image/*"
                        />
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleUpdate}
                    >
                        <Form>
                            <div className="row mb-4">
                                <div className="col">
                                    <h1 className="f-color l-size mb-4">
                                        Account Info
                                    </h1>
                                    {errormessage && (
                                        <div className="alert alert-danger small border-0 py-1 mb-0 text-center my-2 mb-4">{errormessage}</div>
                                    )}
                                    {successMessage && (
                                        <div className="alert alert-success small border-0 py-1 mb-0 text-center my-2 mb-4">{successMessage}</div>
                                    )}
                                    <div className="mb-3">
                                        <div className="row">
                                            <div className="col col-12 col-md-6 mb-3">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                        First name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="input-lg w-100 fw-normal t-color l-size"
                                                        style={{ outline: "none" }}
                                                        name="firstname"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col col-12 col-md-6 mb-3">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                        Last name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="input-lg w-100 fw-normal t-color l-size"
                                                        style={{ outline: "none" }}
                                                        name="lastname"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">
                                                        Email address
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="input-lg w-100 fw-normal t-color l-size"
                                                        style={{ outline: "none" }}
                                                        name="email"
                                                    />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                    />
                                                </div>
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
                                                <div>Updating account settings...</div>
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

export default AccountTab;