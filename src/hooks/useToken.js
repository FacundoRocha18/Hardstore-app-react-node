import { useEffect, useState } from 'react';

export default function useToken() {

  const [sessionToken, setSessionToken] = useState(null);

  /* Recupera el token almacenado en el session storage
  y lo devuelve como un string */

  const getToken = () => {

    const tokenString = sessionStorage.getItem('token');

    return tokenString;
  };

  useEffect(() => {

    setSessionToken(getToken());

    return () => {
    }
  }, [getToken])

  const saveToken = (userToken) => {
    
    if (userToken === '' || userToken === null || userToken === undefined) {
      return;
    }

    sessionStorage.setItem('token', JSON.stringify(userToken));
    setSessionToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token: sessionToken,
  }
}
