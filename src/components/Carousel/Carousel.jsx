import React from 'react'

/* Components -------------------------------- */
import CarouselItem from './CarouselItem'

/* Styles imports -------------------------------- */
import style from "./Carousel.module.css";
import css from "classnames";

const Carousel = () => {
  return (
    <>
      <div className={style.carousel_container}>
        <div className={style.carousel}>
          <div className={style.carousel_button}>
            <button>
              <span className="material-icons-round">
                arrow_back_ios
              </span>
            </button>
          </div>
          <div className={style.carousel_images}>
            <CarouselItem thumbnail={false} />
          </div>
          <div className={style.carousel_button}>
            <button>
              <span className="material-icons-round">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
        <div className={style.carousel_thumbnails}>
          <button>
            <CarouselItem thumbnail={true} />
          </button>
          <button>
            <CarouselItem thumbnail={true} />
          </button>
          <button>
            <CarouselItem thumbnail={true} />
          </button>
          <button>
            <CarouselItem thumbnail={true} />
          </button>
          <button>
            <CarouselItem thumbnail={true} />
          </button>

        </div>
      </div>

    </>
  )
}

export default Carousel;
