import React from "react";

export const Task = (props) => {
	return (
		<ul>
			<div>
				<li>{props.taskName}</li>
				<button onClick={() => props.taskFinished(props.id)}>
					Task finished
				</button>
			</div>
		</ul>
	);
};
