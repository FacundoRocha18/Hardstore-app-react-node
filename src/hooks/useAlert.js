import { useState, useEffect } from 'react';

const useAlert = () => {

    const [isShowing, setIsShowing] = useState(null);

    const [ alertData, setAlertData ] = useState({
        success: null,
        alertColor: null,
        data: null
    })

    useEffect(() => {

        setIsShowing(true)

        console.log('mounted');

        const timeout = setTimeout(() => {

            setIsShowing(false)

        }, 1500)

        return () => {
            console.log('unmounted');
            clearTimeout(timeout);
        }
    }, [])

    const onClose = () => {

    
        setIsShowing(false)
    
      }

    return ({
        isShowing: isShowing,
        setIsShowing: setIsShowing,
        alertData: alertData,
        setAlertData: setAlertData,
        onClose: onClose
    })
}

export default useAlert;

