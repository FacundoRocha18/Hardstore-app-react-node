import React from 'react'
import { Link } from 'react-router-dom';


const CategoriesItem = ({ name, cats }) => {

    return (
            <li><Link to={`/api/products/categories/${cats.id}`} replace title={name}>{name}</Link></li>
    )
}

export default CategoriesItem;
