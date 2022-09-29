import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/* Custom hooks -------------------------------- */
import useFetchProducts from '../../hooks/useFetchProducts'
import { useProductStorage } from '../../hooks/useProductStorage';

/* Components -------------------------------- */
import Loading from '../LoadingScreen'

/* Styles imports -------------------------------- */
import style from "./ProductScreen.module.css";
import css from "classnames";

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

const ProductScreen = ({ products, loading, onAdd, showAlert }) => {

    const { id } = useParams();

    const dataTemplate = {
        id: 0,
        name: 'name',
        image: 'image_placeholder',
        description: 'description',
        price: 0,
        stock: 0,
        category_name: 'category'
    };

    const [quantity, setQuantity] = useState(1)

    const { name, image, thumbnail, price, description, stock, category_id, category_name } = checkData(products, dataTemplate, id);

    const splitedDescription = splitDescription(description, /,/g);

    const { titles, content } = getDescription(splitedDescription);

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dhqgqznbw'
        }
    });

    const handleAdd = (qty) => {

        (qty < stock)
            ?
            setQuantity(qty + 1)
            :
            setQuantity(qty)

    }

    const handleRemove = (qty) => {

        (qty > 1)
            ?
            setQuantity(qty - 1)
            :
            setQuantity(qty)
    }

    const handleAddToCart = (qty) => {

        onAdd(checkData(products, id), qty);
        showAlert('La cantidad fue aumentada exitosamente', 'info', true);
    }

    if (loading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    return (
        <>
            {
                <div className='main-content-wrapper'>
                    <div className={css(style.container, style.information_container)}>
                        <div className={style.image}>
                            <AdvancedImage cldImg={cld.image(`e-commerce/images/${image || 'image_placeholder'}`)} />
                        </div>
                        <div className={style.body}>
                            <div className={style.title}>
                                <h1>{name}</h1>
                            </div>
                            <div className={style.price}>
                                <h3>USD <span>{price.toFixed(2)} </span></h3><p> iva inc.</p>
                            </div>
                            <div className={style.stock}>
                                <div className={style.quantityContainer}>
                                    <button className={css(style.quantityBtn, style.down)} onClick={() => handleRemove(quantity)}><span>-</span></button>
                                    <input className={style.qtyInput} value={quantity} type="number" min="1" max={stock} readOnly></input>
                                    <button className={css(style.quantityBtn, style.up)} onClick={() => { handleAdd(quantity) }}><span>+</span></button>
                                </div>
                                <div className='stock-text-container'>
                                    <p>Cantidad disponible: {stock}</p>
                                </div>
                            </div>
                            <div className={style.buttoncontainer}>
                                <button className={css(style.add, 'btn')} onClick={() => { handleAddToCart(quantity) }}><p>Agregar al carrito </p> <span className="material-icons">add_shopping_cart</span></button>
                            </div>
                            <div className={style.category}>
                                <p>Categoría del producto: <Link to={`/api/products/categories/${category_id}`} replace>{category_name}</Link></p>
                            </div>
                            <div className={style.descriptionlink}>
                                <a href='#description'>Ver descripción del producto</a>
                            </div>
                        </div>
                    </div>

                    <div className={css(style.container, style.description_container)} id='description'>
                        <div className='description-header mb-2'>
                            <h2 className='title-center'>Descripción del producto</h2>
                        </div>
                        <div className={style.description}>
                            <table>
                                <tbody>
                                    <tr >
                                        {
                                            titles.map((element, index) =>

                                                <th key={index}><p key={index}>{element}:</p></th>
                                            )
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            content.map((element, index) =>

                                                <td key={index}><p key={index}>{element}</p></td>
                                            )
                                        }
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

const checkData = (products, dataTemplate, id) => {

    if (products.length === 0 ) {
        return dataTemplate;
    }

    const [product] = products.filter(product => parseInt(product.id) === parseInt(id));
    return product;
}

const splitDescription = (description, expression) => {

    if (!description) {
        return;
    }
    return description.split(expression);

}

const getReference = (description) => {

    let reference = [];

    if (!description) {
        return;
    }

    description.map(element =>
        reference.push(element.toString().search(/:/g))
    )

    return reference;
}

const getDescription = (description) => {

    if (!description) {
        return;
    }

    const reference = getReference(description)

    let titles = [];

    let content = [];

    for (let i = 0; i < description.length; i++) {

        titles.push(description[i].toString().substring(0, reference[i]))
        content.push(description[i].toString().substring(reference[i] + 1))

    }

    return {
        titles: titles,
        content: content
    };
}

ProductScreen.propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onAdd: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired,

}


export default ProductScreen;