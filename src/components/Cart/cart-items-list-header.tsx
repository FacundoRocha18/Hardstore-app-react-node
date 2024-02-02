import Grid from '../Common/Grid';

export const CartItemsListHeader = () => {
	return (
		<Grid columns={2} rows={1} gap={4} colSpan={2} colStart={1} rowSpan={1} rowStart={1}>
			<p>Producto</p>
			<p >Precio</p>
			<p >Cantidad</p>
			<p >Subtotal</p>
		</Grid>
	);
};
