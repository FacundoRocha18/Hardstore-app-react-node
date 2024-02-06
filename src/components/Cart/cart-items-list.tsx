import { useCartContext } from "../../contexts/cart-context";
import { CartItem } from "./item/cart-item";

export const CartItemsList = () => {
	const { cart_items } = useCartContext();

	return (
			<div className='cart-items'>
			{
				cart_items.map((item) => (
					<CartItem key={item.id} item={item} {...item} />
				))
			}
		</div>
	);
};
