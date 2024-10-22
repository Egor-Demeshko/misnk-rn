import { Dashicon, Popover, Button } from "@wordpress/components";
import { CFormInput } from "@coreui/react";
import { useState } from "react";
import { __ } from "@wordpress/i18n";

export default function Link({
	externalUrl = "",
	externalLabel = "",
	onChange,
}) {
	const [editPopup, setEditPopup] = useState(false);
	const [externalUrlFromState, setexternalUrlFromState] = useState(externalUrl);
	const [extrnalLabelFromState, setExtrnalLabelFromState] =
		useState(externalLabel);

	const showEdit = ({ target }) => {
		setEditPopup(!editPopup);
	};

	const saveData = (e) => {
		e.stopPropagation();
		setEditPopup(false);
		onChange({
			externalUrl: externalUrlFromState,
			externalLabel: extrnalLabelFromState,
		});
	};

	function saveIncomingData(e, action) {
		const value = e.target.value ?? "";
		action(value);
	}

	return (
		<div className="info_slide_editor__link">
			<div onClick={showEdit} className="info_slide__save_button">
				{(!extrnalLabelFromState && (
					<Dashicon icon="insert" className="mr-slider__is-hovered" />
				)) || (
					<p className="info_slide__button rn-btn rn_eliminate-link rn-btn--big-mobile">
						{extrnalLabelFromState}
					</p>
				)}
			</div>

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
								value={externalUrlFromState}
								onChange={(e) => saveIncomingData(e, setexternalUrlFromState)}
							/>
						</div>
						<div>
							<CFormInput
								type="text"
								id="rn_link_input_2"
								label={__("Введите текст кнопки:", "rn-slider")}
								placeholder="Пример, Кнопка"
								size="sm"
								value={extrnalLabelFromState}
								onChange={(e) => saveIncomingData(e, setExtrnalLabelFromState)}
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
