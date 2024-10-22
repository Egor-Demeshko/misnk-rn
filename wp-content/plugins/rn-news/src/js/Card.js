import Image from './Image';
import NewsButton from './NewsButton';

export default function Card({title, date, description, onUpdate, newsLinkTitleState}){
    return <div className="rn-news-card">
        <div className="rn-news-card__top">
            <Image/>
            <span className="rn-news-card__date">{date}</span>
            <p className="rn-news-card__heading rn-news__margin-zero">{title}</p>
            <p className="rn-news-card__description rn-news__margin-zero">{description}</p>
        </div>
        <NewsButton onUpdate={onUpdate} newsLinkTitleState={newsLinkTitleState}/>
    </div>
} 