import React from "react";
import { useState } from "react";

export const AddTask = () => {
	const [newTask, setNewTask] = useState("");
	const [list, setList] = useState([]);

	const enterTask = (event) => {
		console.log(event.target.value);
		setNewTask(event.target.value);
	};

	// spread operator is super important in react; create an array that is composed of everything in existing array
	const btnAdd = () => {
		const newToDoList = [...list, newTask];
		setList(newToDoList);
	};

	const taskFinished = (taskName) => {
		setList(list.filter((task) => task !== taskName));
	};

	return (
		<div className="addTask">
			<input onChange={enterTask} />
			<button onClick={btnAdd}>Add Task to List</button>
			{list.map((e) => (
				<ul>
					<div>
						<li>{e}</li>
						<button onClick={() => taskFinished(e)}>
							Task finished
						</button>
					</div>
				</ul>
			))}
		</div>
	);
};
