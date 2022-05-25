
const loginUser = async ({ uEmail, uPassword }) => {

    const url = `http://192.168.1.8:8000/api/auth/login`;

    const data = {
        uEmail: uEmail,
        uPassword: uPassword,
    };

    const addParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, addParams).catch(error => { console.error(error) });
    const { ok, message, loginData } = await response.json();

    console.log(ok);
    let info;

    if (ok && loginData !== undefined) {

        info = loginData;
        alert(message)
        return info;
        
    } else {
        alert(message);
    }
    
    const { token, username } = info;


    return {
        token: token,
        username: username
    };
}

export default loginUser;