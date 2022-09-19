import React from 'react'
import { Link } from 'react-router-dom';


const CategoriesItem = ({ id, name }) => {

    return (
            <li><Link to={`/api/products/categories/${id}`} replace title={name}>{name}</Link></li>
    )
}

export default CategoriesItem;
