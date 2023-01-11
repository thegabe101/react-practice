import React from "react";
import { Job } from "../data/Job";

export default function Jobs() {
	const age = 19;
	age >= 18 ? console.log("Able to work") : console.log("Too young to work");

	if (age > 18) {
		return (
			<div>
				<Job
					salary={99999}
					position="Senior Dev"
					company="Local company"
				/>
				<Job
					salary={50000}
					position="Warehouse Manager"
					company="SODO Warehouse"
				/>
				<Job salary={18000000} position="player" company="Mariners" />
			</div>
		);
	}
	return (
		<div>
			<h1>Too young to work</h1>
		</div>
	);
}
