import { useCartContext } from '../../contexts/cart-context';
import Grid from '../Common/Grid';
import { CartItem } from './cart-item';

export const CartItemsList = () => {
	const { cart_items } = useCartContext();

	return (
		<Grid columns={1} gap={4} autoRows={'fr'} colStart={1} colSpan={2} rowStart={2} rowSpan={1}>
			{
				cart_items.map((item) => (
					<CartItem
						key={item.id}
						item={item}
						{...item}
					/>
				))
			}
		</Grid>
	);
};
