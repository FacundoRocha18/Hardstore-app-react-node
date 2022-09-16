import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/* Custom hooks -------------------------------- */
import useFetchProducts from '../../hooks/useFetchProducts'

/* Components -------------------------------- */
import Loading from '../LoadingScreen'

/* Styles imports -------------------------------- */
import style from "./ProductScreen.module.css";
import css from "classnames";

/* Cloudinary -------------------------------- */
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";

const ProductScreen = ({ products, loading, onAdd, showAlert }) => {

    console.log(products)

    const { id } = useParams();

    const [quantity, setQuantity] = useState(1)

    const [product] = checkData(products, id);

    console.log(product)

    const { name, image, price, description, stock, category_name } = product;

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
                    <div className={css(style.container)}>
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
                                <p>Categoría del producto: <Link to={`/api/products/categories/${category_name}`} replace>{category_name}</Link></p>
                            </div>
                            <div className={style.descriptionlink}>
                                <a href='#description'>Ver descripción del producto</a>
                            </div>
                        </div>
                    </div>

                    <div className={style.descriptionContainer} id='description'>
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

const checkData = (products, id) => {

    if (!products) {
        return console.log('no hay productos');
    }
    console.log(products.filter(product => product.id.toString() === id.toString()))

    return products.filter(product => product.id === id);
}

const splitDescription = (description, expression) => {

    if (description.length === 0) {

        throw Error('Descripción vacía');

    }
    return description.split(expression);

}

const getReference = (description) => {

    let reference = [];

    description.map(element =>
        reference.push(element.toString().search(/:/g))
    )

    return reference;
}

const getDescription = (description) => {

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

ProductScreen.defaultProps = {
    description: 'des'
}


export default ProductScreen;