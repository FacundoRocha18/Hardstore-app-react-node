import Grid from '../Common/Grid';
import { CartItemsList } from './cart-items-list';
import { CartItemsListHeader } from './cart-items-list-header';
import { CartOrderDetails } from './cart-order-details';

export const ShoppingCartLayout = () => {
	return (
		<Grid columns={3} rows={3} height={20}>
			<CartItemsListHeader />
			<CartItemsList />
			<CartOrderDetails />
		</Grid>
	);
};
