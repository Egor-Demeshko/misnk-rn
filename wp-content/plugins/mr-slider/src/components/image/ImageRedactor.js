import {__} from "@wordpress/i18n";
import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export default function ImageRedactor({photoUrl, photoAlt, photoId, onChange}){
    function imageChoosen({id, sizes:{full}, alt}){
        const url = full.url;
        onChange({
            photoUrl: url,
            photoAlt: alt,
            photoId: id
        });
    }
    
    return  (
            <>
                <MediaUploadCheck>
                    <MediaUpload
                        value={Number(photoId)}
                        onSelect={imageChoosen}
                        render={({open}) => (
                            <div className="top-slider__right slider-editor--position-relative">
                                <div className="slider-editor__wrapper">
                                    <img className="slider-editor__image" alt={photoAlt} src={photoUrl}/>
                                    <AddPicture open={open}/>
                                </div>
                            </div>
                        )}    
                    />
                </MediaUploadCheck>
            </>
    )
}   


function AddPicture({open}){
    return (
        <button onClick={open} className="slider-editor__add_image">
            {__('Добавить или изменить изображение', 'rn-slider')}
        </button>
    )
}