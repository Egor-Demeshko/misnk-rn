import {SET_SOCIALS} from "./consts.js";
import DOMPurify from 'dompurify';
import { __ } from '@wordpress/i18n';

export function SingleSocial({ id, slug, link, active, onSocialsChange }) {
    function changeContent(event) {
        const value = DOMPurify.sanitize(event.target.value);
        onSocialsChange({ id, link: value, type: SET_SOCIALS});
    }
    return (
        <span className="single-social">
            <i className={`advantages-icon-${slug}`}></i>
            <input placeholder={__("Введите ссылку для ") + slug} onChange={changeContent}
                value={link}></input>   
        </span>
    )
}   