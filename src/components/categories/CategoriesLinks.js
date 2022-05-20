import React, { useState } from 'react'

/* Styles imports -------------------------------- */
import style from "./categories.module.css";
import css from "classnames";

/* Components -------------------------------- */
import { CatItem } from './CatItem';

const CategoriesLinks = ({ categories }) => {

    const [show, setShow] = useState(null);

    const handleClick = (e) => {
        e.preventDefault();

        return setShow(!show);
    }

    return (
        <>
            <div className={style.container}>
                <div className={style.header}>
                    <h4 className='title-center'>Categorías</h4>
                    <div className={style.buttonContainer}>
                        <button className={style.button} onClick={(e) => handleClick(e)}>
                            <span className="material-icons-round">
                                menu
                            </span>
                        </button>
                    </div>
                </div>
                <div className={css(style.body, !show && style.hide, show && style.show)}>
                    <ol>
                        {
                            categories.map((cats) => (
                                <CatItem
                                    key={cats.id}
                                    name={cats.name}
                                    cats={cats}
                                    {...cats}
                                />
                            ))
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default CategoriesLinks;
