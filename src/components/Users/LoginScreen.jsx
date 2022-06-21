import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

/* Custom Hooks -------------------------------- */

/* Components -------------------------------- */
import LoadingScreen from '../LoadingScreen';

/* Styles imports -------------------------------- */
import style from "./LoginScreen.module.css";
import css from "classnames";


const LoginScreen = ({ onLogin, showAlert }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        uEmail: null,
        uPassword: null,
    })

    const [disabled, setDisabled] = useState(true)

    const [showLoading, setLoading] = useState();

    const handleUserInfoChanged = ({ target }) => {

        (!target.value) ? setDisabled(true) : setDisabled(false);

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

        const loading = await onLogin(userData, showAlert);
        console.log(loading)

        return setLoading(loading);
    }

    const handleRegister = () => {
        navigate('/api/auth/register', { replace: true })
    }

    if (!showLoading) {
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
                            <button disabled={disabled} className={css('btn', style.loginBtn)}><p>Iniciar sesión</p></button>
                            <button className={css('btn', style.registerBtn)} id='register' onClick={handleRegister}><p>Registrarse</p></button>

                        </form>
                        <div className={css(style.btnContainer, 'mt-2')}>
                            <p>Olvidaste tu contraseña?</p>
                            <Link to={'api/auth/forgot'} ><p className={style.passwordLink}>Reestablecela aquí.</p></Link>
                        </div>
                    </div>
                }
            </>
        )
    }

    if (showLoading) {
        return (
            <>
                <LoadingScreen />
            </>
        )
    }

}

export default LoginScreen;