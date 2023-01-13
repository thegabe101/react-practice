import { useCounter } from "./useCounter";

export const Count = () => {
	const { count, increase, decrease, reset } = useCounter();

	return (
		<div>
			<button onClick={increase}>Increase count</button>
			<button onClick={decrease}>Descrease count</button>
			<button onClick={reset}>Reset counter</button>
			{count}
		</div>
	);
};
