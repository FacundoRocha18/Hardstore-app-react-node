import React, { useState } from 'react'
import ProductsGridItem from './ProductsGridItem';
import AlertToast from '../Alerts/ToastAlert'

const ProductsGrid = ({ products, loading, onAdd, setIsShowing }) => {


    return (
        <>



            {
                <div className='animate__animated animate__fast'>
                    <div className='store-header'>
                        <h1 className='title-center'>Productos</h1>
                    </div>
                    {
                        loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
                    }
                    <div className="products-container" id='products-wrapper'>
                        <div className="products-grid">
                            {
                                products.map((product) => (
                                    <ProductsGridItem
                                        key={product.id}
                                        onAdd={onAdd}
                                        product={product}
                                        setIsShowing={setIsShowing}
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