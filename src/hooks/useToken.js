import { useEffect, useState } from 'react';

export default function useToken() {

  const [sessionToken, setToken] = useState(null);

  /* Recupera el token almacenado en el session storage
  y lo devuelve como un string */

  const getToken = () => {

    const tokenString = sessionStorage.getItem('token');

    return tokenString;
  };

  useEffect(() => {

    setToken(getToken());

    return () => {
    }
  }, [getToken])

  const saveToken = (userToken) => {
    
    if (userToken === '' || userToken === null || userToken === undefined) {
      throw alert('token invalido')
    }

    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token: sessionToken,
  }
}
