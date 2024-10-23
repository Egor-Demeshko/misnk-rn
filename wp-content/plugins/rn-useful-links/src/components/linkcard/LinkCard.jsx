import ControlImageFromRow from "../controllinkdata/ControlImageFromRow";
import { DELETE_LINK } from "../usefullinks/workOnLinks";
import DeleteButton from "../buttons/DeleteButton";

export default function LinkCard({ link, updateLinks }) {
	function onDelete() {
		updateLinks({ id: link.id, type: DELETE_LINK });
	}

	return (
		<div className="rn-useful-links-editor__card">
			<div className="rn-useful-links-editor__card-img-wrapper">
				<img
					className="rn-useful-links-editor__card-img"
					src={link.imgUrl}
				></img>
			</div>
			<p className="rn-useful-links-editor__card-text">{link?.title}</p>
			<ControlImageFromRow link={link} />
			<DeleteButton id={link.id} onDelete={onDelete} />
		</div>
	);
}
