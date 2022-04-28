import { useEffect, useState } from 'react';

export default function useToken() {

  const [isLoading, setIsLoading] = useState(false);

  /* Recupera el token almacenado en el session storage
  y lo devuelve como un objeto */
  const getToken = () => {
    let tokenString = sessionStorage.getItem('token');

    if (tokenString === undefined || tokenString === null) {
      return tokenString = '';
    }

    return tokenString;
  };

  const [sessionToken, setToken] = useState();

  useEffect(() => {

    setToken(getToken());

    return () => {
    }
  }, [getToken])

  console.log(sessionToken)

  const saveToken = (userToken) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token: sessionToken,
    isLoading: isLoading
  }
}
