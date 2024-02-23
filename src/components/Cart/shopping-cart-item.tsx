import { Link } from "react-router-dom";

/* Styles imports -------------------------------- */
import style from "./shopping-cart-item.module.css";
import css from "classnames";
import { useCartContext } from "../../contexts/cart-context";
import { useAlertsContext } from "../../contexts/alerts-context";
import { type ICartProduct } from "../../common/interfaces";

interface Props {
  item: ICartProduct;
}

export const ShoppingCartItem = ({ item }: Props) => {
  const { id, name, price, quantity } = item;
  const { on_add, on_remove, on_delete } = useCartContext();
  const { show_alert } = useAlertsContext();

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    on_remove(item);
    show_alert("La cantidad fue disminuida", "info", true);
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    on_add(item, 1);
    show_alert("La cantidad fue aumentada", "info", true);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    on_delete(item);
    show_alert("El producto se eliminó del carrito", "info", true);
  };

  return (
    <>
      {
        <div key={id} className={css(style.cartItem)}>
          <div className={style.column}>
            <div className={css(style.container, style.info)}>
              <div className={style.imageContainer}></div>
              <div className={style.titleContainer}>
                <Link to={`/products/product/${id}`} replace>
                  <h6 className={css("title-center", style.title)}>{name}</h6>
                </Link>
              </div>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.container}>
              <p className="shoppingCartItemPrice">
                USD <span className={style.itemPrice}>{price}</span> x unidad
              </p>
            </div>
          </div>
          <div className={style.column}>
            <div className={style.container}>
              <div className={style.buttons_container}>
                <div className={style.quantityContainer}>
                  <button
                    className={css(style.quantityBtn, style.down)}
                    onClick={(e) => {
                      handleRemove(e);
                    }}
                  >
                    <p>-</p>
                  </button>
                  <input
                    className={style.qtyInput}
                    type="number"
                    value={quantity}
                    min="1"
                    max="101"
                    onChange={() => quantity}
                  ></input>
                  <button
                    className={css(style.quantityBtn, style.up)}
                    onClick={(e) => {
                      handleAdd(e);
                    }}
                  >
                    <p>+</p>
                  </button>
                </div>
                <div className={style.removeButtonContainer}>
                  <button
                    className="btn btn-danger remove-item-btn"
                    type="button"
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  >
                    <span className="material-icons-outlined">close</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};
