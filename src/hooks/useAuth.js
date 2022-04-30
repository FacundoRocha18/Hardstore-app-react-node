import useToken from './useToken';
import loginUser from '../helpers/loginUser';

const useAuth = () => {

    const { token, setToken } = useToken()

    const handleLogin = async (userData) => {
        const { uId, uPassword } = userData;

        const token = await loginUser({
            uId,
            uPassword
        })
        return setToken(token);
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
        isAuth: isAuthenticated,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };
}

export default useAuth;
