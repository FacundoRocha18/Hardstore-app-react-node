import React from 'react'
import { Link } from 'react-router-dom';


const CategoriesItem = ({ name }) => {

    return (
            <li><Link to={`/api/products/categories/${name}`} replace title={name}>{name}</Link></li>
    )
}

export default CategoriesItem;
