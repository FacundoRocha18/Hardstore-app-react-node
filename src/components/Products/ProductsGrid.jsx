import React from 'react'

/* Components -------------------------------- */
import ProductsCard from './ProductsCard';
import LoadingScreen from '../LoadingScreen';

/* Styles imports -------------------------------- */
import style from "./ProductsGrid.css";

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