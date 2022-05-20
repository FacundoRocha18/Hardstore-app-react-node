import React from 'react'

/* Components -------------------------------- */
import ProductsGridItem from './ProductsGridItem';

/* Styles imports -------------------------------- */
import style from "../Products/grid.module.css";
import css from "classnames";

const ProductsGrid = ({ products, loading, onAdd, setIsShowing, setMessage, setType }) => {


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
            }
        </>
    )

}

export default ProductsGrid;