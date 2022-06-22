import React from 'react'

/* Styles imports -------------------------------- */
import style from "./LoadingScreen.module.css";

const LoadingScreen = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.spinner}>
                </div>
                <span className='mt-2'>Loading...</span>
            </div>
        </>
    )
}

export default LoadingScreen;
