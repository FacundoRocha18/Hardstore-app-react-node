import Grid from "../Common/grid";
import { CartItemsList } from "./cart-items-list";
import { CartOrderDetails } from "./cart-order-details";

export const ShoppingCartLayout = () => {
	return (
		<Grid columns={3} rows={1} height={20}>
			<CartItemsList />
			<CartOrderDetails />
		</Grid>
	);
};
