import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

/* Components -------------------------------- */

/* Styles imports -------------------------------- */
import style from "./Carousel.module.css";
import css from "classnames";

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";

const Carousel = ({ items, image_path, image_width, image_height, showAlert }) => {

  const [current, setCurrent] = useState(0);

  const slider_data = filterItems(items, showAlert);

  const slider_lenght = slider_data.length;

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dhqgqznbw'
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide()
    }, 5000)

    return () => {
      clearInterval(interval);
    }
  })

  // Si el índice del elemento actual del slider es igual a 0, le resta 1 al largo de la lista de items,
  // sino le resta 1 al índice del elemento actual para mostrar la imagen anterior

  const handlePrevSlide = () => {

    setCurrent(current === 0 ? slider_lenght - 1 : current - 1)

  }

  // Si el índice de la imagen actual del slider es igual al largo de la lista de imagenes -1
  // la siguiente imagen va a ser la que tiene valor 0,
  // sino le suma 1 al índice del elemento actual para mostrar la siguiente imagen 

  const handleNextSlide = () => {

    setCurrent(current === slider_lenght - 1 ? 0 : current + 1)

  }

  // Asigna el valor del índice del elemento actual de la lista de indicadores del slider
  // a el índice de imagenes del slider  

  const handleIndicatorClick = (index) => {
    setCurrent(index);
  }

  // Si la lista de imagenes que devuelve la función filterItems()
  // no es un array o la lista está vacía, devuelve el componente LoadingScreen
  // hasta que la lista deje de estar vacía 

  /* if (!Array.isArray(slider_data) || slider_data.length <= 0) {
    return (
      <>
        <LoadingScreen />
      </>
    )
  }
 */

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
              slider_data.map((item, index) => (
                <li className={index === current ? css(style.slide, style.active) : style.slide} key={index}>
                  {
                    index === current && (
                      <Link to={`api/products/product/${item.id}`}>
                        <AdvancedImage cldImg={cld.image(`${image_path}${item.banner}`).resize(fill().width(image_width).height(image_height))} />
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
        <div className={style.carousel_indicator}>
          {
            slider_data.map((item, index) => (
              <button onClick={() => handleIndicatorClick(index)} className={index === current ? css(style.indicator, style.active) : style.indicator} key={index}></button>
            ))
          }
        </div>
      </section>
    </>
  )
}

// Filtra los productos para saber cuales van al slider y cuales no,
// si el valor "carousel" del producto es igual a 1 significa que es verdadero
// y asigna ese producto al arreglo "carouselItems"
// si el valor "carousel" es igual a 0 no agrega ese producto a la lista
// y lo retorna para poder usarlo en una variable

const filterItems = (items, alert) => {
  let carouselItems = [];

  if (items.lenght === 0) {
    return alert('No hay items', 'error', true);
  }
  
  items.map((item) => {
    if (item.carousel === 1) {
      return carouselItems.push(item);
    }
  })
  return carouselItems;
}

export default Carousel;
