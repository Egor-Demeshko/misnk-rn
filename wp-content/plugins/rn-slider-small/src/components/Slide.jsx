import { useState } from "react";
import ImagePicker from "./ImagePicker";
import DeleteButton from "./DeleteButton";
import { Button } from "@wordpress/components";
import Link from "./Link";
import { __ } from "@wordpress/i18n";

export default function Slide({ slide, dispatch }) {
	const [slideState, setSlide] = useState(slide);
	const {
		id,
		description,
		heading,
		imgId,
		imgUrl,
		imgAlt,
		externalUrl,
		externalLabel,
	} = slideState;

	function onChange(newData) {
		setSlide({ ...slideState, ...newData });
	}

	function onDelete() {
		dispatch({ type: "DELETE_SLIDE", index: id });
	}

	function preserveState() {
		dispatch({ type: "UPDATE_SLIDE", index: id, slide: slideState });
	}

	return (
		<li className="glide__slide info_slide_editor__wrapper">
			<div className="info_slide__slide">
				<ImagePicker
					{...{ description, heading, imgId, imgUrl, imgAlt }}
					onChange={onChange}
				/>

				<Link
					externalUrl={externalUrl}
					externalLabel={externalLabel}
					onChange={onChange}
				/>
			</div>

			<DeleteButton id={id} onDelete={onDelete} />
			<Button
				className="slider-editor__save-button"
				variant="primary"
				onClick={preserveState}
			>
				{__("Зафиксировать состояние слайда", "rn-slider")}
			</Button>
		</li>
	);
}
