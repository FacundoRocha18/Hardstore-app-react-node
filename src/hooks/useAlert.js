import { useState, useEffect } from "react";

const useAlert = () => {

    const [ isShowing, setIsShowing] = useState(false);

    useEffect(() => {

        console.log('mounted');

        const timeout = setTimeout(() => {

            setIsShowing(false)

        }, 3000)

        return () => {
            console.log('unmounted');
            clearTimeout(timeout);
        }
    }, [])

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