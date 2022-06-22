import React, { useState } from 'react';

/* Helpers -------------------------------- */
import newUser from '../../helpers/getSignup'

/* Styles imports -------------------------------- */
import style from "./RegisterScreen.module.css";
import css from "classnames";

const RegisterScreen = ({ setRedirect, showAlert }) => {

    const [userData, setUserData] = useState({
        uEmail: null,
        uName: null,
        uAddress: null,
        uPhone: null,
        uPassword: null,
    })

    const [disabled, setDisabled] = useState(true)


    const handleUserInfoChanged = ({ target }) => {

        (!target.value) ? setDisabled(true) : setDisabled(false);

        switch (target.name) {

            case 'email':
                setUserData({
                    ...userData,
                    uEmail: target.value
                })
                break;

            case 'name':
                setUserData({
                    ...userData,
                    uName: target.value
                })
                break;

            case 'address':
                setUserData({
                    ...userData,
                    uAddress: target.value
                })
                break;

            case 'phone':
                setUserData({
                    ...userData,
                    uPhone: target.value
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
            const { ok, message } = await newUser(userData);

            (ok) ? showAlert(message, 'info', true) : showAlert(message, 'error', true);
        } catch (error) {
            return showAlert('Ocurrió un error ' + error, 'error', true)
        }

        setTimeout(() => setRedirect(true), 500);
    }

    return (
        <>
            <div>
                <div className={style.container}>
                    <div className='register-header'>
                        <h2 className='title-center mb-2 '>Crear una cuenta</h2>
                    </div>
                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <div className={style.input_container}>
                            <label htmlFor='email'>Su email</label>
                            <input name='email' className='mb-2' id='email' type='text' placeholder='email@email.com ' autoFocus required onChange={handleUserInfoChanged}></input>
                        </div>
                        <div className={style.input_container}>
                            <label htmlFor='name'>Su nombre completo</label>
                            <input name='name' className='mb-2' id='name' type='text' placeholder='nombre' required onChange={handleUserInfoChanged}></input>
                        </div>
                        <div className={style.input_container}>
                            <label htmlFor='address'>Su dirección</label>
                            <input name='address' className='mb-2' id='address' type='text' placeholder='dirección' required onChange={handleUserInfoChanged}></input>
                        </div>
                        <div className={style.input_container}>
                            <label htmlFor='phone'>Su número de teléfono</label>
                            <input name='phone' className='mb-2' id='phone' type='text' placeholder='teléfono' required onChange={handleUserInfoChanged}></input>

                        </div>
                        <div className={style.input_container}>
                            <label htmlFor='password'>Cree una contraseña</label>
                            <input name='password' className='mb-2' id='password' type='password' placeholder='contraseña' required onChange={handleUserInfoChanged}></input>

                        </div>

                        <button disabled={disabled} type='submit' className={css('btn', style.submitBtn)}><p>Crear cuenta</p></button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen;