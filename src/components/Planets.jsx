import React from "react";
import { Planet } from "../data/Planet";

export const Planets = () => {
	const planetArray = [
		{ name: "Mars", isGasPlanet: false },
		{ name: "Earth", isGasPlanet: false },
		{ name: "Jupiter", isGasPlanet: true },
		{ name: "Venus", isGasPlanet: false },
		{ name: "Neptune", isGasPlanet: true },
		{ name: "Uranus", isGasPlanet: true },
	];

	return (
		<div>
			{planetArray.map((planet, key) => {
				if (planet.isGasPlanet) {
					return <Planet name={planet.name + " is a gas planet"} />;
				}
				if (!planet.isGasPlanet) {
					return (
						<Planet name={planet.name + " is not a gas planet"} />
					);
				}
			})}
		</div>
	);
};
