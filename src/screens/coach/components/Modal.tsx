import React, { useContext, useState, useEffect, useRef } from 'react';
import Close from '../../../assets/img/upload-icon/closeFilled.svg';
import UpDoc from '../../../assets/img/upload-icon/upDoc.svg';
import { Link } from 'react-router-dom';
import { DropZone } from './Dropzone';
import { FileList } from './FileList';
import { useGetCoachQuery } from '../../../services/coach-service';
import axios from "axios";
var classNames = require('classnames');

function Modal(props:any) {
    const [isDropActive, setIsDropActive] = React.useState(false)
    const hiddenFileInput = useRef<any>(null);
    const closeModal = useRef<any>(null);
    const [coverImage, setCoverImage] = useState<any>()
    const [progress, setProgress] = useState<any>(0)
    const [preview, setPreview] = useState<any>();
    const { data: currentUser = [], isFetching, isError, error, refetch: refCoach }:any = useGetCoachQuery(1);
    
    const axiosInstance = axios.create({
        baseURL : "https://kalliston-api.onrender.com/api/v1/"
        // baseURL: "http://localhost:8000/api/v1/",
    });

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
         console.log("modal image", files[0]);
         let formData = new FormData()
         const token = JSON.parse(localStorage.getItem("accesstoken") || "");
         formData.append("image", files[0]);
         // formData.append("type", 'media');
         axiosInstance.post("users/coach-update-profile-pic", formData, {
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
             if(res?.status == 200) {
                refCoach();
                closeModal.current.click();
            };
         })
     }
 
     const handleChange = async(event:any) => {
         console.log("event", event.target.files);
         setCoverImage(event.target.files);
     }
 
    const handleClick = (event: any) => {
        if (hiddenFileInput.current) hiddenFileInput.current.click();
    };

    return (
        <div className="modal fade" role="dialog" id="modal-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="mb-4 p-4 uploadDiv">
                            <div
                                className={classNames('dropZoneWrapper', {
                                    'dropZoneActive': isDropActive,
                                })}
                                >
                                {/* Render the dropzone */}
                                <DropZone onDragStateChange={onDragStateChange} onFilesDrop={onFilesDrop}>
                                    <div className="mb-4 uploadDiv">
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
                        </div>
                        <div id="preview-img"><img className="w-100" src={preview} /></div>
                        {
                            coverImage?.length == 1 &&   
                            <div className="card card-s">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div>
                                            <p className="mb-0 f-color fw-normal">{coverImage[0].name}</p>
                                            <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">{Math.floor(coverImage[0].size/1024)}kb</span>
                                                <div className="rounded-circle cDiv"></div><span className="text-black-50 fw-normal expire-f">Loading</span>
                                            </div>
                                        </div><img src={Close} />
                                    </div>
                                </div>
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
                    <div className="modal-footer d-flex justify-content-start gap-4 border-0"><button className="btn btn-primary text-uppercase px-4" type="button" data-bs-dismiss="modal">Save</button><button ref={closeModal} className="btn btn-primary text-uppercase px-3 py-2 bCancel" type="button" data-bs-dismiss="modal">Cancel</button></div>
                </div>
            </div>
        </div>
    );
}

export default Modal;