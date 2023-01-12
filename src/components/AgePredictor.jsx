import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const AgePredictor = () => {
	const [name, setName] = useState("");
	const [predictedAge, setPredictedAge] = useState(null);

	const fetchData = () => {
		axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
			console.log(res.data);
			setPredictedAge(res.data);
		});
	};

	return (
		<div>
			<input
				placeholder="Name here..."
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<button onClick={fetchData}>Predict Age</button>
			<h1>Name: {predictedAge?.name}</h1>
			<h1>Predicted Age: {predictedAge?.age}</h1>
		</div>
	);
};

//? allows us to only access age and name once they are not null- a useful trick
