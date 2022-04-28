import React, { useState, useEffect } from 'react'
import ModalAlert from '../Alerts/ModalAlert'
import AlertToast from '../Alerts/ToastAlert'
import ShoppingCartItem from './ShoppingCartItem'


const ShoppingCart = (props) => {

  const { cartItems, onAdd, onRemove, onDelete, onBuy, result, modalData } = props;
  const { success, info, alertClass } = result;

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + shippingPrice;
  
  const OnClose = () => {
    
    const alertContainer = document.querySelector('.alerts-container');

    alertContainer.classList.remove('animate__bounceInDown');
    alertContainer.classList.add('animate__bounceOutRight');


    setTimeout(() => {
      alertContainer.classList.add('alert-inactive')
      alertContainer.classList.add('animate__bounceInDown');
      alertContainer.classList.remove('animate__bounceOutRight');
    }, 400);

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
              cartItems.length === 0 && <div><h5 className='title-center mt-2'>El carrito está vacío</h5></div>
            }

            {
              cartItems.map((item) => (
                <ShoppingCartItem
                  key={item.id}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onDelete={onDelete}
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
                  data-target="#buy-success-alert" onClick={() => onBuy(totalPrice)} ><p>Comprar</p></button>
              </div>
            }
          </div>

          <div className='modal-container modal-inactive animate__animated animate__fadeIn animate__fast'>
            {
              <ModalAlert data={modalData} />
            }
          </div>

          <div className="alerts-container animate__animated animate__bounceInDown animate__fast">
            {
              result.success ? <AlertToast onClose={OnClose} info={result.info} alertClass={result.alertClass} /> : <AlertToast onClose={OnClose} info={result.info} alertClass={result.alertClass} />
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default ShoppingCart;