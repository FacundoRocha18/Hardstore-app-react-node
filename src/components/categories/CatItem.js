import React from 'react'
import { Link } from 'react-router-dom';


export const CatItem = ({ name, cats }) => {

    return (
        <li><Link to={`/api/products/categories/${ name }`}>{name}</Link></li>
    )
}
