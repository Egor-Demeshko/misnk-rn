import { __ } from '@wordpress/i18n';

export default class ImageSettingException extends Error {
    constructor(message = __("Ошибка блока настройки картинки", "rn-useful-links")) {
        super(message);
        this.name = "ImageSettingException";
    }
}