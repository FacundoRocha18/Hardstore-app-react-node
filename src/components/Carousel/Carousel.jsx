import React, { useState } from 'react'
import { Link } from 'react-router-dom';


/* Components -------------------------------- */
import LoadingScreen from '../LoadingScreen';

/* Styles imports -------------------------------- */
import style from "./Carousel.module.css";
import css from "classnames";

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const Carousel = ({ items }) => {

  const [current, setCurrent] = useState(0);

  const validatedItems = filterItems(items);

  const totalItems = validatedItems.length;

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dhqgqznbw'
    }
  });

  const handlePrevSlide = () => {

    setCurrent(current === 0 ? totalItems - 1 : current - 1)

  }

  const handleNextSlide = () => {

    setCurrent(current === totalItems - 1 ? 0 : current + 1)

  }

  if (!Array.isArray(validatedItems) || validatedItems.length <= 0) {
    return (
      <>
        <LoadingScreen />
        <div className='title-center'>No items</div>
      </>
    )
  }


  return (
    <>
      <section className={style.carousel}>
        <div className={style.carousel_button}>
          <button className={style.prev_btn} name='prev' onClick={handlePrevSlide}>
            <span className="material-icons-round">
              arrow_back_ios
            </span>
          </button>
        </div>
        <div className={style.carousel_images}>
          <ul>
            {
              validatedItems.map((item, index) => (
                <li className={index === current ? css(style.slide, style.active) : style.slide} key={index}>
                  {
                    index === current && (
                      <Link to={`api/products/product/${item.id}`}>
                        <AdvancedImage cldImg={cld.image(`e-commerce/banners/${item.banner}`).resize(fill().width(1000).height(500))} />                      
                      </Link>
                    )
                  }
                </li>
              ))
            }
          </ul>
        </div>
        <div className={style.carousel_button}>
          <button className={style.next_btn} name='next' onClick={handleNextSlide}>
            <span className="material-icons-round">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </section>
    </>
  )
}

const filterItems = (items) => {
  let carouselItems = [];

  items.map((item) => {
    if (item.carousel === 1) {
      return carouselItems.push(item);
    }
  })

  return carouselItems;
}

export default Carousel;
