import React, { useState } from "react";

export const StatePractice = () => {
	const [age, setAge] = useState(0);

	const increaseAge = () => {
		setAge((Math.floor(age) * 7) / 3 + 1).float();
	};

	return (
		<div>
			<button onClick={increaseAge}>{age}</button>
		</div>
	);
};
