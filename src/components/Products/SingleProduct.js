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

    const separatedDescription = splitDescription(description)

    useEffect(() => {
        console.log(quantity)

        return () => {

        }
    }, [quantity])


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
                            <table className='mb-2'>
                                <caption className='mb-2'><h4>Modelo</h4></caption>
                                <tbody>
                                    <tr>
                                        <th><h6>Marca: </h6></th>
                                        <td>{separatedDescription[0]}</td>
                                    </tr>
                                    <tr>
                                        <th><h6>Modelo: </h6></th>
                                        <td>{separatedDescription[1]}</td>
                                    </tr>
                                    <tr>
                                        <th><h6>Número de modelo: </h6></th>
                                        <td>{separatedDescription[2]}</td>
                                    </tr>
                                </tbody>

                            </table>
                            <table className='mb-2'>
                                <caption className='mb-2'><h4>Procesador</h4></caption>
                                <tbody>
                                    <tr >
                                        <th ><h6>Marca: </h6></th>
                                        <td>{separatedDescription[3]}</td>
                                    </tr>

                                    <tr >
                                        <th ><h6>Generación: </h6></th>
                                        <td>{separatedDescription[4]}</td>
                                    </tr>
                                    <tr >
                                        <th><h6>Modelo: </h6></th>
                                        <td>{separatedDescription[5]}</td>
                                    </tr>
                                    <tr >
                                        <th><h6>Velocidad del reloj: </h6></th>
                                        <td>{separatedDescription[6]}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className='mb-2'>
                                <caption className='mb-2'><h4>Memoria</h4></caption>
                                <tbody>
                                    <tr className=''>
                                        <th><h6>Capacidad: </h6></th>
                                        <td>{separatedDescription[7]}</td>
                                    </tr>
                                    <tr>
                                        <th><h6>Formato: </h6></th>
                                        <td>{separatedDescription[8]}</td>
                                    </tr>
                                    <tr>
                                        <th><h6>Velocidad del reloj: </h6></th>
                                        <td>{separatedDescription[9]}</td>
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

const splitDescription = (description) => {

    if (description.length === 0) {

        throw Error('Descripción vacía');

    }
    return description.split(/,/g);

}


export default SingleProduct;