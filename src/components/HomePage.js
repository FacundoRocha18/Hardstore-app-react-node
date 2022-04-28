import React, { useState } from 'react';
import ProductsGrid from './Products/ProductsGrid'
import ProductsHero from './Products/ProductsHero'
import ShoppingCart from './ShoppingCartComponents/ShoppingCart'
import AlertToast from './Alerts/ToastAlert.js'
import ModalAlert from './Alerts/ModalAlert.js'
import useFetchProducts from '../hooks/useFetchProducts';

const HomePage = (props) => {

    const { products, loading, onAdd, result } = props;

    return (
        <>
            {/* <section className='products-hero-section'>
                <ProductsHero
                    loading={loading}
                    products={products}
                />
            </section> */}

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