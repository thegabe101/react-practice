import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export const Excuser = () => {
	const [excuse, setExcuse] = useState("");

	const fetchData = (excuse) => {
		axios
			.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
			.then((res) => {
				console.log(res);
				setExcuse(res.data[0].excuse);
			});
	};

	return (
		<div>
			<h1>Generate an Excuse to Escape your Obligations!</h1>
			<button onClick={() => fetchData("party")}>Family</button>
			<button onClick={() => fetchData("unbelievable")}>
				Unbelievable
			</button>
			<button onClick={() => fetchData("funny")}>Funny</button>
			<h1>{excuse}</h1>
		</div>
	);
};
