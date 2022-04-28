import React, { useState, useEffect } from 'react'

const AlertToast = (props) => {

    const { onClose, success, info, alertClass } = props;

    /* const [ isShowing, setIsShowing ] = useState(false)

    useEffect(() => {

        setIsShowing(true)
        console.log('mounted');
        console.log(info)
        const timeout = setTimeout(() => {
            setIsShowing(false)
        }, 1000)

        return () => {
            console.log('unmounted');
            clearTimeout(timeout);
        }
    }, [success]) */
    
    return (
        <>
            <div className={'alert-popup ' + alertClass} id="add-success-alert" role="alert"
                data-delay="2000">
                <div className="alert-header">
                    <div className='text-container'>
                        <span className="material-icons-round">task_alt</span>
                        <h4 className='title-center'>{info}</h4>
                    </div>
                    <div className='button-container'>
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