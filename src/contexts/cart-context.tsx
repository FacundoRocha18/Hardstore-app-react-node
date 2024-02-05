import { type IChildrenProps, type ICartContext } from "../common/interfaces";
import { useCart } from "../hooks/useCart";
import { createContextCustom } from "../hooks/useContextCustom";

export const [useCartContext, ContextProvider] =
  createContextCustom<ICartContext>();

export const CartProvider = ({ children }: IChildrenProps) => {
  const [
    total,
    shipping_cost,
    subtotal,
    is_cart_empty,
    cart_items,
    on_add,
    on_remove,
    on_delete,
    on_buy,
  ] = useCart();

  const provider_value: ICartContext = {
    total,
    shipping_cost,
    subtotal,
    is_cart_empty,
    cart_items,
    on_add,
    on_remove,
    on_delete,
    on_buy,
  };

  return <ContextProvider value={provider_value}>{children}</ContextProvider>;
};
