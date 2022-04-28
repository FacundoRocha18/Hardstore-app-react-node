import React from 'react';
import placeholderImage from '../../public/img/imagepreviewdefault.png';
import AlertToast from '../Alerts/ToastAlert'


import PropTypes from 'prop-types';


const ShoppingCartItem = (props) => {

  const { item, onAdd, onRemove, onDelete } = props;

  return (
    <>
      <div key={props.id} className="row shopping-cart-item animate__animated animate__bounceInDown animate__fast">
        <div className="column">
          <div className="shopping-cart-info">
            <div className='shopping-cart-image-container'>
              <img src={props.image} className="shopping-cart-image"></img>

            </div>
            <div className='shopping-cart-title-container'>
              <h4 className="shopping-cart-item-title shoppingCartItemTitle title-center">{props.name}</h4>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="shopping-cart-price">
            <p className="shoppingCartItemPrice">USD <span className="item-price">{props.price}</span> x unidad</p>
          </div>
        </div>
        <div className="column">
          <div className="shopping-cart-quantity-container">
            <div className='shopping-cart-quantity'>
              <div className='quantity-down-btn' onClick={() => onRemove(item)}><span>-</span></div>
              <input className="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value={props.qty} min="1" max="101" onChange={() => props.qty}></input>
              <div className='quantity-up-btn' onClick={() => onAdd(item)}><span>+</span></div>
            </div>
            <div className='remove-cart-item-button-container'>
              <button className="btn btn-danger remove-item-btn" type="button" onClick={() => onDelete(item)}><span className="material-icons-outlined">close</span></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

ShoppingCartItem.defaultProps = {
  itemTitle: 'Product name',
  itemImage: placeholderImage,
  itemPrice: 0
}

export default ShoppingCartItem;