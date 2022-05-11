import { useEffect, useState } from 'react';

export default function useToken() {

  /* Recupera el token almacenado en el session storage
  y lo devuelve como un string */

  const getToken = () => {
    let tokenString = sessionStorage.getItem('token');

    if (tokenString === undefined || tokenString === null) {
      tokenString = '';
      return console.log('token invalido, esto puede deberse a que intentó ingresar con un usuario incorrecto o ingresó mal sus credenciales');
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
    
    if (userToken === '' || userToken === null || userToken === undefined) {
      throw alert('token invalido, esto puede deberse a que intentó ingresar con un usuario incorrecto o ingresó mal sus credenciales')
    }

    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token: sessionToken,
  }
}
