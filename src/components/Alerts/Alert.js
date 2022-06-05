import React, { useEffect } from 'react'

/* Styles imports */
import style from "../Alerts/Alert.module.css";
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
            <div className={css(style.container, !isShowing && style.hide, isShowing === 'out' && style.out)}>
                <div className={css(style.alert, style[type])}>
                    <div className={style.header}>
                        <div className={style.text}>
                            <span className="material-icons-round">{icon}</span>
                            {children ? renderAlert() : message}
                        </div>
                        <div className={style.button}>
                            <button type="button" className="close-btn" aria-label="Close" onClick={(e) => handleClose(e)}>
                                <span className="material-icons-outlined">close</span>
                            </button>
                        </div>
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
            break;
    }

    return icon;
}

export default Alert;