import {
	MediaUploadCheck,
	MediaUpload,
	RichText,
} from "@wordpress/block-editor";
import AddImage from "./AddImage";
import { __ } from "@wordpress/i18n";

export default function ImagePicker({
	description,
	heading,
	imgId,
	imgUrl,
	imgAlt,
	onChange,
}) {
	function imageChoosen({ id, sizes: { medium }, alt }) {
		const url = medium.url;

		onChange({
			imgUrl: url,
			imgAlt: alt,
			imgId: id,
		});
	}

	return (
		<a className="rn-eliminate-link info_slide__slide_top">
			<MediaUploadCheck>
				<MediaUpload
					value={Number(imgId)}
					onSelect={imageChoosen}
					render={({ open }) => (
						<div className="info_slide_editor__image_wrapper">
							<img className="info_slide__image" src={imgUrl} alt={imgAlt} />
							<AddImage open={open} />
						</div>
					)}
				/>
			</MediaUploadCheck>
			<RichText
				className="info_slide__title mr-slider__is-hovered"
				value={heading}
				placeholder={__("Заголовок", "rn-slider-small")}
				onChange={(value) => onChange({ heading: value })}
			/>
			<RichText
				className="info_slide__additional mr-slider__is-hovered"
				value={description}
				placeholder={__("Текст карточки", "rn-slider-small")}
				onChange={(value) => onChange({ description: value })}
			/>
		</a>
	);
}
