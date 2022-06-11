import React, { useState } from 'react'

/* Styles imports -------------------------------- */
import style from "./CategoriesMenu.module.css";
import css from "classnames";

/* Components -------------------------------- */
import CategoriesItem from './CategoriesItem';

const CategoriesMenu = ({ categories }) => {

    const [show, setShow] = useState(null);

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(!isClicked);
        return setShow(!show);
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.flexWrapper}>

                    <div className={style.buttonContainer}>
                        <button className={style.button} onClick={(e) => handleClick(e)}>
                            <div className={style.header}>
                                <p className='title-center'>Categorías</p>
                            </div>
                            <span className={css("material-icons-round", isClicked && style.rotate)}>
                                expand_more
                            </span>
                        </button>
                    </div>
                </div>
                <div className={css(style.body, !show && style.hide, show && style.show)}>
                    <div className={style.menu}>
                        {
                            categories.map((cats) => (
                                <CategoriesItem
                                    key={cats.id}
                                    name={cats.name}
                                    cats={cats}
                                    {...cats}
                                />
                            ))
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default CategoriesMenu;
