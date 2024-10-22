import { Dashicon, Popover } from '@wordpress/components';
import { useState } from 'react';
import DOMPurify from 'dompurify';
import { __ } from '@wordpress/i18n';

export default function ShortCode({shortcode, setAttributes}){
    const [show, setShow] = useState(false);

    function changeShortCode(event){
        const value = DOMPurify.sanitize(event.target.value);
        setAttributes({shortcode: value});
    }
    return (
        <div className="row__block isHovered mr-header-popover mr-header-left-position"
            onPointerEnter={() => setShow(() => true)}
            onPointerLeave={() => setShow(() => false)}
        >
            <Dashicon icon="shortcode" />
            <div className="mr-header-popover">
                {show && <Popover>
                    <div className="popover-list">
                        <div className="popover-item">
                            <span>{__("Введенный шорткод: ", "ckror")}</span>
                            <input value={shortcode} placeholder={__("Код")} onChange={changeShortCode}></input>
                        </div>
                    </div>
                </Popover>}
            </div>
        </div>
    )
}