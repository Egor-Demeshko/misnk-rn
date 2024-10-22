/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.css';
import {
	BLOCK_TITLE,
	LINK_TITLE,
	NEWS_LINK_TITLE
} from './js/const/titles';
import NewsRow from './js/NewsRow';
import {useState} from "react";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const [blockTitleState, setBlockTitle] = useState(attributes.blockTitle);
	const [linkTitleState, setLinkTitle] = useState(attributes.linkTitle);
	const [newsLinkTitleState, setNewsLinkTitle] = useState(attributes.newsLinkTitle);

	function onUpdate({field, value}){
		switch(field){
			case BLOCK_TITLE:
				setBlockTitle(value);
				break;
			case LINK_TITLE:
				setLinkTitle(value);
				break;
			case NEWS_LINK_TITLE:
				setNewsLinkTitle(value);
				break;
		}
		setTimeout(() => setAttributes({[field]: value}), 30);
	}

	return <div { ...useBlockProps() }>
		<section className="rn-news">
			<div className="rn-news__row justify-content-space-between">
				<RichText
					tagName="h3"
					className="page_block_title no-margin mr-slider__is-hovered"
					value={blockTitleState}
					onChange={(value) => onUpdate({ field: BLOCK_TITLE, value })}
				/>

				<RichText
					tagName="p"
					className="rn-news__all-news-link mr-slider__is-hovered rn-news__margin-zero"
					value={linkTitleState}
					onChange={(value) => onUpdate({ field: LINK_TITLE, value })}
				/>
			</div>
			<NewsRow onUpdate={onUpdate} newsLinkTitleState={newsLinkTitleState}/>
		</section>
	</div>
}
