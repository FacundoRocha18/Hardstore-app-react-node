import React, { useState } from 'react';

/* Custom Hooks -------------------------------- */
import useAlert from '../hooks/useAlert'


/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import ToastAlert from './Alerts/ToastAlert'

/* Third party components -------------------------------- */


const HomePage = ({ products, loading, onAdd, isShowing, setIsShowing, message, setMessage, onClose }) => {

    return (
        <>

            <div className="products-wrapper main-content-wrapper">
                {
                    <ProductsGrid
                        products={products}
                        loading={loading}
                        onAdd={onAdd}
                        setIsShowing={setIsShowing}
                    />
                }
                {
                    /* isShowing &&  */<ToastAlert type='success' message='Se añadió correctamente el producto al carrito' isShowing={isShowing} onClose={onClose} />
                }
            </div>
        </>
    )
}

export default HomePage;