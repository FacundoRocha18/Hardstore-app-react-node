import { useCartContext } from "../../contexts/cart-context";
import Grid from "../Common/grid";
import { GridItem } from '../Common/grid-item';
import { CartItem } from "./cart-item";

export const CartItemsList = () => {
	const { cart_items } = useCartContext();

	return (
		<GridItem
			colStart={1}
			colSpan={2}
			rowStart={2}
			rowSpan={1}
		>
			<Grid
				columns={1}
				gap={4}
				autoRows={"fr"}
			>
				{cart_items.map((item) => (
					<CartItem key={item.id} item={item} {...item} />
				))}
			</Grid>
		</GridItem>
	);
};
