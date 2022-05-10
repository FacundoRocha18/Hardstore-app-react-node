import React, {useEffect} from 'react'

/* Styles imports */
import style from "../Alerts/styles.module.css";
import css from "classnames";

/* Custom hooks */
import useAlert from '../../hooks/useAlert'

const AlertToast = ({ children, type, message, isShowing, onClose }) => {

    const renderElAlert = function () {
        return React.cloneElement(children);
    };

    return (
        <>
            <div className={css(style.alert, style[type], !isShowing && style.hide)}>
                <div className={style.header}>
                    <div className={style.text}>
                        <span className="material-icons-round">task_alt</span>
                        {children ? renderElAlert() : message}
                    </div>
                    <div className={style.button}>
                        <button type="button" className="close-btn" aria-label="Close" onClick={onClose}>
                            <span className="material-icons-outlined">close</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AlertToast;