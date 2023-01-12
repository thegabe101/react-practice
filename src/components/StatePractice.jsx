import React, { useState, useEffect } from "react";

export const StatePractice = () => {
	const [age, setAge] = useState(0);
	const [text, setText] = useState("");
	const [header, setHeader] = useState(false);
	const [headerColor, setHeaderColor] = useState("red");

	//good place to put an intiial api call- will fetch data immediately
	//final array tells us what states we want to trigger the useeffect

	useEffect(() => {
		console.log("component mounted");
		console.log("logic to call api here");

		//return function is executed when component unmounts
		return () => {
			console.log("component unmounted");
			console.log("logic to stop call to api here");
		};
	}, [text, header]);

	const increaseAge = () => {
		setAge((Math.floor(age) * 7) / 3 + 1).float();
	};

	const myText = (event) => {
		console.log(event.target.value);
		setText(event.target.value);
	};

	//component lifecycle: mounting stage, updating stage, unmounting stage
	//mounting: component starting to exist
	//unmounting: component ceasing to exist
	//useeffect is a hook that does something depending on what stage of the lifecycle your page is in
	//i.e. actions depending on whether component is mounting, unmounting, updating, etc

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
