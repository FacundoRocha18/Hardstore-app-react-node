import { CartItemsList } from "./cart-items-list";
import { CartOrderDetails } from "./cart-order-details";

export const CartLayout = () => {
	return (
		<div className='cart-layout'>
			<CartItemsList />
			<CartOrderDetails />
		</div>
	);
};
