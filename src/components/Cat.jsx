import React from "react";
import { useGetCat } from "./useGetCat";

export const Cat = () => {
	const { data, isCatLoading, refetchData } = useGetCat();

	if (isCatLoading) return <h1>Cat data loading...</h1>;

	return (
		<div>
			<button onClick={refetchData}>Refresh</button>
			{data?.fact}
		</div>
	);
};
