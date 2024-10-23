import { Dashicon } from "@wordpress/components";
import { activateRedactor } from "../../js/stateShare/imagePicker";
import { __ } from "@wordpress/i18n";
import createLinkData from "../../js/objects/linkData";

export default function AddLink({
	title = "Добавить ссылку",
	icon = "plus",
	link = null,
	linksCount,
}) {
	return (
		<div className="rn-useful-links-editor__card">
			<button
				className="rn-useful-links-editor__add-button"
				onClick={() => activateRedactor(link ?? createLinkData(linksCount + 1))}
			>
				<div>
					<Dashicon icon={icon} />
				</div>
				<p> {__(title, "rn-useful-links")} </p>
			</button>
		</div>
	);
}
