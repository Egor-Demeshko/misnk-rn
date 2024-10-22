import { useReducer } from "react";
import { Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import changeSlides from "../js/changeSlides";
import { CCarousel, CCarouselItem } from "@coreui/react";
import Slide from "./Slide";

export default function Carousel({ attributes, setAttributes }) {
	const [slides, dispatch] = useReducer((slides, actionObj) => {
		const result = changeSlides(slides, actionObj);
		setTimeout(() => setAttributes({ slides: result }), 30);
		return result;
	}, attributes.slides);

	return (
		<section className="info_slide rn-slider-small-wrapper">
			{slides.length > 0 && (
				<CCarousel controls dark>
					{slides.map((slide) => {
						return (
							<CCarouselItem key={slide.id}>
								<Slide slide={slide} dispatch={dispatch} />
							</CCarouselItem>
						);
					})}
				</CCarousel>
			)}

			<Button
				className="rn-slider-small__add-button"
				variant="primary"
				onClick={() => dispatch({ type: "ADD_SLIDE", id: slides.length })}
			>
				{__("Добавить слайд", "rn-slider-small")}
			</Button>
		</section>
	);
}
