const newUser = async ({ uId, uName, uAddress, uPhone, uPassword }) => {

    const url = `http://localhost:8000/api/auth/login?uid=${uId}&upassword=${uPassword}`;
    const response = await fetch( url ).catch((error) => console.error(error));
    const res = await response.json();
    
    const { token, username } = res
        
    return {
        token: token,
        username: username
    };
}

export default loginUser;