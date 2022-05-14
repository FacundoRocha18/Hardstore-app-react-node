import React, { useState } from 'react'

/* Components -------------------------------- */
import ProductsGridItem from './ProductsGridItem';

/* Styles imports -------------------------------- */
import style from "../Products/grid.module.css";
import css from "classnames";

const ProductsGrid = ({ products, loading, onAdd, setIsShowing, setMessage, setType }) => {


    return (
        <>
            {
                <div className='animate__animated animate__fast'>
                    <div className={css(style.header)}>
                        <h1 className='title-center'>Productos</h1>
                    </div>
                    {
                        loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
                    }
                    <div className={style.container} id='products-wrapper'>
                        <div className={style.grid}>
                            {
                                products.map((product) => (
                                    <ProductsGridItem
                                        key={product.id}
                                        onAdd={onAdd}
                                        product={product}
                                        setIsShowing={setIsShowing}
                                        setMessage={setMessage}
                                        setType={setType}
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