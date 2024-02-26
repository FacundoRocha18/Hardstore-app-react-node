import { useCartContext } from "../../contexts/cart-context";
import { CartItem } from "./item/cart-item";

export const CartItemsList = () => {
	const { cart_products } = useCartContext();

	return (
			<div className='cart-items'>
			{
				cart_products.map((product) => (
					<CartItem key={product.id} product={product} />
				))
			}
		</div>
	);
};
