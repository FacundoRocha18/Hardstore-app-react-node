import { useCartContext } from "../../contexts/cart-context";
import Grid from "../Common/grid";
import { CartItem } from "./cart-item";

export const CartItemsList = () => {
	const { cart_items } = useCartContext();

	return (
		<div className='cart-items'>
			<Grid
				columns={1}
				gap={4}
				autoRows={"fr"}
			>
				{cart_items.map((item) => (
					<CartItem key={item.id} item={item} {...item} />
				))}
			</Grid>
		</div>
	);
};
