import React from 'react'
import { Link } from 'react-router-dom';


export const CatItem = ({ name, cats }) => {

    return (
        <>
            <Link to={`/api/products/categories/${ cats.id }`} replace title={name}>{name}</Link>
        </>
    )
}
