import React from "react";

export const Job = (props) => {
	const isGreen = true;

	return (
		<div>
			<h1 style={{ color: isGreen ? "green" : "black" }}>
				{props.salary}
			</h1>
			<h1> {props.position}</h1>
			<h1> {props.company}</h1>
		</div>
	);
};
