import ControlImageFromRow from "../controllinkdata/ControlImageFromRow";

export default function LinkCard({ linksCount, updateLinks, link }) {
	return (
		<div className="rn-useful-links-editor__card">
			<div className="rn-useful-links-editor__card-img-wrapper">
				<img
					className="rn-useful-links-editor__card-img"
					src={link.imgUrl}
				></img>
			</div>
			<p className="rn-useful-links-editor__card-text">{link?.title}</p>
			<ControlImageFromRow
				linksCount={linksCount}
				updateLinks={updateLinks}
				link={link}
			/>
		</div>
	);
}
