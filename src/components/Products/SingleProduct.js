import React, { useState, useEffect } from 'react';
import useFetchProducts from '../../hooks/useFetchProducts'
import { useParams } from 'react-router-dom';

/* Components -------------------------------- */
import ToastAlert from '../Alerts/ToastAlert'



const SingleProduct = ({ onAdd, onRemove, isShowing, setIsShowing, message, setMessage, onClose }) => {

    const { id } = useParams();

    const { data: products, loading } = useFetchProducts();

    const [dataTemplate, setDataTemplate] = useState({
        id: 0,
        name: 'name',
        image: 'image',
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

    console.log(titles);

    console.log(content);


    const handleAdd = (qty) => {

        (qty < 10)
            ?
            setQuantity(qty + 1)
            :
            setQuantity(qty)

        return console.log(qty);
    }

    const handleRemove = (qty) => {

        (qty > 0)
            ?
            setQuantity(qty - 1)
            :
            setQuantity(qty)
        return console.log(qty);
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
                    <div className='single-product-container'>
                        <div className='single-product-image'>
                            <img src={image} alt={name}></img>
                        </div>
                        <div className='single-product-header'>
                            <div className='single-product-title'>
                                <h1>{name}</h1>
                            </div>
                            <div className='single-product-price mbt-2'>
                                <h3 className='mr-2'>USD <span>{price.toFixed(2)} </span></h3><p> iva inc.</p>
                            </div>
                            <div className='single-product-stock mbt-2'>
                                <div className='qty-input-container'>
                                    <button className='quantity-down-btn' onClick={() => handleRemove(quantity)}><span>-</span></button>
                                    <input className="single-product-quantity-input" value={quantity} type="number" min="1" max={stock} readOnly></input>
                                    <button className='quantity-up-btn' onClick={() => { handleAdd(quantity) }}><span>+</span></button>
                                </div>
                                <div className='stock-text-container'>
                                    <p>Cantidad disponible: {stock}</p>
                                </div>
                            </div>
                            <div className='single-product-button-wrapper mbt-4'>
                                <button className='buy-now-button btn'><p>Comprar ahora</p></button>
                                <button className='add-to-cart-sp btn' onClick={() => { handleAddToCart(quantity) }}><span className="material-icons">add_shopping_cart</span></button>
                            </div>
                            <div className='single-product-category mbt-4'>
                                <p>Categoría del producto: <a href='#'>{category_name}</a></p>
                            </div>
                            <div className='single-product-description-link-wrapper mbt-4'>
                                <a href='#description'>Ver descripción del producto</a>
                            </div>
                        </div>
                    </div>

                    {
                        <ToastAlert type='success' message='Se añadió correctamente el producto al carrito' isShowing={isShowing} onClose={onClose} />
                    }

                    <div className='single-product-description-container pd-2 mt-4' id='description'>
                        <div className='description-header mb-2'>
                            <h2 className='title-center'>Descripción del producto</h2>
                        </div>
                        <div className='description-body mt-4'>
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


export default SingleProduct;