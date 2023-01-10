import React, { useContext, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../../assets/img/avatars/avatar1.jpeg'
import { coachUpdateProfile, coachUpdateProfilePic } from '../../../slices/auth';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function DetailsTab() {

    const { coach: currentUser } = useSelector((state: any) => state.auth);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch<any>();
    const [errormessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const hiddenFileInput = useRef<any>(null);

    console.log("current user in details tab", currentUser);

    const initialValues = {
        email: currentUser?.email || "",
        firstname: currentUser?.firstname || "",
        lastname: currentUser?.lastname || ""
    };
    // const validationSchema = Yup.object().shape({
    //     email: Yup.string()
    //         .email("This is not a valid email.")
    //         .required("This field is required!")
    // });

    const validationSchema = Yup.object().shape({});


    const handleUpdate = (formValue: any) => {
        const { email, firstname, lastname } = formValue;
        setIsLoading(true);
        setErrorMessage("");
        setSuccessMessage("");

        dispatch(coachUpdateProfile({ email, firstname, lastname }))
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
            .catch((error: any) => {
                console.log("error", error);
                setIsLoading(false);
                setErrorMessage(error.message);
            });
    };

    const handleChange = async (event: any) => {
        setIsLoading(true);
        const fileUploaded = event.target.files[0];

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
            .catch((error: any) => {
                console.log("error", error);
                setIsLoading(false);
                setErrorMessage(error.data.message);
            });
    };

    const handleClick = (event: any) => {
        if (hiddenFileInput.current) hiddenFileInput.current.click();
    };

    return (
        <div className="tab-pane active" role="tabpanel" id="tab-1">
            <div className="card card-s">
                <div className="card-body">
                    <div className="pt-1 pb-2 b-c">
                        <h1 className="f-color fw-regular f-h">Profile Details</h1>
                    </div>
                    <div className="row my-4">

                        <div className="col col-12">
                            <div className="mb-5">
                                <div className="row mb-5">
                                    <div className="col col-12">
                                        <h1 className="f-color mb-4 big-font">Avatar</h1>
                                        <div className="d-flex justify-content-start align-items-center gap-4"><img className="img-profile pro-size rounded-circle" src={currentUser?.avatar || Avatar} /><button className="btn btn-primary text-uppercase btn-profile px-3 c-btn" type="button" onClick={handleClick}>Change</button>
                                            <input
                                                type="file"
                                                ref={hiddenFileInput}
                                                onChange={handleChange}
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleUpdate}
                            >
                                <Form>
                                    <div className="mb-5">
                                        <div className="row mb-5">
                                            <div className="col col-12 mb-4">
                                                <h1 className="f-color mb-0 big-font">Details</h1>
                                                {errormessage && (
                                                    <div className="alert alert-danger small border-0 py-1 mb-0 text-center my-2 mb-4">{errormessage}</div>
                                                )}
                                                {successMessage && (
                                                    <div className="alert alert-success small border-0 py-1 mb-0 text-center my-2 mb-4">{successMessage}</div>
                                                )}
                                            </div>
                                            <div className="col col-12 col-md-6 mb-3">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">First name</label><Field type="text" name="firstname" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                            </div>
                                            <div className="col col-12 col-md-6 mb-3">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Last name</label><Field type="text" name="lastname" className="input-lg w-100 fw-normal t-color l-size" style={{ outline: "none" }} /></div>
                                            </div>
                                            <div className="col col-12 mb-3">
                                                <div className="form-group position-relative py-2">
                                                    <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Category</label>
                                                    <div className="dropdown">
                                                        <Field className="btn btn-dropdown dropdown-toggle w-100 p-0 f-color d-flex justify-content-between text-start align-items-center m-drp" name="color" component="select">
                                                            <option value="red">General Trainer</option>
                                                            <option value="green">Second Item</option>
                                                            <option value="blue">Third Item</option>
                                                        </Field>
                                                    </div>                                                    
                                                    {/* <div className="dropdown">
                                                        <button className="btn btn-primary dropdown-toggle w-100 p-0 f-color d-flex justify-content-between align-items-center m-drp" aria-expanded="false" data-bs-toggle="dropdown" type="button">Select Category</button>
                                                        <div className="dropdown-menu w-100">
                                                            <a className="dropdown-item" href="#">General Trainer</a>
                                                            <a className="dropdown-item" href="#">Second Item</a>
                                                            <a className="dropdown-item" href="#">Third Item</a>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="col col-12 mb-3 mb-md-0">
                                                <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Bio</label><textarea className="input-lg w-100 fw-normal t-color l-size border-0" style={{ height: "76px" }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</textarea></div>
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
                                            <div>Updating personal details...</div>
                                        )}
                                        <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailsTab;