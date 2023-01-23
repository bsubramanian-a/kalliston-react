import React, {useState, useEffect, useRef} from 'react';
import { DropZone } from './Dropzone';
import { FileList } from './FileList';
import Close from '../../../assets/img/upload-icon/closeFilled.svg';
import UpDoc from '../../../assets/img/upload-icon/upDoc.svg';
import { Link } from 'react-router-dom';
import { UploadProgress } from './UploadProgress';
var classNames = require('classnames');

export const MultiImageUpload = (props: any) => {
    const [isDropActive, setIsDropActive] = React.useState(false)
    const [medias, setMedias] = useState<any>()
    const [preview, setPreview] = useState<any>();
    const [err, setErr] = useState("");
    const hiddenFileInput = useRef<any>(null);

    // Create state for dropped files:
    const [files, setFiles] = React.useState<File[]>([])

    // Create handler for dropzone's onDragStateChange:
    const onDragStateChange = React.useCallback((dragActive: boolean) => {
         setIsDropActive(dragActive)
    }, [])
 
    // Create handler for dropzone's onFilesDrop:
    const onFilesDrop = React.useCallback((coverImage: File[]) => {
        console.log("coverimage multi", coverImage);
        setErr('');
        if(coverImage?.length > 5){
            setErr("Please select maximum of 5 images")
        }else{
            setMedias(coverImage);
        }
    }, [])

    const handleChange = async(event:any) => {
        setMedias(Array.from(event.target.files).map((file: any) => file));
    }

    const handleClick = (event:any) => {
        if(hiddenFileInput.current) hiddenFileInput.current.click();
    };

    return(
        <>
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
                        {err && <p className='text-center err_msg'>{err}</p>}
                    </div>
                </DropZone>
            </div>    

            {
                medias?.map((media:any) => {
                    return(
                        <UploadProgress media={media}/>
                    )
                })
            }
        </>
    )
}