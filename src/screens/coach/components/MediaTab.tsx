import React, { useContext, useState, useEffect, useRef } from 'react';
import Close from '../../../assets/img/upload-icon/closeFilled.svg';
import UpDoc from '../../../assets/img/upload-icon/upDoc.svg';
import ImgPlaceHolder from '../../../assets/img/upload-icon/_placeholderImage.png';
import MediaPlaceHolder from '../../../assets/img/upload-icon/placeholderMImage.png';
import { Link } from 'react-router-dom';
import { DropZone } from './Dropzone';
import { FileList } from './FileList';
import axios from "axios";
import { off } from 'process';
import { useGetCoachQuery } from '../../../services/coach-service';
import { useGetMediasQuery } from '../../../services/media-service';
import { useDeleteMediaMutation } from '../../../services/media-service';
import { MultiImageUpload } from './MultiImageUpload';
import { useDeleteCoachCoverImageMutation } from '../../../services/coach-service';
var classNames = require('classnames');
 
function MediaTab() {
    // Create "active" state for dropzone:
    const { data: currentUser = [], isFetching, isError, error, refetch: refCoach }:any = useGetCoachQuery(1);
    const { data: medias = [], isLoading, refetch }:any = useGetMediasQuery(1);
    const [deleteMedia, response] = useDeleteMediaMutation();
    const [deleteCoachCoverImage] = useDeleteCoachCoverImageMutation();
    const hiddenFileInput = useRef<any>(null);

    console.log("medias........", medias);
    const [isDropActive, setIsDropActive] = React.useState(false)
    const [coverImage, setCoverImage] = useState<any>()
    const [progress, setProgress] = useState<any>(0)
    const [preview, setPreview] = useState<any>();



    const axiosInstance = axios.create({
        baseURL : "https://kalliston-api.onrender.com/api/v1/"
        // baseURL: "http://localhost:8000/api/v1/",
    });

    const handleClick = (event:any) => {
        if(hiddenFileInput.current) hiddenFileInput.current.click();
    };

    // Create state for dropped files:
    const [files, setFiles] = React.useState<File[]>([])

    // Create handler for dropzone's onDragStateChange:
    const onDragStateChange = React.useCallback((dragActive: boolean) => {
        setIsDropActive(dragActive)
    }, [])

    // Create handler for dropzone's onFilesDrop:
    const onFilesDrop = React.useCallback((coverImage: File[]) => {
        setCoverImage(coverImage);
    }, [])


    useEffect(() => {
        // console.log("coverImage", coverImage);
        if(coverImage?.length == 1) {
            const objectUrl = URL.createObjectURL(coverImage[0])
            setPreview(objectUrl)
            coverImageUpload(coverImage)
        }; 
    }, [coverImage]);
    
    const coverImageUpload = (files:any) => {
        // setProgress(0);
        console.log("files", files);
        let formData = new FormData()
        const token = JSON.parse(localStorage.getItem("accesstoken") || "");
        formData.append("image", files[0]);
        // formData.append("type", 'media');
        axiosInstance.post("users/coach-update-cover-image", formData, {
            headers: {
            "Content-Type": "multipart/form-data",
            "Authorization" : `Bearer ${token}`  
            },
            onUploadProgress: (data:any) => {
                //Set the progress value to show the progress bar
                // console.log("progress", Math.round((100 * data.loaded) / data.total))
                setProgress(Math.round((100 * data.loaded) / data.total))
            },
        }).then((res:any) => {
            console.log("upload res", res.data); 
            if(res?.status == 200) refCoach();
        })
    }

    const handleChange = async(event:any) => {
        console.log("event", event.target.files);
        setCoverImage(event.target.files);
    }

    const deleteCoverImage = async () => {
        const res = await deleteCoachCoverImage(1);
        // console.log("deleteCoverImage res", res);
        refCoach();
    }

    const deleteImage = async (id:any) => {
        const res = await deleteMedia( id );
        // console.log("delete res.....", res);
        refetch();
    }

    return (
        <div className="tab-pane active" role="tabpanel" id="tab-2">
            <div className="card card-s mb-4">
                <div className="card-body py-4">
                    <div className="pt-1 pb-2 bottomC">
                        <h1 className="f-color fw-regular f-h">Media &amp; Banner</h1>
                    </div>
                    <div className="row mt-4">
                        <div className="col col-12">
                            <div className="mb-4">
                                <h1 className="f-color fw-medium mb-3 big-font">Cover</h1>
                               
                                <div
                                    className={classNames('dropZoneWrapper', {
                                        'dropZoneActive': isDropActive,
                                    })}
                                    >
                                    {/* Render the dropzone */}
                                    <DropZone onDragStateChange={onDragStateChange} onFilesDrop={onFilesDrop}>
                                        <div className="mb-4 p-4 uploadDiv">
                                            <div className="d-flex justify-content-center align-items-center mb-3"><img src={UpDoc} /></div>
                                            <p className="f-color fw-normal text-center mb-1 l-size">
                                                <input type="file" multiple accept="image/*" ref={hiddenFileInput} onChange={handleChange} style={{display: 'none'}}/>
                                                <Link to={"#"} className='cLink' onClick={handleClick}>Click to upload</Link>&nbsp;or drag and drop
                                            </p>
                                            <p className="fw-normal text-black-50 text-center mb-0 expire-f">SVG, PNG, JPG or GIF (max. 3MB)</p>
                                        </div>

                                        {coverImage?.length > 1 && (
                                            <h3>Only 1 file can be uploaded</h3>
                                        )}
                                        
                                        {/* <FileList files={coverImage} limit={1}/> */}
                                    </DropZone>
                                </div>
                                <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                                    {
                                        coverImage &&  <img src={UpDoc} /> 
                                    }
                                    <div className="w-100 mt-2">
                                        {
                                            coverImage &&   
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div>
                                                    <p className="mb-0 f-color fw-normal">{coverImage[0].name}</p>
                                                    <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">{Math.floor(coverImage[0].size/1024)}kb</span>
                                                        {/* <div className="rounded-circle cDiv"></div> */}
                                                        {/* <span className="text-black-50 fw-normal expire-f">Loading</span> */}
                                                    </div>
                                                </div>
                                                <img src={Close} />
                                            </div>
                                        }
                                      
                                        {
                                            preview && 

                                            <div className="progress">
                                            {/* <div className="progress-bar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%" }}>50%</div> */}
                                            <div className={`progress-bar w-${progress}`}>{progress}%</div>
                                        </div>
                                        }
                                    </div>
                                </div>
                                <div id="preview" className='position-relative'>
                                    <h1 className="f-color fw-normal mb-3 l-size"></h1> 
                                    <div className='position-absolute close_div'>
                                        <img src={Close} alt="delete" className='close_img' onClick={() => deleteCoverImage()}/>
                                    </div>
                                    <div id="preview-img"><img className="w-100" src={currentUser?.cover_image} /></div>
                                </div>
                            </div>
                            <div>
                                <h1 className="f-color fw-medium mb-3 big-font">Media</h1>
                                <MultiImageUpload/>
                                
                                <div id="preview-multiple">
                                    <h1 className="f-color fw-normal mb-3 l-size">Preview</h1>
                                    <div className="row gy-3 gy-lg-0">
                                    {medias.map((media:any) => {
                                                return(
                                                    <div className="col col-6 col-lg-3 px-2 position-relative gy-3">
                                                        <div className='position-absolute close_div'>
                                                            <img src={Close} alt="delete" className='close_img' onClick={() => deleteImage(media?.id)}/>
                                                        </div>
                                                        <img className="w-100 h-100" src={media?.image} />
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-12 mt-5">
                            <div className="d-flex justify-content-start align-items-center gap-3"><button className="btn btn-primary text-uppercase px-3" type="button">Save changes</button>
                                <div className="px-3 btn-cancel d-flex justify-content-center align-items-center text-uppercase"><span className="l-size">Cancel</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-s"></div>
        </div>
    );
}

export default MediaTab;