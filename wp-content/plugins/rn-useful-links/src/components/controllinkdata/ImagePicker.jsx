import { MediaUpload, MediaUploadCheck } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import { Dashicon } from "@wordpress/components";
import { useState } from "react";

export default function ImagePicker({ updateData, link = null }) {
	const url = link ? link?.imgUrl : null;
	const [urlState, setUrlState] = useState(url);

	function ImageChoosens(data) {
		const url = data.sizes.medium.url;
		setUrlState(url);
		updateData({ imgUrl: url });
	}

	return (
		<div>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={ImageChoosens}
					render={({ open }) => (
						<div className="useful-links-editor__image_picker">
							<img
								className="useful-links-editor__image"
								src={
									!urlState
										? usefulLinks.pluginUrl +
										  "assets/menu_image_placeholder.jpeg"
										: urlState
								}
							/>
							<AddPicture open={open} />
						</div>
					)}
				/>
			</MediaUploadCheck>
		</div>
	);
}

function AddPicture({ open }) {
	return (
		<button onClick={open} className="useful-link-editor__add_image">
			<Dashicon icon="plus" />
		</button>
	);
}
