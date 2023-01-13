import { useState } from "react";

export const useToggle = (initValue = false) => {
    const [isVisible, setIsVisible] = useState(initValue);

    const toggle = () => {
        setIsVisible((prev) => !prev)
    }


    return [isVisible, toggle]

}