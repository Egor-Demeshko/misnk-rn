import { Dashicon, Popover, Button } from "@wordpress/components";
import { CFormInput } from "@coreui/react";
import { useState } from "react";
import { __ } from "@wordpress/i18n";

export default function Link({ linkUrl = "", linkText = "", onChange }) {
	const [editPopup, setEditPopup] = useState(false);
	const [linkUrlFromState, setLinkUrlFromState] = useState(linkUrl);
	const [linkTextFromState, setLinkTextFromState] = useState(linkText);

	const showEdit = ({ target }) => {
		if (
			target.closest(".top-slider__left_button_wrapper.slider__editor__link") ||
			target.closest(".top-slider__left_button.btn.btn-main")
		) {
			setEditPopup(true);
		}
	};

	const saveData = (e) => {
		e.stopPropagation();
		setEditPopup(false);
		onChange({ linkUrl: linkUrlFromState, linkText: linkTextFromState });
	};

	function saveIncomingData(e, action) {
		const value = e.target.value ?? "";
		action(value);
	}

	return (
		<div
			className="top-slider__left_button_wrapper slider__editor__link"
			onClick={showEdit}
		>
			{(!linkText && (
				<Dashicon icon="insert" className="mr-slider__is-hovered" />
			)) || (
				<p className="top-slider__left_button rn-btn rn-btn-main mr-slider__is-hovered">
					{linkText}
				</p>
			)}

			{editPopup && (
				<Popover>
					<div className="slider-editor__link_popup">
						<h4>{__("Редактировать ссылку", "rn-slider")}</h4>
						<div>
							<CFormInput
								type="text"
								id="rn_link_input_1"
								label={__(
									"Введите ссылку для перехода по кнопке:",
									"rn-slider",
								)}
								placeholder="https://example.com"
								size="sm"
								value={linkUrlFromState}
								onChange={(e) => saveIncomingData(e, setLinkUrlFromState)}
							/>
						</div>
						<div>
							<CFormInput
								type="text"
								id="rn_link_input_2"
								label={__("Введите текст кнопки:", "rn-slider")}
								placeholder="Пример, Кнопка"
								size="sm"
								value={linkTextFromState}
								onChange={(e) => saveIncomingData(e, setLinkTextFromState)}
							/>
						</div>
						<Button variant="primary" onClick={saveData}>
							{__("Зафиксировать данные", "rn-slider")}
						</Button>
					</div>
				</Popover>
			)}
		</div>
	);
}
