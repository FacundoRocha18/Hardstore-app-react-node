import { useState } from 'react';
import useToken from './useToken';
import useName from './useName';
import loginUser from '../helpers/loginUser';


const useAuth = () => {

    const { token, setToken } = useToken()

    const  { userName, setUsername }  = useName()


    const handleLogin = async (userData) => {
        const { uId, uPassword } = userData;

        const userInfo = await loginUser({
            uId,
            uPassword
        })
        const {token, username} = userInfo;
        alert('Bienvenido ' + username)
        return {
            token: setToken(token),
            userName: setUsername(username)
        };
    }

    const handleLogout = () => {
        sessionStorage.clear();
        alert('Hasta pronto ' + userName)
        window.location.reload(false);
    };

    const isAuthenticated = (token) => {
        let isAuthenticated;

        return (token)
            ?
            (isAuthenticated = true)
            :
            (isAuthenticated = false)
    }

    return {
        token,
        username: userName,
        isAuth: isAuthenticated,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };
}

export default useAuth;
