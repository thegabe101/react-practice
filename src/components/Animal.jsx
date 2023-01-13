import PropTypes from "prop-types";

export const Animal = (props) => {
	return (
		<div>
			<h1>Species: {props.species}</h1>
			<h1>Habitat: {props.habitat}</h1>
			<h1>Demeanor: {props.demeanor}</h1>
			<h1>Friends: {props.friends}</h1>
		</div>
	);
};

Animal.propTypes = {
	species: PropTypes.string,
	habitat: PropTypes.string,
	demeanor: PropTypes.string,
	friends: PropTypes.arrayOf(PropTypes.string),
};
