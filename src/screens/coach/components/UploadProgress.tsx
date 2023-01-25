import React, {useState, useEffect} from 'react';
import Close from '../../../assets/img/upload-icon/closeFilled.svg';
import UpDoc from '../../../assets/img/upload-icon/upDoc.svg';
import axios from "axios";
import { useGetMediasQuery } from '../../../services/media-service';

export const UploadProgress = ((props:any) => {
    const { data: medias = [], isLoading, refetch }:any = useGetMediasQuery(1);
    const {media}:any = {...props};
    const [progress, setProgress] = useState<any>(0)
    const [isuploaded, setIsuploaded] = useState(false);
    const controller = new AbortController();


    const axiosInstance = axios.create({
        baseURL : "https://kalliston-api.onrender.com/api/v1/medias/"
        // baseURL: "http://localhost:8000/api/v1/medias/",
    });

    useEffect(() => {
        if(media) coverImageUpload(media);
    }, [media]);

    const coverImageUpload = (media:any) => {
        let formData = new FormData()
        const token = JSON.parse(localStorage.getItem("accesstoken") || "");
        formData.append("image", media);
        // formData.append("type", 'media');
        setIsuploaded(false);
        axiosInstance.post("update-media-image", formData, {
            signal: controller.signal,
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
            setIsuploaded(true);
            if(res?.status == 200) refetch();
        });
    }

    return(
        <div className="w-100 mt-2"> 
            <div className="d-flex justify-content-start align-items-start gap-3 mb-4">
                <img src={UpDoc} />
                <div className="w-100 mt-2">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <p className="mb-0 f-color fw-normal">{media?.name}</p>
                            <div className="d-flex justify-content-start align-items-center gap-2"><span className="text-black-50 fw-normal expire-f">{media?.size}kb</span>
                            </div>
                        </div>
                        {!isuploaded && <img src={Close} onClick={() => controller.abort()} />}
                    </div>
                    <div className="progress">
                        <div className={`progress-bar w-${progress}`}>{progress}%</div>
                    </div>
                </div>
            </div>
        </div>
    )
})