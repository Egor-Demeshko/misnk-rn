import createLinkData from "../../js/objects/linkData";
import ImageSetting from "./ImageSetting";
import { useState } from "react";
import { Dashicon } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { ADD_LINK } from "../usefullinks/workOnLinks";

export default function AddLink({
	updateLinks,
	linksCount,
	title = "Добавить ссылку",
	icon = "plus",
}) {
	const [openEditor, setOpenEditor] = useState(false);

	return (
		<div className="rn-useful-links-editor__card">
			{openEditor && (
				<div className="rn-useful-links-editor__add-link">
					{/* <ImageSetting
						updateLinks={updateLinks}
						linksCount={linksCount}
						typeOfEvent={ADD_LINK}
					/> */}
				</div>
			)}
			<button
				className="rn-useful-links-editor__add-button"
				onClick={() => setOpenEditor(true)}
			>
				<div>
					<Dashicon icon={icon} />
				</div>
				<p> {__(title, "rn-useful-links")} </p>
			</button>
		</div>
	);
}
