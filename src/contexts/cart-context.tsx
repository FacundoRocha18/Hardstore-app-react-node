import { type IChildrenProps, type ICartContext } from "../common/interfaces";
import { useCart } from "../hooks/useCart";
import { createContextCustom } from "../hooks/useContextCustom";

export const [useCartContext, ContextProvider] =
  createContextCustom<ICartContext>();

export const CartProvider = ({ children }: IChildrenProps) => {
	const [
		cart_data,
		cart_products,
		loading,
		error,
		total,
    shipping_cost,
    subtotal,
    is_cart_empty,
    on_add,
    on_remove,
    on_delete,
    on_buy,
		on_select_shipping
	] = useCart();

  const provider_value: ICartContext = {
    total,
    shipping_cost,
    subtotal,
    is_cart_empty,
		cart_data,
    cart_products,
    on_add,
    on_remove,
    on_delete,
    on_buy,
		on_select_shipping,
		loading,
		error
  };

  return <ContextProvider value={provider_value}>{children}</ContextProvider>;
};
