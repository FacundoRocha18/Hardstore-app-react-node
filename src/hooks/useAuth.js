import { useState } from 'react';


/* Custom Hooks -------------------------------- */
import useToken from './useToken';
import useName from './useName';

/* Helpers -------------------------------- */
import loginUser from '../helpers/getLogin';


const useAuth = () => {

    const [loading, setLoading] = useState(true);

    const { token, setToken } = useToken()

    const { userName, setUsername } = useName()

    const handleLogin = async ({ uEmail, uPassword }, showAlert) => {

        try {
            const {
                loginStatus,
                message,
                token,
                username
            } = await loginUser(uEmail, uPassword);

            if (!loginStatus) {
                return showAlert(message, 'error', true)
            }

            showAlert(message, 'info', true);
            setLoading(true);

            setTimeout(() => {
                return {
                    token: setToken(token),
                    userName: setUsername(username)
                };
            }, 2000);

            return loading;


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
