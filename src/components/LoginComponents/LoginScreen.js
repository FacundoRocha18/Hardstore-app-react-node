import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getAuth from '../../hooks/useAuth'


const LoginScreen = ({ onLogin }) => {

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

        onLogin(userData);
    }

    return (
        <>
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