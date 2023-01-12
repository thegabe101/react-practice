import React from "react";
import { useState } from "react";

export const CatFact = () => {
	const [catFact, setCatFact] = useState("");

	// const facts = [
	// 	{
	// 		fact: "",
	// 	},
	// ];

	//would normally use axios here but for practice this is fine

	// useEffect(() => {

	// }, []);

	// const kittyFact = fetch("https://catfact.ninja/fact").then((response) =>
	// 	response.json().then((data) => {
	// 		console.log(data.fact);
	// 		return data.fact;
	// 	})
	// );

	const grabCatFact = () => {
		fetch("https://catfact.ninja/fact").then((response) =>
			response.json().then((data) => {
				console.log(data.fact);
				setCatFact(data.fact);
			})
		);
	};

	return (
		<div>
			<button onClick={grabCatFact}>Generate a cat fact</button>
			<p>{catFact}</p>
		</div>
	);
};
