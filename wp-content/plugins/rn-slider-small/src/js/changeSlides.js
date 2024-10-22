import createSlide from "./objs/createSlide";

export default function changeSlides(slides, actionObj) {
    switch (actionObj.type) {
        case "ADD_SLIDE":
            return [...slides, createSlide(actionObj.id)];
        case "DELETE_SLIDE":
            return slides.filter((_, index) => _.id !== actionObj.index);
        case "UPDATE_SLIDE":
            return slides.map((slide, index) => (slide.id === actionObj.index ? {...actionObj.slide} : slide));
    }
}