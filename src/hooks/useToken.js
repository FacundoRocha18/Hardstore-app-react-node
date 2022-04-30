import { useEffect, useState } from 'react';

export default function useToken() {

  /* Recupera el token almacenado en el session storage
  y lo devuelve como un string */

  const getToken = () => {
    let tokenString = sessionStorage.getItem('token');

    if (tokenString === undefined || tokenString === null) {
      return tokenString = '';
    }

    return tokenString;
  };

  const [sessionToken, setToken] = useState(null);

  useEffect(() => {

    setToken(getToken());

    return () => {
    }
  }, [getToken])

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token: sessionToken,
  }
}
