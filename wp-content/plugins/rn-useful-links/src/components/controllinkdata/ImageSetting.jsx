import { PanelBody, Panel, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useState, useEffect } from "react";
import { InspectorControls } from "@wordpress/block-editor";
import ImagePicker from "./ImagePicker";
import InputWithLabel from "../inputs/InputWithLabel";
import { CardPickerState } from "../../js/stateShare/imagePicker";
import { createActiveData } from "../../js/objects/linkData";
import { UPDATE_LINK, ADD_LINK } from "../usefullinks/workOnLinks";

export default function ImageSetting({ updateLinks, linksCount }) {
	const [linkData, setLinkData] = useState(null);
	function updateData(data) {
		setLinkData({ ...linkData, ...data });
	}

	function saveData() {
		debugger;
		if (linkData.id <= linksCount) {
			updateLinks({ ...linkData, type: UPDATE_LINK });
		} else {
			updateLinks({ ...linkData, type: ADD_LINK });
		}
	}

	useEffect(() => {
		CardPickerState.subscribe((value) => {
			if (!value.id || (linkData && linkData.id === value.id)) return;
			const activeData = createActiveData(value);
			setLinkData(activeData);
		});
	}, []);

	return (
		<InspectorControls>
			{linkData && (
				<Panel
					key={linkData.id}
					name="rn-usefullinks-link"
					title={__("Редактирование ссылки")}
				>
					<PanelBody
						className={"useful-links-editor__panel"}
						icon={"heading"}
						title={__("Редактирование ссылки")}
					>
						<ImagePicker updateData={updateData} link={linkData} />
						<InputWithLabel
							updateData={updateData}
							field={"link"}
							value={linkData?.link ?? ""}
							title={__("Укажите сcылку для перехода:")}
						/>
						<InputWithLabel
							updateData={updateData}
							field={"title"}
							value={linkData?.title ?? ""}
							title={__("Укажите заголовок для ссылки:")}
						/>
						<Button
							onClick={saveData}
							className="rn-useful-links-editor__save"
							isPrimary
						>
							{__("Сохранить", "rn-useful-links")}
						</Button>
					</PanelBody>
				</Panel>
			)}
		</InspectorControls>
	);
}
