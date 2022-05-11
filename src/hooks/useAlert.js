import { useState, useEffect } from "react";

const useAlert = () => {

    const [ isShowing, setIsShowing] = useState(null);

    const [ message, setMessage ] = useState(null);

    const [ type, setType ] = useState(null);

    useEffect(() => {
        
        const timer = setTimeout(() => setIsShowing('out'), 3000);
    
      return () => {
        clearTimeout(timer);
      }
    })
    

    const onClose = (e) => {

        e.preventDefault();
        
        setIsShowing('out')
        
    }

    return ({
        isShowing: isShowing,
        setIsShowing: setIsShowing,
        message: message,
        setMessage: setMessage,
        type: type,
        setType: setType,
        onClose: onClose
    })
}

export default useAlert;