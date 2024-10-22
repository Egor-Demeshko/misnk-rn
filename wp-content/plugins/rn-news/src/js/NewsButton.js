import {NEWS_LINK_TITLE} from "./const/titles";
import {RichText} from "@wordpress/block-editor";

export default function NewsButton({onUpdate, newsLinkTitleState}){
    return <div className="rn-news-card__button">
        <RichText
            tagName="p"
            className="rn-news-card__link rn-news__margin-zero mr-slider__is-hovered"
            value={newsLinkTitleState}
            onChange={(value) => onUpdate({field: NEWS_LINK_TITLE, value: value})}
        />
    </div>
}