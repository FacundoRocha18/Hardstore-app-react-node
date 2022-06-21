import React from 'react'

/* Components -------------------------------- */
import ProductsCard from './ProductsCard';

/* Styles imports -------------------------------- */
import style from "./ProductsGrid.css";
import css from "classnames";
import LoadingScreen from '../LoadingScreen';

const ProductsGrid = ({ products, loading, onAdd, showAlert }) => {

    if(loading){
        return (
            <>
                <LoadingScreen />
            </>
        )
    }

    if(!loading) {
        return (
            <>
                {
                    <div className={style.container} id='products-wrapper'>
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

}

export default ProductsGrid;