import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

/* Custom Hooks -------------------------------- */
import useAuth from '../../hooks/useAuth';

/* Components -------------------------------- */
import ToastAlert from '../Alerts/Alert'

/* Styles imports -------------------------------- */
import style from "./LoginScreen.module.css";
import css from "classnames";


const LoginScreen = ({ onLogin, isShowing, setIsShowing, message, setMessage, type, setType, onClose }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        uEmail: null,
        uPassword: null,
    })

    const [isDisabled, setDisabled] = useState(true)

    const { uEmail, uPassword } = userData;

    useEffect(() => {

        if (!uEmail || !uPassword) {
            return setDisabled(true);
        }
        setDisabled(false);

        return () => {
        }
    }, [userData])


    const { username, status, loginMessage } = useAuth();

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

        let msg;

        try {

            const { status, message } = await onLogin(userData)

            console.log(status, message)

            msg = message;

            setTimeout(() => {
                setMessage(`Bienvenido ${username}`)
                setType('success');
                setIsShowing(true)
            }, 1000);

        } catch (err) {

            setMessage('Se produjo un error al iniciar sesión ' + msg);
            setType('error');
            setIsShowing(true);
        }

    }

    const handleRegister = () => {
        navigate('/api/auth/register', { replace: true })
    }

    return (
        <>
            {
                <div className={style.container}>
                    <div className='login-header mb-2'>
                        <h2 className='title-center'>Inicie sesión</h2>
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} autoComplete='off'>
                        <div className={css('mb-2', style.inputWrapper)}>
                            <label htmlFor='email'>Tu email</label>
                            <input name='email' id='email' type='text' placeholder='example@email.com' autoFocus required onChange={handleUserInfoChanged}></input>

                        </div>
                        <div className={css('mb-2', style.inputWrapper)}>
                            <label htmlFor='password'>Tu contraseña</label>
                            <input name='password' id='password' type='password' placeholder='contraseña' required onChange={handleUserInfoChanged}></input>

                        </div>
                        <button disabled={isDisabled} className={css('btn', style.loginBtn)}><p>Iniciar sesión</p></button>
                        <button className={css('btn', style.registerBtn)} id='register' onClick={handleRegister}><p>Registrarse</p></button>

                    </form>
                    <div className={css(style.btnContainer, 'mt-2')}>
                        <p>Olvidaste tu contraseña?</p>
                        <Link to={'api/auth/forgot'} ><p className={style.passwordLink}>Reestablecela aquí.</p></Link>
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