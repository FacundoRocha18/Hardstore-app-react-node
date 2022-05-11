import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

/* Custom Hooks -------------------------------- */
import useAuth from '../../hooks/useAuth';

/* Components -------------------------------- */
import ToastAlert from '../Alerts/ToastAlert'


const LoginScreen = ({ onLogin, isShowing, setIsShowing, message, setMessage, type, setType, onClose }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        uEmail: null,
        uPassword: null,
    })

    const { username } = useAuth();

    const handleUserInfoChanged = ({ target }) => {

        switch (target.name) {

            case 'email':
                setUserData({
                    ...userData,
                    uEmail: target.value
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

        try {

            onLogin(userData)
            setTimeout(() => {
                setMessage(`Bienvenido ${username}`)
                setType('success');
                setIsShowing(true)
            }, 1000);

        } catch (error) {

            setMessage('Se produjo un error al iniciar sesión ' + error)
            setType('error');
            setIsShowing(true)
        }

    }

    const handleRegister = () => {
        navigate('/api/auth/register', { replace: true })
    }

    return (
        <>
            {
                <div className='login-form-container'>
                    <div className='login-header mb-2'>
                        <h2 className='title-center'>Inicie sesión</h2>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <input name='email' type='text' placeholder='Ingrese su email' className='mb-2' autoFocus required onChange={handleUserInfoChanged}></input>
                        <input name='password' type='password' placeholder='Ingrese su contraseña' className='mb-2' required onChange={handleUserInfoChanged}></input>
                        <button type='submit' className='btn login-button'><p>Iniciar sesión</p></button>
                        <button className='register-btn btn' id='register' onClick={handleRegister}><p>Registrarse</p></button>

                    </form>
                    <div className='login-buttons-container mt-2'>
                        <p>Olvidaste tu contraseña?</p>
                        <Link to={'api/auth/forgot'} ><p className='password-link'>Reestablecela aquí.</p></Link>
                    </div>
                </div>
            }
            {
                <ToastAlert type={type} message={message} isShowing={isShowing} onClose={onClose} />
            }
        </>
    )
}

export default LoginScreen;