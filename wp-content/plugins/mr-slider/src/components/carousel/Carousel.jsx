import { CCarousel, CCarouselItem } from "@coreui/react";
import CustomSliderItem from "./CustomSliderItem";
import setSlideInfo from "./js/setSlideInfo";
import { useReducer } from "react";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import getSlideObj from "./js/getSlideObj";

export default function Carousel({ attributes, setAttributes }) {
	const [slides, dispatch] = useReducer((state, action) => {
		const newSlides = setSlideInfo(state, action);
		setTimeout(() => setAttributes({ slides: newSlides }), 30);
		return newSlides;
	}, attributes.slides);
	const wrapperClasses =
		slides.length > 0
			? "rn-slider-editor--wrapper"
			: "rn-slider-editor--wrapper rn-slider-editor--center";

	function createSlide() {
		const slides = attributes.slides;
		const index =
			slides.length > 0 ? Number(slides[slides.length - 1]["id"] + 1) : 0;
		const newData = [...attributes.slides.concat([getSlideObj(index)])];
		dispatch({ type: "add_slide", slides: newData });
		setTimeout(() => setAttributes({ slides: newData }), 30);
	}

	return (
		<div className={wrapperClasses}>
			{slides.length > 0 && (
				<CCarousel controls dark>
					{slides.map((slide) => {
						return (
							<CCarouselItem key={slide.id}>
								<CustomSliderItem
									{...slide}
									dispatchDataChanged={dispatch}
									key={slide.id}
								/>
							</CCarouselItem>
						);
					})}
				</CCarousel>
			)}

			<Button
				variant="primary"
				className={slides.length > 0 ? "rn-slider-editor--button-position" : ""}
				onClick={createSlide}
			>
				{__("Добавить слайд", "rn-slider")}
			</Button>
		</div>
	);
}
