import React from 'react';
import defaultImagePlaceholder from '../../public/img/rtx3080.png'



const CarouselItem = (props) => {

    const { scrollView, product, name, image, description } = props;

    return (
        <>
            <li>
                <div className='carousel-item hero-info-container'>
                    <div className='hero-text-container'>
                        <h1><span>{name}</span></h1>
                        <p>
                            {description}
                        </p>
                        <div className='hero-buttons-container'>
                            <button onClick={() => console.log(product)} className='btn hero-btn-buy'><p>Comprar ahora</p></button>
                        </div>
                    </div>
                    <div className='hero-image-container'>
                        <img src={image} alt='image'></img>

                    </div>
                </div>
            </li>
        </>
    )
}

CarouselItem.defaultProps = {
    name: 'Product name',
    description: 'Description',
    image: defaultImagePlaceholder
}

export default CarouselItem;