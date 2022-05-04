import React, { useState } from 'react';

const RegisterScreen = (props) => {

    const [userData, setUserData] = useState({
        uId: null,
        uName: null,
        uAddress: null,
        uPhone: null,
        uPassword: null,
    })

    const handleUserInfoChanged = ({ target }) => {

        switch (target.name) {

            case 'userid':
                setUserData({
                    ...userData,
                    uId: target.value
                })
                break;

            case 'username':
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

/*         onLogin(userData);
 */    }

    return (
        <>
            <div>
                <div className='register-form-container pd-4'>
                    <div className='register-header'>
                        <h2 className='title-center mb-2 '>Crear una cuenta</h2>
                    </div>
                    <form onSubmit={handleSubmit} method='POST' autoComplete='off'>
                        <div className='register-form-group mb-2'>
                            <label htmlFor='userid'><p>Tu email: </p></label>
                            <input name='userid' id='userid' type='text' placeholder='email@email.com ' autoFocus  required onChange={handleUserInfoChanged}></input>
                        </div>

                        <div className='register-form-group mb-2'>
                            <label htmlFor='userid'><p>Tu nombre: </p></label>
                            <input name='username' id='username' type='text' placeholder='nombre'   required onChange={handleUserInfoChanged}></input>
                        </div>

                        <div className='register-form-group mb-2'>
                            <label htmlFor='address'><p>Tu dirección: </p></label>
                            <input name='address' id='address' type='text' placeholder='dirección'   required onChange={handleUserInfoChanged}></input>
                        </div>

                        <div className='register-form-group mb-2'>
                            <label htmlFor='phone'><p>Tu teléfono: </p></label>
                            <input name='phone' id='phone' type='text' placeholder='teléfono'   required onChange={handleUserInfoChanged}></input>
                        </div>

                        <div className='register-form-group mb-2'>
                        <label htmlFor='password'><p>Tu contraseña: </p></label>
                        <input name='password' id='password' type='password' placeholder='contraseña'  required onChange={handleUserInfoChanged}></input>
                        </div>

                        <button type='submit' className='btn register-submit-button'><p>Crear cuenta</p></button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default RegisterScreen;