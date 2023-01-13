import { useState } from "react";

export const useCounter = (initialVal = 0) => {
    const [count, setCount] = useState(initialVal);

    const increase = () => {
        setCount((prev) => prev + 1)
    }

    const decrease = () => {
        setCount((prev) => prev - 1)
    }

    const reset = () => {
        setCount((prev) => prev = 0)
    }

    return { count, increase, decrease, reset };
}