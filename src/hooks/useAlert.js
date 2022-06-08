import { useState, useEffect } from "react";

const useAlert = () => {

  const [isShowing, setIsShowing] = useState(null);

  const [message, setMessage] = useState(null);

  const [type, setType] = useState(null);

  useEffect(() => {

    const timer = setTimeout(() => setIsShowing(false), 3000);

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

    setIsShowing(false)

  }

  return ({
    isShowing: isShowing,
    message: message,
    type: type,
    showAlert: showAlert,
    onClose: onClose
  })
}

export default useAlert;