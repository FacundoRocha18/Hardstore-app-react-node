import React, { useState } from 'react';

/* Custom Hooks -------------------------------- */
import useAlert from '../hooks/useAlert'


/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import Alert from './Alerts/Alert'
import CategoriesMenu from './Categories/CategoriesMenu';

/* Third party components -------------------------------- */




const HomeScreen = ({ products, loading, onAdd, isShowing, setIsShowing, message, setMessage, type, setType, onClose, categories }) => {

    return (
        <>

            <div className="main-content-wrapper">
                {
                    <Alert
                        type={type}
                        message={message}
                        isShowing={isShowing}
                        onClose={onClose}
                    />
                }
                <div className='mb-2'>
                    <h1 className='title-center'>Productos</h1>
                </div>

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

export default HomeScreen;