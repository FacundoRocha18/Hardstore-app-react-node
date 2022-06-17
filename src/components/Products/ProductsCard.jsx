import React from 'react'
import { Link } from 'react-router-dom';

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill, thumbnail } from "@cloudinary/url-gen/actions/resize";

/* Styles imports -------------------------------- */
import style from "../Products/ProductsCard.module.css";
import css from "classnames";


const ProductsCard = ({ onAdd, product, id, name, thumbnail, price, showAlert }) => {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhqgqznbw'
        }
    });

    const handleAddButtonClicked = (e) => {

        e.preventDefault();

        showAlert('Se añadió correctamente el producto al carrito', 'success', true);
        onAdd(product, 1);

    }

    return (
        <>
            <div className={css(style.item)} id="item">
                <div className={style.body}>
                    <div className={style.image}>
                        <AdvancedImage cldImg={cld.image(`e-commerce/thumbnails/${thumbnail}`).resize(fill().width(500).height(500))} />
                    </div>
                    <div className={style.info}>
                        <div className={style.title}>
                            <Link to={`/api/products/product/${id}`} replace><h3 id="item-title" title={name}>{name}</h3></Link>
                        </div>
                        <div className={style.flex}>
                            <div className={style.price}>
                                <p>USD<span id="item-price"> {price} </span> iva inc.</p>
                            </div>
                            <div className={style.btncontainer}>
                                <button className="add-item btn p-btn addToCart" onClick={(e) => handleAddButtonClicked(e)}>
                                    <p>Agregar </p><span className="material-icons">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

/* ProductsCard.defaultProps = {
    name: 'Product name',
    image: placeholderImage,
    price: 0
} */

export default ProductsCard;