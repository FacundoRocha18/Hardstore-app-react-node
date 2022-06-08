import React, { useState } from 'react';

/* Custom Hooks -------------------------------- */
import useAlert from '../hooks/useAlert'


/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import Alert from './Alerts/Alert'
import CategoriesMenu from './Categories/CategoriesMenu';

/* Third party components -------------------------------- */




const HomeScreen = ({ products, loading, onAdd, showAlert, categories }) => {

    return (
        <>

            <div className="main-content-wrapper">
                <div className='mb-2'>
                    <h1 className='title-center'>Productos</h1>
                </div>

                {
                    <ProductsGrid
                        products={products}
                        loading={loading}
                        onAdd={onAdd}
                        showAlert={showAlert}
                    />
                }

            </div>
        </>
    )
}

export default HomeScreen;