import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

/* Custom Hooks -------------------------------- */
import useFetchProducts from '../../hooks/useFetchProducts';

/* Components -------------------------------- */
import ProductsGridItem from './ProductsGridItem';
import CategoriesLinks from '../categories/CategoriesLinks'
import ToastAlert from '../Alerts/ToastAlert'

/* Styles imports -------------------------------- */
import style from "../Products/grid.module.css";
import css from "classnames";

const ProductsWithCats = ({ onAdd, isShowing, setIsShowing, message, setMessage, type, setType, onClose, categories }) => {

    const { id } = useParams();

    const { data: products, loading } = useFetchProducts();

    const [dataTemplate, setDataTemplate] = useState(
        [{
            id: 0,
            name: 'name',
            image: 'image',
            description: 'description',
            price: 0,
            stock: 0,
            category_id: 0,
            category_name: 'category'
        }]
    )

    const productsData = checkData(products, dataTemplate, id);

    return (
        <>
            {
                <div className="main-content-wrapper">

                    <ToastAlert
                        type={type}
                        message={message}
                        isShowing={isShowing}
                        onClose={onClose}
                    />

                    <CategoriesLinks
                        categories={categories}
                    />
                    <div className={css('wd-100', style.container)} id='products-wrapper'>
                        {
                            loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
                        }
                        <div className='mb-2'>
                            <h1 className='title-center'>{productsData[0].category_name}</h1>
                        </div>
                        <div className={css('wd-100', 'cl-4', style.grid)}>
                            {
                                productsData.map((product) => (
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

const giveProduct = (products, id) => {

    const matchingProd = products.filter((prod) => {

        const cats = prod.category_id.toString();

        return cats === id;

    });

    return matchingProd;
}

const checkData = (products, dataTemplate, id) => {

    if (products.length === 0) {
        return dataTemplate;
    } else {
        const productData = giveProduct(products, id);
        return productData;
    }

}

export default ProductsWithCats;