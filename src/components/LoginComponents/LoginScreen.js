import React, { useState } from 'react';
import PropTypes from 'prop-types';
import loginUser from '../../helpers/loginUser'


const LoginScreen = ({ setToken, isLoading }) => {

    const [userData, setUserData] = useState({
        uId: '',
        uPassword: '',
    })

    const handleUserInfoChanged = ({ target }) => {


        switch (target.name) {

            case 'username':
                setUserData({
                    ...userData,
                    uId: target.value
                })
                break;

            case 'password':

                setUserData({
                    ...userData,
                    uPassword: target.value
                })
                break;
        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const { uId, uPassword } = userData;

        const token = await loginUser({
            uId,
            uPassword
        })
        return setToken(token);
    }

    return (
        <>
            {

                isLoading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>

            }
            {
                <div className='login-form-container'>
                    <div className='login-header'>
                        <h2 className='title-center'>Inicie sesión</h2>
                    </div>
                    <form onSubmit={handleSubmit} method='GET' autoComplete='off'>
                        <input name='username' type='text' placeholder='Ingrese su usuario' autoFocus className='mb-2' required onChange={handleUserInfoChanged}></input>
                        <input name='password' type='password' placeholder='Ingrese su contraseña' className='mb-2' required onChange={handleUserInfoChanged}></input>
                        <button type='submit' className='btn login-button' ><p>Iniciar sesión</p></button>
                    </form>
                </div>
            }
        </>
    )
}

export default LoginScreen;