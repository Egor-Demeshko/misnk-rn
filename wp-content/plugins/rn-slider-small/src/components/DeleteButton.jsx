import { Dashicon, Popover, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState } from "react";

export default function DeleteButton({ id, onDelete }) {
	const [popup, setPopup] = useState(false);

	function cancel(e) {
		e.stopPropagation();
		setPopup(false);
	}

	function deleteSlide(e) {
		e.stopPropagation();
		setPopup(false);
		setTimeout(() => onDelete(id));
	}

	return (
		<div
			className="slider-editor__delete"
			onClick={() => setPopup(true)}
			title={__("Удалить слайд", "rn-slider")}
		>
			<Dashicon icon="no" />

			{popup && (
				<Popover className="slider-editor__delete_popup_wrapper">
					<div className="slider-editor__delete_popup">
						<h4>
							{__(
								"Вы уверены, что хотите удалить этот один слайд",
								"rn-slider",
							)}
						</h4>
						<div className="slider-editor__delete_popup-buttons">
							<Button variant="primary" onClick={cancel}>
								{__("Отмена", "rn-slider")}
							</Button>
							<Button isDestructive onClick={deleteSlide}>
								{__("Удалить", "rn-slider")}
							</Button>
						</div>
					</div>
				</Popover>
			)}
		</div>
	);
}
