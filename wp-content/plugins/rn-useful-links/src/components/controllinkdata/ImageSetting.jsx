import { PanelBody, Panel, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import ImagePicker from "./ImagePicker";
import { useState } from "react";
import { InspectorControls } from "@wordpress/block-editor";
import InputWithLabel from "../inputs/InputWithLabel";
import createLinkData from "../../js/objects/linkData";

export default function ImageSetting({
	updateLinks,
	linksCount,
	typeOfEvent,
	link = null,
}) {
	const [linkData, setLinkData] = useState(
		link ?? createLinkData(linksCount + 1),
	);

	function updateData(data) {
		setLinkData({ ...linkData, ...data });
	}

	function saveData() {
		updateLinks({ ...linkData, typeOfEvent });
	}

	return (
		<InspectorControls>
			<Panel name="rn-usefullinks-link" title={__("Редактирование ссылки")}>
				<PanelBody
					className={"useful-links-editor__panel"}
					icon={"heading"}
					title={__("Редактирование ссылки")}
				>
					<ImagePicker updateData={updateData} />
					<InputWithLabel
						updateData={updateData}
						field={"link"}
						value={linkData.link}
						title={__("Укажите сcылку для перехода:")}
					/>
					<InputWithLabel
						updateData={updateData}
						field={"title"}
						value={linkData.title}
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
		</InspectorControls>
	);
}
