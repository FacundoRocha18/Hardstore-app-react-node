import React from 'react'

/* Styles imports -------------------------------- */
import style from "./CategoriesMenu.module.css";

/* Components -------------------------------- */
import CategoriesItem from './CategoriesItem';

const CategoriesMenu = ({ categories }) => {

    return (
        <>
            <div className={style.container}>
                <div className={style.menu}>
                    {
                        categories.map((cats, index) => (
                            <CategoriesItem
                                key={index}
                                name={cats.name}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default CategoriesMenu;
