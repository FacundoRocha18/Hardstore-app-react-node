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

    const [matchingProducts, setMatchingProducts] = useState([{
        id: 0,
        name: 'name',
        image: 'image_placeholder',
        thumbnail: 'thumbnail_placeholder',
        description: 'description',
        price: 0,
        stock: 0,
        category_name: 'category'
    }])

    useEffect(() => {
        checkData(products, matchingProducts, setMatchingProducts, cat_name);
    })
    

    return (
        <>
            {
                <div className="main-content-wrapper">
                    <div className={css('wd-100', style.container)} id='products-wrapper'>
                        {
                            loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
                        }
                        <div className='mb-2'>
                            <h1 className='title-center'>{matchingProducts[0].category_name}</h1>
                        </div>
                        <div className={css(style.grid)}>
                            {
                                matchingProducts.map((product) => (
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

const checkData = (products, matchingProducts, setMatchingProducts, cat_name) => {

    if (products.length === 0) {
        return matchingProducts;
    }

    return setMatchingProducts(products.filter(product => product.category_name.toString() === cat_name.toString()));

}

export default CategorizedProducts;