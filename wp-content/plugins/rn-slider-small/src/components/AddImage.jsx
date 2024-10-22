import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";

export default function AddImage({ open }) {
	return (
		<button onClick={open} className="slider-small-editor__add_image">
			<Dashicon icon="plus" className="slider-small-editor__add_image_icon" />
		</button>
	);
}
