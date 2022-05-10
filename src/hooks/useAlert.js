import { useState, useEffect } from "react";

const useAlert = () => {

    const [ isShowing, setIsShowing] = useState(false);

    const onClose = (e) => {

        e.preventDefault();

        setIsShowing(false)
    }

    return ({
        isShowing: isShowing,
        setIsShowing: setIsShowing,
        onClose: onClose
    })
}

export default useAlert;