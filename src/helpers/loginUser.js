
const loginUser = async ({ uEmail, uPassword }) => {

    const url = `http://192.168.1.8:8000/api/auth/login`;

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

    const { ok, message, loginData } = await fetchData(url, params)

    const { token, username } = loginData;
    
    return {
        loginStatus: ok,
        message: message,
        token: token,
        username: username
    };
}

const fetchData = async (url, params) => {

    let msg;

    let data;
    
    try {
        const response = await fetch(url, params);

        const { ok, message, loginData } = await response.json();
                        
        alert(message)

        msg = message;

        data = {
            ok: ok,
            message: message,
            loginData: loginData
        }
    
    } catch (e) {
    
        return alert('fetch data: ' + msg);
    }

    return data;
}

export default loginUser;