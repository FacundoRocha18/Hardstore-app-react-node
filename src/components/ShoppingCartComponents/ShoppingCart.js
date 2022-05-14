import React from 'react'
import { Link } from 'react-router-dom';


/* Components -------------------------------- */

import ShoppingCartItem from './ShoppingCartItem'
import ToastAlert from '../Alerts/ToastAlert'


/* Custom Hooks -------------------------------- */

/* Styles imports -------------------------------- */
import style from "./cart.module.css";
import css from "classnames";


const ShoppingCart = ({ cartItems, onAdd, onRemove, onDelete, onBuy, isShowing, setIsShowing, message, setMessage, type, setType, onClose }) => {

  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + shippingPrice;

  const handleBuy = (price, cartItems) => {
    onBuy(price);
    let itemList = [];
    cartItems.map((item) =>
      itemList.push(item.name)

    )
    setMessage(['Compra de: ' + itemList + ' realizada por un precio total de: ' + price + ' ']);
    setType('info');
    setIsShowing(true);
  }

  return (
    <>
      <div className="main-content-wrapper">
        {
          <ToastAlert type={type} message={message} isShowing={isShowing} onClose={onClose} />
        }
        <div className={css(style.container)}>
          <h2 className="title-center">Carrito</h2>
          <div className={style.cartHeaders}>
            <div className="column">
              <div className={style.header}>
                <h4>Producto:</h4>
              </div>

            </div>
            <div className="column">
              <div className={style.header}>
                <h4>Precio:</h4>
              </div>

            </div>
            <div className="column">
              <div className={style.header}>
                <h4>Cantidad:</h4>
              </div>

            </div>
          </div>
          <div className={style.rowsContainer}>
            {
              cartItems.length === 0 && <div className={style.placeholder}><h5>El carrito está vacío</h5><span><Link to={'/'}>Ir a la tienda</Link></span></div>
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

          <div className={style.totalContainer}>
            {
              cartItems.length === 0
              &&
              <div className={css(style.total, 'disabled')}>
              </div>
            }
            {
              cartItems.length > 0
              &&
              <div className={css(style.total, "animate__animated animate__bounceInDown animate__fast")}>
                <div className={style.priceText}>
                  <p className={style.shoppingCartShippingText}>Envío: USD <span className={style.shoppingCartShippingSpan} id="cart-total-shipping-price"> {shippingPrice.toFixed(2)}</span></p>
                  <p><span className={style.shoppingCartTotalText}>Total:</span> USD <span className={style.shoppingCartTotalSpan} id="cart-total-price"> {totalPrice.toFixed(2)}</span></p>
                </div>
                <button className="btn btn-success comprarButton " type="button" data-toggle="modal"
                  data-target="#buy-success-alert"
                  onClick={() => handleBuy(totalPrice, cartItems)} >
                  <p>Comprar</p>
                </button>
              </div>
            }
          </div>
        </div>
      </div>


    </>
  )
}

export default ShoppingCart;