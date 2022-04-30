import React, { useState } from 'react'
import ProductsGridItem from './ProductsGridItem';
import AlertToast from '../Alerts/ToastAlert'

const ProductsGrid = ({ products, loading, onAdd, setIsShowing, setAlertData }) => {

    const alertContainer = document.querySelector('.alerts-container');

    

    return (
        <>

            {
                loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
            }

            {
                <div className='animate__animated animate__fast'>
                    <div className='store-header'>
                        <h1 className='title-center'>Productos</h1>
                    </div>
                    <div className="products-container" id='products-wrapper'>
                        <div className="products-grid">
                            {
                                products.map((product) => (
                                    <ProductsGridItem
                                        key={product.id}
                                        onAdd={onAdd}
                                        product={product}
                                        setIsShowing={setIsShowing}
                                        setAlertData={setAlertData}
                                        {...product}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>

            }

        </>
    )

}

export default ProductsGrid;