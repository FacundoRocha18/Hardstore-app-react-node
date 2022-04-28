import React from 'react';
import ProductsGrid from '../Products/ProductsGrid'
import CarouselItem from '../Products/ProductsHeroCarouselItem'

const ProductsHero = (props) => {

    const { loading, scrollView, products } = props;

    const goToProductsGrid = () => ProductsGrid.scrollIntoView(true);



    return (
        <>

            {
                <div className='hero-container'>
                    <div className='carousel-container'>

                        <div className='prev-btn-container'>
                            <button className='prev-btn'>
                                <span className="material-icons-round">arrow_back_ios</span>
                            </button>
                        </div>

                        <div className='carousel-items-container'>

                            {
                                loading && <p className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</p>
                            }

                            <ul>
                                {
                                    products.map((product) => (
                                        <CarouselItem
                                            key={product.id}
                                            scrollView={scrollView}
                                            product={product}
                                            {...product}
                                        />
                                    ))
                                }
                            </ul>

                        </div>
                        <div className='next-btn-container'>
                            <button className='next-btn'>
                                <span className="material-icons-round">arrow_forward_ios</span>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default ProductsHero;