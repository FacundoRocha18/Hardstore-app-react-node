
const loginUser = async (uEmail, uPassword) => {

    const url = `http://206.246.74.221:8080/api/auth/login`;

    const data = {
        uEmail: uEmail,
        uPassword: uPassword,
    };

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    const { ok, message, loginData } = await fetchData(url, params);

    const { token, username } = loginData;

    return {
        loginStatus: ok,
        message: message,
        token: token,
        username: username
    };
}

const fetchData = async (url, params) => {

    const response = await fetch(url, params)
        .catch((error) => console.error(error));

    const { ok, message, loginData } = await response.json()
        .catch((error) => console.error(error));

    return {
        ok: ok,
        message: message,
        loginData: loginData
    };
}

export default loginUser;