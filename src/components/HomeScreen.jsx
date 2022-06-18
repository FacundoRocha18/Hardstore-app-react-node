import React from 'react';

/* Components -------------------------------- */
import ProductsGrid from './Products/ProductsGrid'
import Carousel from './Carousel/Carousel.jsx'

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const HomeScreen = ({ products, loading, onAdd, showAlert, categories }) => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhqgqznbw'
        }
    });

    return (
        <>

            <div className="main-content-wrapper">
                {
                    <Carousel items={products} image_path={'e-commerce/banners/'} image_height={500} image_width={1000} />
                }
                <div className='mb-2'>
                    <h1 className='title-center'>Productos</h1>
                </div>

                {
                    <ProductsGrid
                        products={products}
                        loading={loading}
                        onAdd={onAdd}
                        showAlert={showAlert}
                    />
                }

            </div>
        </>
    )
}

export default HomeScreen;