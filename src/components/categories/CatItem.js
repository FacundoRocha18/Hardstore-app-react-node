import React from 'react'
import { Link } from 'react-router-dom';

/* Styles imports -------------------------------- */
import style from "./categories.module.css";
import css from "classnames";


export const CatItem = ({ name, cats }) => {

    return (
        <>
            <li><Link to={`/api/products/categories/${ name }`}>{name}</Link></li>
        </>
    )
}
