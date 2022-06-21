import React, { useEffect } from 'react'

/* Styles imports */
import style from "./Alert.module.css";
import css from "classnames";


const Alert = ({ children, type, message, isShowing, onClose }) => {

    const renderAlert = function () {
        return React.cloneElement(children);
    };

    const icon = setIcon(type);

    const handleClose = (e) => {

        e.preventDefault();

        onClose(e);
    }

    return (
        <>
                <div className={css(style.alert, style[type], style.out)}>
                    <div className={style.header}>
                        <div className={style.icon}>
                        <span className="material-icons-round">{icon}</span>

                        </div>
                        <div className={style.text}>
                            {children ? renderAlert() : message}
                        </div>
                        <div className={style.button}>
                            <button type="button" className={style.close_btn} aria-label="Close" onClick={(e) => handleClose(e)}>
                                <span className="material-icons-outlined">close</span>
                            </button>
                        </div>
                    </div>
                </div>
        </>
    )
}

const setIcon = (type) => {

    let icon;

    switch (type) {
        case 'success':
            icon = 'check_circle_outline'
            break;

        case 'error':
            icon = 'error_outline'
            break;

        case 'warning':
            icon = 'warning_amber'
            break;

        case 'info':
            icon = 'info'
            break;

        default:
            icon = 'info'

            break;
    }

    return icon;
}

export default Alert;