import React, { useState } from 'react';
import ProductsGrid from './Products/ProductsGrid'


const HomePage = (props) => {

    const { products, loading, onAdd, result } = props;
    
    return (
        <>

            <div className="main-content-wrapper">
                    {
                        <ProductsGrid
                            products={products}
                            loading={loading}
                            onAdd={onAdd}
                            result={result}
                        />
                    }                
            </div>
        </>
    )
}

export default HomePage;