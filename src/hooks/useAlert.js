import { useState, useEffect } from "react";

const useAlert = () => {

  const [isShowing, setIsShowing] = useState(null);

  const [message, setMessage] = useState(null);

  const [type, setType] = useState(null);

  useEffect(() => {

    const timer = setTimeout(() => setIsShowing('out'), 3000);

    return () => {
      clearTimeout(timer);
    }
  })

  const showAlert = (message, type, state) => {

    setMessage(message);
    setType(type);
    setIsShowing(state);
  };


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
    showAlert: showAlert,
    onClose: onClose
  })
}

export default useAlert;