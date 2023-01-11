import React from "react";
import { useState } from "react";
import { Task } from "../data/Task";
import "../styles/task.css";

export const AddTask = () => {
	const [newTask, setNewTask] = useState("");
	const [list, setList] = useState([]);

	const enterTask = (event) => {
		console.log(event.target.value);
		setNewTask(event.target.value);
	};

	// spread operator is super important in react; create an array that is composed of everything in existing array
	const btnAdd = () => {
		// const newToDoList = [...list, newTask];
		// setList(newToDoList);

		const task = {
			id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
			taskName: newTask,
		};

		setList([...list, task]);
	};

	const taskFinished = (id) => {
		setList(list.filter((task) => task.id !== id));
	};

	return (
		<div className="addTask">
			<input onChange={enterTask} />
			<button onClick={btnAdd}>Add Task to List</button>
			{list.map((e) => (
				<Task name={e.taskName} id={e.id} taskFinished={taskFinished} />
			))}
		</div>
	);
};
