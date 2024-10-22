import { PanelBody, PanelRow, Button } from '@wordpress/components';
import { InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import SearchField from './SearchField';
import ContactButtonAndForm from './ContactButtonAndForm';

export default function LogoAndSearch({
    imgId,
    logoUrl, 
    logoAlt, 
    mainPhone,
    phoneLabel,
    setAttributes
}){
    function onFileSelect({id, alt, sizes: {thumbnail: {url}}}){
        if(url || url === ''){
            setAttributes({logoUrl: url, logoImgId: id, logoAlt: alt});
        }
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title={__("Логотип", "mr-headers")} initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={onFileSelect}
                                value={imgId}
                                render={({open}) => { 
                                    return (
                                        <Button
                                            onClick={open}
                                        >
                                            {__("Выбрать логотип", "mr-headers")}
                                        </Button>
                                    )
                                }}
                            />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className="rn-row flex-nowrap rn-row--mobile-center">
                <div className="menu_mobile__icon">
                    <button id="open_mobile_menu" className="menu_mobile__btn eliminate_btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div className="padding_on_left_right">
                    <a href="/" className="header__logo eliminate-link" title="">
                        <div className="rn-row flex-nowrap h-100">
                            {logoUrl &&<img className="header__logo-img" alt={logoAlt} src={logoUrl}/>}
                        </div>
                    </a>
                </div>

                <SearchField/>

                <ContactButtonAndForm 
                    mainPhone={mainPhone}
                    phoneLabel={phoneLabel}
                    setAttributes={setAttributes}
                    />
            </div>
        </>
    )
}