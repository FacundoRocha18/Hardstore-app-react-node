import React, { useState } from 'react';

/* Custom Hooks -------------------------------- */
import useAlert from '../hooks/useAlert'


/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import ToastAlert from './Alerts/ToastAlert'

/* Third party components -------------------------------- */


const HomePage = ({ products, loading, onAdd, isShowing, setIsShowing, onClose }) => {

    console.log(isShowing)

    return (
        <>

            <div className="products-wrapper main-content-wrapper">
                {/* {
                        <ProductsCategories />
                    } */}
                {
                    <ProductsGrid
                        products={products}
                        loading={loading}
                        onAdd={onAdd}
                        setIsShowing={setIsShowing}
                    />
                }
                {
                    isShowing && <ToastAlert type='success' message='success' isShowing={isShowing} onClose={onClose} />
                }
            </div>
        </>
    )
}

export default HomePage;