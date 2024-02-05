import { useEffect, useState } from "react";
import { type IProduct } from "../common/interfaces";

export const useCart = () => {
  const [cart_items, setCartItems] = useState<IProduct[]>([]);
  const [is_cart_empty, setIsCartEmpty] = useState(true);
  const [total, setTotal] = useState(0);
  const [shipping_cost, setShippingCost] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    if (cart_items.length > 0) {
      setIsCartEmpty(false);
    }

    setTotal(cart_items.reduce((a, c) => a + c.price * c.qty, 0));
    calc_shipping_costs(total);
    setSubtotal(total + shipping_cost);
    console.log(subtotal);
  }, [cart_items]);

  const on_add = (product, QTY) => {
    const exist = cart_items.find((x) => x.id === product.id);

    if (exist !== undefined) {
      setCartItems(
        cart_items.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + QTY } : x,
        ),
      );
    } else {
      setCartItems([...cart_items, { ...product, qty: QTY }]);
    }
  };

  const on_remove = (product) => {
    const exist = cart_items.find((x) => x.id === product.id);

    try {
      exist.qty === 1
        ? setCartItems(cart_items.filter((x) => x.id !== product.id))
        : setCartItems(
            cart_items.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x,
            ),
          );
    } catch (e) {}
  };

  const on_delete = (product) => {
    const exist = cart_items.find((x) => x.id === product.id);

    try {
      if (exist.qty >= 1)
        setCartItems(cart_items.filter((x) => x.id !== product.id));
    } catch (e) {}
  };

  const on_buy = (total) => {
    const productsDataList = [];

    cart_items.forEach((item) =>
      productsDataList.push([item.id, item.name].join(" , ")),
    );
  };

  const calc_shipping_costs = (total: number) => {
    if (total < 300) {
      setShippingCost(10);
    }
  };

  return [
    total,
    shipping_cost,
    subtotal,
    is_cart_empty,
    cart_items,
    on_add,
    on_remove,
    on_delete,
    on_buy,
  ] as const;
};
