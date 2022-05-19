import React from 'react'

/* Styles imports */
import style from "./categories.module.css";
import css from "classnames";
import { CatItem } from './CatItem';

const CategoriesLinks = ({ categories }) => {
    return (
        <>
            <div className={style.container}>
                <div className={style.body}>
                    <div className={style.header}>
                        <h4>Categories</h4>
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default CategoriesLinks;
