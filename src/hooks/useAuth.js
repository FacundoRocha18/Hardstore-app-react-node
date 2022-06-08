import { useState } from 'react';


/* Custom Hooks -------------------------------- */

import useToken from './useToken';
import useName from './useName';
import loginUser from '../helpers/getLogin';


const useAuth = () => {

    const { token, setToken } = useToken()

    const { userName, setUsername } = useName()

    const handleLogin = async ({ uEmail, uPassword }, showAlert) => {

        let msg;

        try {
            const {
                loginStatus,
                message,
                token,
                username
            } = await loginUser(uEmail, uPassword);

            msg = message;

            (loginStatus) ? showAlert(message, 'info', true) : showAlert(message, 'error', true);

            setTimeout(() => {
                return {
                    token: setToken(token),
                    userName: setUsername(username)
                };
            }, 1000);

        } catch (e) {
            return showAlert('Ocurrió un error ' + e, 'info', true);
        }
    }

    const handleLogout = () => {
        sessionStorage.clear();
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
