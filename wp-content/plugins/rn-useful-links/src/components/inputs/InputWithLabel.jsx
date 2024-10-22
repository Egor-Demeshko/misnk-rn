import { __ } from "@wordpress/i18n";
import { useState } from "react";

export default function InputWithLabel({ updateData, value, field, title }) {
	const [valueState, setValueState] = useState(value);

	function updateFromInput(e) {
		const target = e.target ?? null;
		if (!target) return;
		updateData({
			[field]: target.value,
		});
	}

	return (
		<label className="rn-useful-links-editor__input-with-label">
			<span>{title}</span>
			<input
				onChange={updateFromInput}
				value={valueState}
				onInput={(e) => setValueState(e.target.value)}
			/>
		</label>
	);
}
