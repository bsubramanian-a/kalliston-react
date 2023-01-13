import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import DotMenu from '../../assets/img/dotIcon.svg'
import { useGetPackagesQuery } from '../../services/package.service';
import { useCreatePackageMutation } from '../../services/package.service';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function CurrentPackage() {
    const { data: packages = [], isFetching, isError, error, isLoading }:any = useGetPackagesQuery(1);
    const [ createPackage ]:any = useCreatePackageMutation();
    const [basic, setBasic] = useState<any>();
    const [premium, setPremium] = useState<any>();
    const [elite, setElite] = useState<any>();
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .required("This field is required!"),
        long_description: Yup.string()
            .required("This field is required!"),
        amount: Yup.string()
            .required("This field is required!")
    });

    useEffect(() => {
       setBasic(packages.find((cpackage:any) => cpackage.package_type == 'basic'));
       setPremium(packages.find((cpackage:any) => cpackage.package_type == 'premium'));
       setElite(packages.find((cpackage:any) => cpackage.package_type == 'elite'));
    }, [packages])

    const handleSubmit = async(formValue: any) => {
        console.log("formvalue", formValue);
        setErrMsg("");
        let res = await createPackage(formValue);
        console.log("create res", res);

        if(res?.data?.status == 200){
            setSuccessMsg(res?.data?.message);
        }else{
            setErrMsg(res?.data?.message);
        }
    };

    // if(isFetching) return <div>Loading...</div>

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid text-start vh-100">
                            <div>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to={"/coach/package"} className="text-decoration-none"><span className="t-color text-decoration-none">Packages</span></Link></li>
                                    <li className="breadcrumb-item"><Link to={"/coach/current-package"} className="text-decoration-none"><span className="f-color">Current Packages</span></Link></li>
                                </ol>
                                <h1 className="h-size mb-2 f-color fw-normal mt-1">Current Packages</h1>
                            </div>
                            {successMsg &&
                                <div className="row justify-content-end mb-4">
                                    <div className="col col-12 col-md-8">
                                        <div className='alert alert-success'>
                                            {successMsg}
                                        </div>
                                    </div>
                                </div>
                            }
                            {errMsg &&
                                <div className="row justify-content-end mb-4">
                                    <div className="col col-12 col-md-8">
                                        <div className='alert alert-success'>
                                            {errMsg}
                                        </div>
                                    </div>
                                </div>
                            }
                            <div className="row justify-content-end mb-4">
                                <div className="col col-12 col-md-8">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{textTransform: 'capitalize'}} data-bs-target={`#${basic?.package_type}`} aria-expanded="true" aria-controls={`${basic?.package_type}`}>
                                                <div className="flex">
                                                    <h1 className="f-color mb-1 fw-regular l-size">Basic</h1>
                                                    <p className="text-black-50 mb-0 fw-regular expire-f">{basic?.title}</p>
                                                </div>
                                            </button>
                                            </h2>
                                            <div id={`${basic?.package_type}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <Formik
                                                        initialValues={{
                                                            title: basic?.title || "",
                                                            long_description: basic?.long_description || "",
                                                            currency: basic?.currency || "usd",
                                                            amount: basic?.amount || "",
                                                            package_type: basic?.package_type || "basic",
                                                        }}
                                                        validationSchema={validationSchema}
                                                        onSubmit={handleSubmit}
                                                        enableReinitialize 
                                                    >
                                                        <Form>
                                                            <div className="row">
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Package name</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" name="title" style={{outline: "none"}} /></div>
                                                                    <ErrorMessage
                                                                        name="title"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 col-md-4 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Currency</label>
                                                                        <Field component="select" className="fw-normal border-0 t-h f-color d-btn w-100" name='currency' aria-label="Default select example" defaultValue="usd">
                                                                            <option value="usd">$</option>
                                                                            <option value="gbp" className='p-2'>£</option>
                                                                            <option value="euro">€</option>
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-12 col-md-8 mb-3">
                                                                    <div className="form-group position-relative d-flex justify-content-center align-items-center gap-5">
                                                                        <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Amount</label>
                                                                        <Field type="number" className="input-lg w-100 fw-normal t-color l-size" name='amount' style={{outline: "none"}} />
                                                                        <span className='t-h text-black-50 fw-normal'>Per&nbsp;month</span>
                                                                    </div>
                                                                    <ErrorMessage
                                                                        name="amount"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 mb-3 mb-md-0">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Description</label><Field component="textarea" className="input-lg w-100 fw-normal t-color l-size border-0" name='long_description' style={{height: "200px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </Field></div>
                                                                    <ErrorMessage
                                                                        name="long_description"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>

                                                                <div className="d-flex justify-content-end align-items-center gap-3 me-4 mt-4 pb-5">
                                                                    {!isLoading && <button
                                                                        className="btn btn-primary text-uppercase px-3"
                                                                        type="submit"
                                                                    >
                                                                        Save changes
                                                                    </button>}
                                                                    {isLoading && (
                                                                            <div>Updating packages...</div>
                                                                    )}
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
                            <div className="row justify-content-end mb-4">
                                <div className="col col-12 col-md-8">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{textTransform: 'capitalize'}} data-bs-target={`#${premium?.package_type}`} aria-expanded="true" aria-controls={`${premium?.package_type}`}>
                                                <div className="flex">
                                                    <h1 className="f-color mb-1 fw-regular l-size">Premium</h1>
                                                    <p className="text-black-50 mb-0 fw-regular expire-f">{premium?.title}</p>
                                                </div>
                                            </button>
                                            </h2>
                                            <div id={`${premium?.package_type}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <Formik
                                                        initialValues={{
                                                            title: premium?.title || "",
                                                            long_description: premium?.long_description || "",
                                                            currency: premium?.currency || "usd",
                                                            amount: premium?.amount || "",
                                                            package_type: premium?.package_type || "premium",
                                                        }}
                                                        validationSchema={validationSchema}
                                                        onSubmit={handleSubmit}
                                                        enableReinitialize
                                                    >
                                                        <Form>
                                                            <div className="row">
                                                                <Field type="hidden" name="package_type" value=""/>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Package name</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" name="title" style={{outline: "none"}} /></div>
                                                                    <ErrorMessage
                                                                        name="title"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 col-md-4 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Currency</label>
                                                                        <Field component="select" defaultValue="usd" className="fw-normal border-0 t-h f-color d-btn w-100" name='currency' aria-label="Default select example">
                                                                            <option value="usd">$</option>
                                                                            <option value="gbp" className='p-2'>£</option>
                                                                            <option value="euro">€</option>
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-12 col-md-8 mb-3">
                                                                    <div className="form-group position-relative d-flex justify-content-center align-items-center gap-5">
                                                                        <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Amount</label>
                                                                        <Field type="number" className="input-lg w-100 fw-normal t-color l-size" name='amount' style={{outline: "none"}} />
                                                                        <span className='t-h text-black-50 fw-normal'>Per&nbsp;month</span>
                                                                    </div>
                                                                    <ErrorMessage
                                                                        name="amount"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 mb-3 mb-md-0">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Description</label><Field component="textarea" className="input-lg w-100 fw-normal t-color l-size border-0" name='long_description' style={{height: "200px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </Field></div>
                                                                    <ErrorMessage
                                                                        name="long_description"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>

                                                                <div className="d-flex justify-content-end align-items-center gap-3 me-4 mt-4 pb-5">
                                                                    {!isLoading && <button
                                                                        className="btn btn-primary text-uppercase px-3"
                                                                        type="submit"
                                                                    >
                                                                        Save changes
                                                                    </button>}
                                                                    {isLoading && (
                                                                            <div>Updating packages...</div>
                                                                    )}
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
                            <div className="row justify-content-end mb-4">
                                <div className="col col-12 col-md-8">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{textTransform: 'capitalize'}} data-bs-target={`#${elite?.package_type}`} aria-expanded="true" aria-controls={`${elite?.package_type}`}>
                                                <div className="flex">
                                                    <h1 className="f-color mb-1 fw-regular l-size">Elite</h1>
                                                    <p className="text-black-50 mb-0 fw-regular expire-f">{elite?.title}</p>
                                                </div>
                                            </button>
                                            </h2>
                                            <div id={`${elite?.package_type}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <Formik
                                                        initialValues={{
                                                            title: elite?.title || "",
                                                            long_description: elite?.long_description || "",
                                                            currency: elite?.currency || "usd",
                                                            amount: elite?.amount || "",
                                                            package_type: elite?.package_type || "elite",
                                                        }}
                                                        validationSchema={validationSchema}
                                                        onSubmit={handleSubmit}
                                                        enableReinitialize 
                                                    >
                                                        <Form>
                                                            <div className="row">
                                                                <Field type="hidden" name="package_type" value=""/>
                                                                <div className="col col-12 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Package name</label><Field type="text" className="input-lg w-100 fw-normal t-color l-size" name="title" style={{outline: "none"}} /></div>
                                                                    <ErrorMessage
                                                                        name="title"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 col-md-4 mb-3">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Currency</label>
                                                                        <Field component="select" className="fw-normal border-0 t-h f-color d-btn w-100" name='currency' aria-label="Default select example">
                                                                            <option value="usd">$</option>
                                                                            <option value="gbp" className='p-2'>£</option>
                                                                            <option value="euro">€</option>
                                                                        </Field>
                                                                    </div>
                                                                </div>
                                                                <div className="col col-12 col-md-8 mb-3">
                                                                    <div className="form-group position-relative d-flex justify-content-center align-items-center gap-5">
                                                                        <label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Amount</label>
                                                                        <Field type="number" className="input-lg w-100 fw-normal t-color l-size" name='amount' style={{outline: "none"}} />
                                                                        <span className='t-h text-black-50 fw-normal'>Per&nbsp;month</span>
                                                                    </div>
                                                                    <ErrorMessage
                                                                        name="amount"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>
                                                                <div className="col col-12 mb-3 mb-md-0">
                                                                    <div className="form-group position-relative"><label className="form-label px-1 d-flex justify-content-center align-items-center t-color t-h">Description</label><Field component="textarea" className="input-lg w-100 fw-normal t-color l-size border-0" name='long_description' style={{height: "200px"}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </Field></div>
                                                                    <ErrorMessage
                                                                        name="long_description"
                                                                        component="div"
                                                                        className="alert alert-danger small border-0 py-1 mb-0"
                                                                    />
                                                                </div>

                                                                <div className="d-flex justify-content-end align-items-center gap-3 me-4 mt-4 pb-5">
                                                                    {!isLoading && <button
                                                                        className="btn btn-primary text-uppercase px-3"
                                                                        type="submit"
                                                                    >
                                                                        Save changes
                                                                    </button>}
                                                                    {isLoading && (
                                                                            <div>Updating packages...</div>
                                                                    )}
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
                    </div>
                </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></a>
            </div>
        </div>
    );
}

export default CurrentPackage;