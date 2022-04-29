import React, { useState } from 'react';
import ProductsGrid from './Products/ProductsGrid'
import ShoppingCart from './ShoppingCartComponents/ShoppingCart'
import AlertToast from './Alerts/ToastAlert.js'
import ModalAlert from './Alerts/ModalAlert.js'
import useFetchProducts from '../hooks/useFetchProducts';

const HomePage = (props) => {

    const { products, loading, onAdd, result } = props;
    
    return (
        <>

            <div className="main-content-wrapper">
                    {
                        <ProductsGrid
                            products={products}
                            loading={loading}
                            onAdd={onAdd}
                            result={result}
                        />
                    }                
            </div>
        </>
    )
}

export default HomePage;