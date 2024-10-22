import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';
import DOMPurify from 'dompurify';

export default function ContactButtonAndForm({mainPhone, phoneLabel, setAttributes}) {

    function changePhone(){
        mainPhone = DOMPurify.sanitize(mainPhone);
        setAttributes({mainPhone: mainPhone});
    }

    return (
        <>
            <div className="header__contacts align-items-center text-" >
                <div className="col-auto">
                    <div className="header__phone" >
                        <RichText 
                            className="rn-header__is-hovered" 
                            tagName="span" 
                            value={mainPhone} 
                            onChange={changePhone}/>
                    </div>
                    <RichText className="header__phone-label rn-header__is-hovered"
                    tagName="div"
                    value={phoneLabel}
                    onChange={() => {
                        mainPhone = DOMPurify.sanitize(mainPhone);
                        setAttributes({phoneLabel: phoneLabel})}
                    }>
                    </RichText>
                </div>
                <div className="" aria-label="Feedback Form">
                    <a data-toggle="modal" className="rn-btn eliminate-link rn-btn-main">{__("Написать", "mr-headers")}</a>
                </div>

                <div className="header__contacts_contact-form">
                    <button className="rn-btn rn-btn-main header__contacts_backbutton"> {__("Назад", "mr-headers")}</button>
                </div>
            </div>
        </>
    )
}
