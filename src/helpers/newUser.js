const newUser = async ({ uEmail, uName, uAddress, uPhone, uPassword }) => {

    const url = `http://192.168.1.8:8000/api/auth/register/new`;

    const data = {
        email: uEmail,
        name: uName,
        address: uAddress,
        phone: uPhone,
        password: uPassword,
    };

    const addParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    };

    fetch(url, addParams)
        .then((res) => {alert('Se ha registrado con éxito.')})
        .catch((error) => console.error(error));


}

export default newUser;