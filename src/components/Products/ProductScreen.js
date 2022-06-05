import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/* Custom hooks -------------------------------- */
import useFetchProducts from '../../hooks/useFetchProducts'

/* Components -------------------------------- */
import ToastAlert from '../Alerts/Alert'

/* Styles imports -------------------------------- */
import style from "./ProductScreen.module.css";
import css from "classnames";



const ProductScreen = ({ onAdd, isShowing, setIsShowing, message, setMessage, onClose }) => {

    const { id } = useParams();

    const { data: products, loading } = useFetchProducts();

    const [dataTemplate, setDataTemplate] = useState({
        id: 0,
        name: 'name',
        image: 'defaultIMG',
        description: 'description',
        price: 0,
        stock: 0,
        category_id: 0,
        category_name: 'category'
    })

    const [quantity, setQuantity] = useState(1)

    const { name, image, price, description, stock, category_id, category_name } = checkData(products, dataTemplate, id);

    const regEx1 = /,/g;

    const splitedDescription = splitDescription(description, regEx1);

    const { titles, content } = getDescription(splitedDescription);

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

        onAdd(checkData(products, dataTemplate, id), qty)
        setMessage('La cantidad fue aumentada exitosamente')
        setIsShowing(true)
    }

    return (
        <>
            {
                loading && <h5 className='title-center animate__animated animate__flash animate__slower animate__infinite'>Cargando...</h5>
            }

            {
                <div className='main-content-wrapper'>
                    {
                        <ToastAlert type='success' message='Se añadió correctamente el producto al carrito' isShowing={isShowing} onClose={onClose} />
                    }
                    <div className={css(style.container)}>
                        <div className={style.image}>
                            <img src={image} alt={name}></img>
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

                    <div className={style.descriptionContainer} id='description'>
                        <div className='description-header mb-2'>
                            <h2 className='title-center'>Descripción del producto</h2>
                        </div>
                        <div className={style.description}>
                            <table>
                                <tbody>
                                    <tr >
                                        {
                                            titles.map(element =>

                                                <th><p>{element}:</p></th>
                                            )
                                        }
                                    </tr>
                                    <tr>
                                        {
                                            content.map(element =>

                                                <td><p>{element}</p></td>
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

const giveProduct = (products, id) => {

    const matchingProd = products.filter((prod) => {

        const idToMatch = prod.id.toString();

        return idToMatch === id;

    });

    return matchingProd;
}

const checkData = (products, dataTemplate, id) => {

    if (products.length === 0) {
        return dataTemplate;
    } else {
        const [productData] = giveProduct(products, id);
        return productData;
    }

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


export default ProductScreen;