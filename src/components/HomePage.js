import React, { useState } from 'react';

/* Custom Hooks -------------------------------- */
import useAlert from '../hooks/useAlert'

/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import ToastAlert from './Alerts/ToastAlert'



const HomePage = ({ products, loading, onAdd }) => {

    const { isShowing, setIsShowing, alertData, setAlertData } = useAlert() 

    
    return (
        <>

            <div className="main-content-wrapper">
                    {
                        <ProductsGrid
                            products={products}
                            loading={loading}
                            onAdd={onAdd}
                            setIsShowing={setIsShowing}
                            setAlertData={setAlertData}
                        />
                    }   
                    {
                        (isShowing) && <ToastAlert alertData={alertData}/>
                    }             
            </div>
        </>
    )
}

export default HomePage;