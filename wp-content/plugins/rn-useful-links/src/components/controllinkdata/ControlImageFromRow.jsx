import AddLink from "./AddLink";

export default function ControlImageFromRow({ linksCount, updateLinks, link }) {
	return (
		<div className="rn-useful-links-editor__image-controll">
			<AddLink title={"Изменить информацию"} icon={"admin-customizer"} />
		</div>
	);
}
