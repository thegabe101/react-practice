import React, { useState } from "react";

export const StatePractice = () => {
	const [age, setAge] = useState(0);
	const [text, setText] = useState("");
	const [header, setHeader] = useState(false);
	const [headerColor, setHeaderColor] = useState("red");

	const increaseAge = () => {
		setAge((Math.floor(age) * 7) / 3 + 1).float();
	};

	const myText = (event) => {
		console.log(event.target.value);
		setText(event.target.value);
	};

	return (
		<div>
			<button onClick={increaseAge}>{age}</button>
			<input type="text" onChange={myText} />
			{text}
			<button
				onClick={() => {
					setHeader(!header);
					setHeaderColor("yellow");
				}}
			>
				Show text
			</button>
			{!header ? (
				<h1 style={{ color: headerColor }}>no text</h1>
			) : (
				<h1>text</h1>
			)}
		</div>
	);
};
