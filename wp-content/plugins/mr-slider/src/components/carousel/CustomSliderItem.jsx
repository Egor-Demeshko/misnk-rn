import { RichText } from "@wordpress/block-editor";
import { Button } from "@wordpress/components";
import { FULLFILL_TOP_HEADING, MAIN_HEADING, BOTTOM_HEADING } from "./js/texts";
import { useState } from "react";
import ImageRedactor from "../image/ImageRedactor";
import DeleteButton from "../deleteButton/DeleteButton";
import { __ } from "@wordpress/i18n";
import Link from "./Link";

export default function CustomSliderItem({
	id,
	firstLabel,
	secondLabel,
	photoUrl,
	mainText,
	photoAlt,
	photoId,
	linkUrl,
	linkText,
	dispatchDataChanged,
}) {
	const [slideData, setSlideData] = useState({
		id,
		firstLabel,
		secondLabel,
		photoUrl,
		mainText,
		photoAlt,
		photoId,
		linkUrl,
		linkText,
	});

	function onDelete(id) {
		dispatchDataChanged({ type: "delete", id });
	}

	return (
		<div className="top-slider__slide slider-editor slider-editor--relative">
			<div className="top-slider__left">
				<div className="top-slider__left_texts">
					<RichText
						tagName="p"
						className="top-slider__left_texts_side_text_top mr-slider__is-hovered"
						value={slideData.firstLabel}
						onChange={(value) =>
							setSlideData({ ...slideData, firstLabel: value })
						}
						placeholder={FULLFILL_TOP_HEADING}
					/>

					<RichText
						tagName="p"
						className="top-slider__left_texts_heading mr-slider__is-hovered"
						value={slideData.mainText}
						onChange={(value) =>
							setSlideData({ ...slideData, mainText: value })
						}
						placeholder={MAIN_HEADING}
					/>

					<RichText
						tagName="p"
						className="top-slider__main_text mr-slider__is-hovered"
						value={slideData.secondLabel}
						onChange={(value) =>
							setSlideData({ ...slideData, secondLabel: value })
						}
						placeholder={BOTTOM_HEADING}
					/>

					<Link
						linkUrl={slideData.linkUrl}
						linkText={slideData.linkText}
						onChange={(value) => setSlideData({ ...slideData, ...value })}
					/>
				</div>
			</div>

			<ImageRedactor
				photoUrl={slideData.photoUrl}
				photoAlt={slideData.photoAlt}
				photoId={slideData.photoId}
				onChange={(data) => setSlideData({ ...slideData, ...data })}
			/>

			<Button
				className="slider-editor__save-button"
				variant="primary"
				onClick={() =>
					dispatchDataChanged({ type: "update_slide", data: slideData })
				}
			>
				{__("Зафиксировать состояние слайда", "rn-slider")}
			</Button>

			<DeleteButton id={id} onDelete={onDelete} />
		</div>
	);
}
