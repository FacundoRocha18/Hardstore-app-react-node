import React, { useState } from 'react'
import ProductsGridItem from './ProductsGridItem';
import AlertToast from '../Alerts/ToastAlert'

const ProductsGrid = (props) => {

    const { products, loading, onAdd, result } = props;

    const alertContainer = document.querySelector('.alerts-container');

    const [cartItemData, setCartItemData] = useState(null);

    const OnClose = () => {

    
        alertContainer.classList.remove('animate__bounceInDown');
        alertContainer.classList.add('animate__bounceOutRight');
    
    
        setTimeout(() => {
          alertContainer.classList.add('alert-inactive')
          alertContainer.classList.add('animate__bounceInDown');
          alertContainer.classList.remove('animate__bounceOutRight');
        }, 400);
    
      }

    return (
        <>

            {
                loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
            }

            {
                <div className='animate__animated animate__fast'>
                    <div className='store-header'>
                        <h1 className='title-center'>Productos</h1>
                    </div>
                    <div className="products-container" id='products-wrapper'>
                        <div className="products-grid">
                            {
                                products.map((product) => (
                                    <ProductsGridItem
                                        key={product.id}
                                        onAdd={onAdd}
                                        product={product}
                                        {...product}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className="alerts-container animate__animated animate__bounceInDown animate__fast" id='toast-container'>
                        {
                            result.success ? <AlertToast onClose={OnClose} info={result.info} alertClass={result.alertClass} /> : <AlertToast onClose={OnClose} info={result.errorInfo} alertClass={result.alertClass} />
                        }
                    </div>
                </div>

            }

        </>
    )

}

export default ProductsGrid;