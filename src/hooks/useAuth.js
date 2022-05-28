import { useState } from 'react';


/* Custom Hooks -------------------------------- */

import useToken from './useToken';
import useName from './useName';
import loginUser from '../helpers/loginUser';
import useAlert from './useAlert';


const useAuth = () => {

    const { token, setToken } = useToken()

    const { userName, setUsername } = useName()

    const [ status, setStatus ] = useState(null);

    const handleLogin = async ({ uEmail, uPassword }) => {

        try {
            const { loginStatus, token, username } = await loginUser({
                uEmail,
                uPassword
            })

            console.log(loginStatus, token, username)

            return {
                loginStatus: setStatus(loginStatus),
                token: setToken(token),
                userName: setUsername(username.replace(/"/g, ''))
            };
            
        } catch (error) {
            throw alert(error)
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
        onLogout: handleLogout
    };
}

export default useAuth;
