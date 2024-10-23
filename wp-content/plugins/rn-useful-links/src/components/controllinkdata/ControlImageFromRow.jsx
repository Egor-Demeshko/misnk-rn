import AddLink from "./AddLink";

export default function ControlImageFromRow({ link }) {
	return (
		<div className="rn-useful-links-editor__image-controll">
			<AddLink
				title={"Изменить информацию"}
				icon={"admin-customizer"}
				link={link}
			/>
		</div>
	);
}
