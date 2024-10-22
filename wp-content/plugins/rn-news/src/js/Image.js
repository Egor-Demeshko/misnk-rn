export default function Image(){
    const imagePath = `${RnNews.pluginUrl || '/wp-content/plugins/rn-news'}src/assets/images/news_mask.jpeg`;
    return <div className="rn-news-card__image-wrapper">
        <img className="rn-news-card__image" src={imagePath}/>
    </div>
}