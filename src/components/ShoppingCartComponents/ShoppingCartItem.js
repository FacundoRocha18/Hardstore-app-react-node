import React from 'react';
import placeholderImage from '../../public/img/imagepreviewdefault.png';




const ShoppingCartItem = ({ item, onAdd, onRemove, onDelete, setIsShowing, setMessage, setType }) => {

  const { id, image, name, price, qty } = item;

  const handleRemove = (e) => {

    e.preventDefault()
    onRemove(item)
    setMessage('La cantidad fue disminuida correctamente')
    setType('success')
    setIsShowing(true)
  }

  const handleAdd = (e) => {

    e.preventDefault()
    onAdd(item, 1)
    setMessage('La cantidad fue aumentada correctamente')
    setType('success')
    setIsShowing(true)
  }

  const handleDelete = (e) => {

    e.preventDefault();
    onDelete(item);
    setMessage('El producto se eliminó del carrito correctamente')
    setType('success')
    setIsShowing(true)
  }

  return (
    <>
      <div key={id} className="row shopping-cart-item animate__animated animate__bounceInDown animate__fast">
        <div className="column">
          <div className="shopping-cart-info">
            <div className='shopping-cart-image-container'>
              <img src={image} className="shopping-cart-image"></img>

            </div>
            <div className='shopping-cart-title-container'>
              <h4 className="shopping-cart-item-title shoppingCartItemTitle title-center">{name}</h4>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="shopping-cart-price">
            <p className="shoppingCartItemPrice">USD <span className="item-price">{price}</span> x unidad</p>
          </div>
        </div>
        <div className="column">
          <div className="shopping-cart-quantity-container">
            <div className='shopping-cart-quantity'>
              <div className='quantity-down-btn' onClick={(e) => handleRemove(e)}><span>-</span></div>
              <input className="shopping-cart-quantity-input shoppingCartItemQuantity" type="number" value={qty} min="1" max="101" onChange={() => qty}></input>
              <div className='quantity-up-btn' onClick={(e) => handleAdd(e)}><span>+</span></div>
            </div>
            <div className='remove-cart-item-button-container'>
              <button className="btn btn-danger remove-item-btn" type="button" onClick={(e) => handleDelete(e)}><span className="material-icons-outlined">close</span></button>
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