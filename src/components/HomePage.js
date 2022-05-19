import React, { useState } from 'react';

/* Custom Hooks -------------------------------- */
import useAlert from '../hooks/useAlert'


/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import ToastAlert from './Alerts/ToastAlert'
import CategoriesLinks from './categories/CategoriesLinks';

/* Third party components -------------------------------- */




const HomePage = ({ products, loading, onAdd, isShowing, setIsShowing, message, setMessage, type, setType, onClose, categories }) => {

    return (
        <>

            <div className="products-wrapper main-content-wrapper">
                {
                    <ToastAlert
                        type={type}
                        message={message}
                        isShowing={isShowing}
                        onClose={onClose}
                    />
                }
                {
                    <CategoriesLinks
                        categories={categories}
                    />
                }
                {
                    <ProductsGrid
                        products={products}
                        loading={loading}
                        onAdd={onAdd}
                        setIsShowing={setIsShowing}
                        setMessage={setMessage}
                        setType={setType}
                    />
                }

            </div>
        </>
    )
}

export default HomePage;