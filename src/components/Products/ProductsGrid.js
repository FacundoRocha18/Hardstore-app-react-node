import React from 'react'

/* Components -------------------------------- */
import ProductsCard from './ProductsCard';

/* Styles imports -------------------------------- */
import style from "./ProductsGrid.module.css";
import css from "classnames";

const ProductsGrid = ({ products, loading, onAdd, showAlert }) => {


    return (
        <>
            {
                <div className={style.container} id='products-wrapper'>
                        {
                            loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
                        }
                        <div className={style.grid}>
                            {
                                
                                products.map((product) => (
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
            }
        </>
    )

}

export default ProductsGrid;