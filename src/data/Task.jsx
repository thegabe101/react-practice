import React from "react";

export const Task = (props) => {
	return (
		<ul>
			<div
				style={{ backgroundColor: props.progress ? "green" : "white" }}
			>
				<h1>{props.taskName}</h1>
				<button onClick={() => props.taskProgress(props.id)}>
					Mark task in progress
				</button>
				<button onClick={() => props.taskFinished(props.id)}>
					Delete task
				</button>
			</div>
		</ul>
	);
};
