import React from "react";
import { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	const increaseCount = () => {
		setCount(count + 1);
	};

	const decreaseCount = () => {
		setCount(count - 1);
	};

	const setCountZero = () => {
		setCount(0);
	};

	return (
		<div>
			<button onClick={increaseCount}>Increase</button>
			<button onClick={decreaseCount}>Decrease</button>
			<button onClick={setCountZero}>Set to Zero</button>
			<h1>{count}</h1>
		</div>
	);
}
