import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

/* Custom Hooks -------------------------------- */
import useFetchProducts from '../../hooks/useFetchProducts';

/* Components -------------------------------- */
import ProductsCard from './ProductsCard';

/* Styles imports -------------------------------- */
import style from "./ProductsGrid.module.css";
import css from "classnames";

const CategorizedProducts = ({ products, loading, onAdd, showAlert }) => {

    const { cat_name } = useParams();

    const productsData = checkData(products, cat_name);

    return (
        <>
            {
                <div className="main-content-wrapper">
                    <div className={css('wd-100', style.container)} id='products-wrapper'>
                        {
                            loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
                        }
                        <div className='mb-2'>
                            <h1 className='title-center'>{productsData[0].category_name}</h1>
                        </div>
                        <div className={css(style.grid)}>
                            {
                                productsData.map((product) => (
                                    <ProductsCard
                                        key={product.id}
                                        onAdd={onAdd}
                                        product={product}
                                        showAlert={showAlert}
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

const checkData = (products, cat_name) => {

    if (!products) {
        return;
    }

    return products.filter(product => product.category_name === cat_name);

}

export default CategorizedProducts;