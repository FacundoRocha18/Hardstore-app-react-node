
const loginUser = async ({uId, uPassword}) => {

    const url = `http://localhost:8000/api/auth/login?uid=${uId}&upassword=${uPassword}`;
    const response = await fetch( url ).catch((error) => console.error(error));
    const res = await response.json();
    
    const { token } = res
        
    return token;
}

export default loginUser;