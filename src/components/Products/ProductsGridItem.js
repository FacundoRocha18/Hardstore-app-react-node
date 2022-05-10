import React from 'react'
import { Link } from 'react-router-dom';
import placeholderImage from '../../public/img/imagepreviewdefault.png';

const ProductsGridItem = ({ onAdd, product, id, name, image, price, setIsShowing }) => {


    const handleAddButtonClicked = (e) => {
        
        e.preventDefault();

        setIsShowing(true)
        onAdd(product);

    }

    return (
        <>
            <div className="products-item" id="item">
                <div className="product-body">
                    <div className="product-image">
                        <img src={image} alt={name} id="item-image"></img>
                    </div>
                    <div className="product-info">
                        <div className="product-item-title">
                            <Link to={`api/products/singleProduct/${id}`}><h3 id="item-title">{name}</h3></Link>
                        </div>
                        <div className="product-info-flex">
                            <div className="product-price">
                                <p>USD<span id="item-price"> {price} </span> iva inc.</p>
                            </div>
                            <div className="btn-container">
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

ProductsGridItem.defaultProps = {
    name: 'Product name',
    image: placeholderImage,
    price: 0
}

export default ProductsGridItem;