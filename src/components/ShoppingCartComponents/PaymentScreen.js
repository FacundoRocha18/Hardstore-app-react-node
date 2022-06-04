import React, { useState } from 'react'

/* Styles imports */
import style from "./payment.module.css";
import css from "classnames";

export const PaymentScreen = () => {

    const [paymentData, setPaymentData] = useState({
        type: null,
        email: null,
        number: null,
        exp: null,

    });

    const [isChecked, setIsChecked] = useState(false);
    console.log(isChecked);

    const handleChange = ({target}) => {

    }

    const handleClick = (e) => {



    };


    return (
        <>
            <div className='main-content-wrapper'>
                <div className={style.container}>
                    <div className={style.header}>
                        <h2 className='title-center'>Payment options</h2>
                    </div>
                    <div className={style.body}>
                        <div className={style.buttons}>
                            <button className={style.button}>
                                <span className="material-icons-round">
                                    credit_card
                                </span></button>
                            <button className={style.button}>
                                <span className="material-icons-round">
                                    credit_card
                                </span></button>
                            <button className={style.button}>
                                <span className="material-icons-round">
                                    attach_money
                                </span>
                            </button>
                        </div>
                        <div className={style.form_container}>
                            <form>
                                <div className={style.input_group}>
                                    <label htmlFor='email' title='Email del dueño de la tarjeta'>Tu email: </label>
                                    <input type='email' onChange={(e) => handleChange(e)} id='email' placeholder='ejemplo@email.com' title='Email del dueño de la tarjeta' />
                                </div>
                                <div className={style.input_flex}>
                                    <div className={css(style.input_group)}>
                                        <label htmlFor='c_number' title='Número de la tarjeta'>Número de tarjeta: </label>
                                        <input type='text' onChange={(e) => handleChange(e)} className={style.wd_80} id='c_number' placeholder='Número de tarjeta' title='Número de la tarjeta' />
                                    </div>
                                    <div className={style.input_group}>
                                        <label htmlFor='c_exp' title='Fecha de vencimiento de la tarjeta'>Expira: </label>
                                        <input type='date' onChange={(e) => handleChange(e)} id='c_exp' placeholder='exp' title='Fecha de vencimiento de la tarjeta'></input>
                                    </div>
                                </div>
                                <div className={style.input_flex}>
                                    <div className={css(style.input_group)}>
                                        <label htmlFor='c_holder' title='Ingrese el nombre del titular escrito en la tarjeta'>Nombre del titular: </label>
                                        <input type='text' onChange={(e) => handleChange(e)} className={style.wd_80} id='c_holder' placeholder='Nombre del titular' title='Ingrese el nombre del titular escrito en la tarjeta' />
                                    </div>
                                    <div className={style.input_group}>
                                        <label htmlFor='c_cod' title='Código de seguridad de la tarjeta (parte de atrás de la tarjeta)'>Código de seguridad: </label>
                                        <input type='text' onChange={(e) => handleChange(e)} id='c_cod' placeholder='CVV' title='Código de seguridad de la tarjeta (parte de atrás de la tarjeta)'></input>
                                    </div>
                                </div>
                                <div className={style.input_group}>
                                    <div className={style.input_flex}>
                                        <input type='checkbox' onChange={() => setIsChecked(!isChecked)} className={style.chkbox}></input>
                                        <p>Aceptar las bases y condiciones</p>
                                    </div>
                                </div>
                                <div className={style.input_group}>
                                    <button className={css('btn', style.confirm)} onClick={(e) => handleClick(e)}><p>Confirmar</p></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
