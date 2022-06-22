const newUser = async ({ uEmail, uName, uAddress, uPhone, uPassword }) => {


    const HOST = 'api.hardstore.store'

    const PROTOCOL = 'https';

    const url = `${PROTOCOL}://${HOST}/auth/register/new`;

    const data = {
        email: uEmail,
        name: uName,
        address: uAddress,
        phone: uPhone,
        password: uPassword,
    };

    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    const { ok, message } = await fetchNewUser(url, params)

    return { ok, message };
}

const fetchNewUser = async (url, params) => {

    const response = await fetch(url, params)
        .catch((error) => console.error(error));

    const { ok, message } = await response.json()
        .catch((error) => console.error(error));


    return {
        ok: ok,
        message: message
    };
}

export default newUser;