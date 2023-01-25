import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Publish from '../../assets/img/package-img/publish.svg'
import Preview from '../../assets/img/package-img/preview.svg'
import Modify from '../../assets/img/package-img/modify.svg'
import User from '../../assets/img/package-img/user.svg'
import LeftMenu from './components/LeftMenu';
import TopNav from './components/TopNav';
import { useSelector } from 'react-redux';
import { useGetPackagesQuery } from '../../services/package.service';
import { useGetCoachQuery, useUpdateCoachMutation } from '../../services/coach-service';
import { useGetMediasQuery } from '../../services/media-service';

function Package() {
    const { data: packages = [], isFetching, isError, error }:any = useGetPackagesQuery(1);
    const { data: currentUser = []}:any = useGetCoachQuery(1);
    const { data: medias = [], refetch }:any = useGetMediasQuery(1);
    const [ coachUpdate ]:any = useUpdateCoachMutation();
    const [basic, setBasic] = useState<any>();
    const [premium, setPremium] = useState<any>();
    const [elite, setElite] = useState<any>();
    console.log("currentUser", currentUser);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setBasic(packages.find((cpackage:any) => cpackage.package_type == 'basic'));
        setPremium(packages.find((cpackage:any) => cpackage.package_type == 'premium'));
        setElite(packages.find((cpackage:any) => cpackage.package_type == 'elite'));
     }, [packages]);

    const changeStatus = async() => {
        setIsLoading(true);
        const package_status = currentUser?.package_status == 'draft' ? 'published' : 'draft';
        const res = await coachUpdate({ package_status });
        console.log("res status update", res);
        setIsLoading(false);
    };

    return (
        <div id="page-top">
            <div id="wrapper" className="d-flex">
                <LeftMenu />
                <div className="d-flex flex-column" id="content-wrapper">
                    <div id="content">
                        <TopNav />
                        <div className="container-fluid vh-100 text-start">
                            <div className="row mb-4 gap-3 gap-lg-0 align-items-lg-end">
                                <div className="col col-12 col-lg-6">
                                    <div><span className="text-black-50 l-size">Marketplace</span>
                                        <h1 className="h-size f-color fw-normal mt-1 mb-0">Marketplace</h1>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-6">
                                    <div className="d-flex justify-content-lg-end align-items-center gap-3">
                                        <div className="px-2 ll-div d-flex justify-content-center align-items-center n-br"><img className="me-2" src={Preview} /><span className="m-p fw-medium text-uppercase">Preview</span></div>
                                        {
                                            currentUser?.package_status == 'draft' ? 
                                            <div className="px-2 ll-div d-flex justify-content-center align-items-center n-br"><img className="me-2" src={Publish} /><span className="m-p fw-medium text-uppercase" onClick={changeStatus}>{isLoading ? 'Publishing' : 'Publish'}</span></div> :
                                            <div className="px-2 ll-div d-flex justify-content-center align-items-center n-br p-btn"><img className="me-2" src={Publish} /><span className="m-p fw-medium text-uppercase">{currentUser?.package_status}</span></div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-4 gap-4 gap-lg-0">
                                <div className="col col-12 col-lg-6">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col">
                                                    <h1 className="f-h f-color fw-normal mb-0">Profile</h1>
                                                </div>
                                                <div className="col">
                                                    <div className="d-flex justify-content-sm-end align-items-center">
                                                        <div className="px-3 py-1 tag-p d-flex justify-content-center align-items-center rounded-pill"><span className="text-white t-h" style={{textTransform: 'capitalize'}}>{currentUser?.package_status}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="position-relative mb-5 pro-cover" style={{backgroundImage: `url(${currentUser?.cover_image})`, backgroundSize: 'cover'}}>
                                            <div className="position-absolute" style={{bottom: "-40%", left: "2%"}}><img className="me-3 img-profile rounded-circle profile_pic" src={currentUser?.avatar || User} /><span className="f-color fw-medium big-font">{(currentUser?.firstname || "")  +" "+(currentUser?.lastname || "")}</span></div>
                                        </div>
                                        <div className="card-body pt-4">
                                            <div className="row">
                                                {currentUser?.category && 
                                                   <div className="col col-12 mb-4">
                                                        <div className="row gap-2 gap-lg-0">
                                                            <div className="col col-12 col-lg-6">
                                                                <h1 className="l-size f-color fw-semibold mb-0">{currentUser?.category}</h1>
                                                            </div>
                                                            <div className="col col-12 col-lg-6">
                                                                <div className="d-flex justify-content-lg-end align-items-center"><span className="l-size f-color fw-regular mb-0">General training</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }

                                                <div className="col col-12 mb-4">
                                                    <h1 className="l-size f-color fw-semibold mb-3">Bio</h1>
                                                    {currentUser?.bio ? 
                                                        <p className="l-size fw-regular mb-0 f-color">{currentUser?.bio}</p> : <p>No bio given</p>
                                                    }
                          
                                                    <div className="d-flex justify-content-between align-items-center"></div>
                                                </div>
                                                <div className="col col-12 mb-4">
                                                    <h1 className="l-size f-color fw-semibold mb-3">Media</h1>
                                                    {medias?.length > 0 ? 
                                                    <div className="row">
                                                        {medias?.map((media:any) => {
                                                            return(
                                                                <div className="col col-6 col-md-3 mb-3 mb-md-0">
                                                                    <img src={media?.image} alt="" className='w-100 h-100' />
                                                                </div>
                                                            )
                                                        })}
                                                        
                                                    </div> : <p>No media uploaded</p>
                                                    }
                                                    
                                                </div>
                                                <div className="col col-12 d-flex justify-content-end align-items-center">
                                                    <Link to={"/coach/profile"} className="px-3 text-decoration-none ll-div d-flex justify-content-center align-items-center n-br"><img className="me-2" src={Modify} /><span className="m-p fw-medium text-uppercase">Modify</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-12 col-lg-6">
                                    <div className="card card-s">
                                        <div className="card-body">
                                            <div className="row mb-3 gap-2 gap-sm-0">
                                                <div className="col col-12 col-sm-6">
                                                    <h1 className="f-h f-color fw-normal mb-0">Packages</h1>
                                                </div>
                                                <div className="col col-12 col-sm-6">
                                                    <div className="d-flex justify-content-sm-end align-items-center">
                                                        <div className="px-3 py-1 tag-p d-flex justify-content-center align-items-center rounded-pill"><span className="text-white t-h" style={{textTransform: 'capitalize'}}>{currentUser?.package_status}</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {isFetching ? 
                                                <div>Loading...</div>
                                                :
                                                <>
                                                    <div className="row">
                                                        <div className="col col-12 mb-4">
                                                            <div className="p-3 mb-3 n-br p-border">
                                                                <div className="row align-items-sm-end">
                                                                    <div className="col col-12 col-sm-6 px-2">
                                                                        <p className="mb-2 fw-regular font-size text-black-50">Basic</p>
                                                                        <p className="f-color fw-medium mb-0 big-font" style={{textTransform: 'capitalize'}}>{basic?.package_type}</p>
                                                                    </div>
                                                                    {basic?.amount && 
                                                                    <div className="col col-12 col-sm-6 px-2">
                                                                        <p className="mb-0 f-h f-color">{basic?.amount}&nbsp;<span className="fw-regular size-font text-black-50">/per month</span></p>
                                                                    </div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col col-12 mb-4">
                                                            <div className="p-3 mb-3 n-br p-border">
                                                                <div className="row align-items-sm-end">
                                                                    <div className="col col-12 col-sm-6 px-2">
                                                                        <p className="mb-2 fw-regular font-size text-black-50">Premium</p>
                                                                        <p className="f-color fw-medium mb-0 big-font" style={{textTransform: 'capitalize'}}>{premium?.package_type}</p>
                                                                    </div>
                                                                    {premium?.amount && 
                                                                    <div className="col col-12 col-sm-6 px-2">
                                                                        <p className="mb-0 f-h f-color">{premium?.amount}&nbsp;<span className="fw-regular size-font text-black-50">/per month</span></p>
                                                                    </div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col col-12 mb-4">
                                                            <div className="p-3 mb-3 n-br p-border">
                                                                <div className="row align-items-sm-end">
                                                                    <div className="col col-12 col-sm-6 px-2">
                                                                        <p className="mb-2 fw-regular font-size text-black-50">Elite</p>
                                                                        <p className="f-color fw-medium mb-0 big-font" style={{textTransform: 'capitalize'}}>{elite?.package_type}</p>
                                                                    </div>
                                                                    {elite?.amount && 
                                                                    <div className="col col-12 col-sm-6 px-2">
                                                                        <p className="mb-0 f-h f-color">{elite?.amount}&nbsp;<span className="fw-regular size-font text-black-50">/per month</span></p>
                                                                    </div>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col col-12 d-flex justify-content-end align-items-center">
                                                            <Link to={"/coach/current-package"} className="px-3 ll-div d-flex justify-content-center align-items-center n-br text-decoration-none"><img className="me-2" src={Modify} /><span className="m-p fw-medium text-uppercase">Modify</span></Link>
                                                        </div>
                                                    </div>
                                                </>
                                            }
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

export default Package;