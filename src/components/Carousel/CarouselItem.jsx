import React from 'react'

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

/* Styles imports -------------------------------- */
import style from "./CarouselItem.module.css";
import css from "classnames";

const CarouselItem = ({ thumbnail }) => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhqgqznbw'
        }
    });

    const myThumbnail = cld.image(`e-commerce/rog_laptop.jpg`);

    myThumbnail.resize(fill().width(1000).height(450));

    if (thumbnail) {
        return (
            <>
                <div className={style.item_thumbnail}>
                    <AdvancedImage cldImg={myThumbnail} />
                    <AdvancedImage cldImg={myThumbnail} />
    
                </div>
            </>
        )
    }
    
    return (
        <>
            <div className={style.item_image}>
                <AdvancedImage cldImg={myThumbnail} />
                <AdvancedImage cldImg={myThumbnail} />

            </div>
        </>
    )
}

export default CarouselItem;
