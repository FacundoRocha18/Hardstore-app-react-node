
/* Custom Hooks -------------------------------- */

import useToken from './useToken';
import useName from './useName';
import loginUser from '../helpers/loginUser';
import useAlert from './useAlert';


const useAuth = () => {

    const { token, setToken } = useToken()

    const { userName, setUsername } = useName()

    const handleLogin = async ({ uEmail, uPassword }) => {

        try {
            const { token, username } = await loginUser({
                uEmail,
                uPassword
            })

            return {
                token: setToken(token),
                userName: setUsername(username.replace(/"/g, ''))
            };
            
        } catch (error) {
            throw console.log('token invalido, esto puede deberse a que intentó ingresar con un usuario incorrecto o ingresó mal sus credenciales' + error)
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
