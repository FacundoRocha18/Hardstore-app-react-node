import React from 'react'

import useAlert from '../../hooks/useAlert'

const AlertToast = () => {

    
    const { alertData, onClose } = useAlert;

    console.log(alertData)

    const alertColor = 'green', data = 'Producto añadido correctamente';
    
    
    return (
        <>
            <div className={`alert-popup ${alertColor}`} id="add-success-alert" role="alert"
                data-delay="2000">
                <div className="alert-header">
                    <div className='text-container'>
                        <span className="material-icons-round">task_alt</span>
                        <h4 className='title-center'>{data}</h4>
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