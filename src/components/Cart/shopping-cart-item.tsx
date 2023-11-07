import React from 'react';
import { Link } from 'react-router-dom';

/* Styles imports -------------------------------- */
import style from './shopping-cart-item.module.css';
import css from 'classnames';

const ShoppingCartItem = ({ item, onAdd, onRemove, onDelete, showAlert }) => {
  const { id, thumbnail, name, price, qty } = item;

  const handleRemove = (e) => {
    e.preventDefault()
    onRemove(item)
    showAlert('La cantidad fue disminuida', 'info', true);
  }

  const handleAdd = (e) => {
    e.preventDefault()
    onAdd(item, 1)
    showAlert('La cantidad fue aumentada', 'info', true);
  }

  const handleDelete = (e) => {
    e.preventDefault();
    onDelete(item);
    showAlert('El producto se eliminó del carrito', 'info', true);
  }

  return (
    <>
      {
        <div key={id} className={css(style.cartItem, 'row animate__animated animate__bounceInDown animate__fast')}>
          <div className={style.column}>
            <div className={css(style.container, style.info)}>
              <div className={style.imageContainer}>
              </div>
              <div className={style.titleContainer}>
                <Link to={`/api/products/product/${id}`} replace>
                  <h6 className={css('title-center', style.title)}>{name}</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.container}>
              <p className="shoppingCartItemPrice">USD <span className={style.itemPrice}>{price}</span> x unidad</p>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.container}>
              <div className={style.buttons_container}>
                <div className={style.quantityContainer}>
                  <button className={css(style.quantityBtn, style.down)} onClick={(e) => { handleRemove(e); }}><p>-</p></button>
                  <input className={style.qtyInput} type="number" value={qty} min="1" max="101" onChange={() => qty}></input>
                  <button className={css(style.quantityBtn, style.up)} onClick={(e) => { handleAdd(e); }}><p>+</p></button>
                </div>
                <div className={style.removeButtonContainer}>
                  <button className="btn btn-danger remove-item-btn" type="button" onClick={(e) => { handleDelete(e); }}><span className="material-icons-outlined">close</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}

ShoppingCartItem.defaultProps = {
  itemTitle: 'Product name',
  itemPrice: 0
}

export default ShoppingCartItem;
