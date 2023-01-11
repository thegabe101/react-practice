import React from "react";
import { Person } from "../data/Person";

export const People = () => {
	// const names = ["Darr", "Swanson", "Sowa"];
	const names = [
		{ name: "Swanson", age: 33 },
		{ name: "Darr", age: 33 },
		{ name: "Sowa", age: 32 },
	];
	//key is just to get rid of react warning

	return (
		<div>
			{names.map((person, key) => {
				return (
					<h1 key={key}>
						<Person name={person.name} age={person.age} />
					</h1>
				);
			})}
		</div>
	);
};

//value tree: the Person component is rendered in an h1 and returned in the People component.
// within the Person component a div is mapped of the names object array.
// returned in the h1 is the Component, which consists of an h1 that accepts props which are in the case each index of the array passed and their property, names and age.
