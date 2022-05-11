import React from 'react'
import { Link } from 'react-router-dom';


/* Components -------------------------------- */

import ShoppingCartItem from './ShoppingCartItem'
import ToastAlert from '../Alerts/ToastAlert'


/* Custom Hooks -------------------------------- */


const ShoppingCart = ({ cartItems, onAdd, onRemove, onDelete, onBuy, isShowing, setIsShowing, message, setMessage, type, setType, onClose }) => {

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + shippingPrice;

  const handleBuy = (price) => {
    onBuy(totalPrice);
    setMessage(['Compra realizada por un precio total de: ' + totalPrice + ' ']);
    setType('info');
    setIsShowing(true);
  }

  return (
    <>
      <div className="main-content-wrapper">
        <div className="shopping-cart-container">
          {/* <!-- Shopping cart item example --> */}
          <h2 className="title-center">Carrito</h2>
          <div className="shopping-cart-headers">
            <div className="column">
              <div className="shopping-cart-header">
                <h4>Producto:</h4>
              </div>

            </div>
            <div className="column">
              <div className="shopping-cart-header">
                <h4>Precio:</h4>
              </div>

            </div>
            <div className="column">
              <div className="shopping-cart-header">
                <h4>Cantidad:</h4>
              </div>

            </div>
          </div>
          <div className="item-rows-container">
            {
              cartItems.length === 0 && <div className='empty-cart-placeholder'><h5>El carrito está vacío</h5><span><Link to={'/'}>Ir a la tienda</Link></span></div>
            }

            {
              cartItems.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onDelete={onDelete}
                  setIsShowing={setIsShowing}
                  setMessage={setMessage}
                  type={type}
                  setType={setType}
                  item={item}
                  {...item}
                />
              ))
            }
          </div>

          <div className="shopping-cart-total-container">
            {
              cartItems.length === 0
              &&
              <div className="disabled shopping-cart-total">
              </div>
            }
            {
              cartItems.length > 0
              &&
              <div className="shopping-cart-total animate__animated animate__bounceInDown animate__fast">
                <div className='shopping-cart-total-price-text'>
                  <p className="shoppingCartShippingText">Envío: USD <span className="shoppingCartShippingSpan" id="cart-total-shipping-price"> {shippingPrice.toFixed(2)}</span></p>
                  <p><span className="shoppingCartTotalText">Total:</span> USD <span className="shoppingCartTotalSpan" id="cart-total-price"> {totalPrice.toFixed(2)}</span></p>
                </div>
                <button className="btn btn-success comprarButton " type="button" data-toggle="modal"
                  data-target="#buy-success-alert"
                  onClick={() => handleBuy(totalPrice)} >
                  <p>Comprar</p>
                </button>
              </div>
            }
          </div>

          <div className="alerts-container">
            {
              <ToastAlert type={type} message={message} isShowing={isShowing} onClose={onClose} />
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default ShoppingCart;