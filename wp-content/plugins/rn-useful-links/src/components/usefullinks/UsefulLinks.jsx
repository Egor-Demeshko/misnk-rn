import { useState, useReducer } from "react";
import { RichText } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import workOnLinks from "./workOnLinks";
import LinkCard from "../linkcard/LinkCard";
import AddLink from "../controllinkdata/AddLink";
import ImageSetting from "../controllinkdata/ImageSetting";
import { UPDATE_LINK } from "./workOnLinks";

export default function UsefulLinks({ attributes, setAttributes }) {
	// blockTitle // linksData
	const { blockTitle, linksData } = attributes;
	const [title, setTitle] = useState(blockTitle);
	const [links, updateLinks] = useReducer((state, action) => {
		const newLinks = workOnLinks({
			links: state,
			action,
		});
		setTimeout(() => setAttributes({ linksData: newLinks }), 50);
		return newLinks;
	}, linksData);

	return (
		<section className="rn-useful-links-editor">
			<ImageSetting
				updateLinks={updateLinks}
				linksCount={links.length}
				link={link}
				typeOfEvent={UPDATE_LINK}
			/>
			<RichText
				tagName={"h4"}
				value={title}
				className="rn-useful-links-editor__title rn-useful-links-editor__is-hovered"
				placeholder={__("Введите название блока: ")}
				onChange={(value) => setTitle(value)}
			/>

			<div className="rn-useful-links-editor__list">
				{links.length > 0 &&
					links.map((link) => (
						<LinkCard
							key={link.id}
							linksCount={links.length}
							updateLinks={updateLinks}
							link={link}
						/>
					))}
				<AddLink updateLinks={updateLinks} linksCount={links.length} />
			</div>
		</section>
	);
}
