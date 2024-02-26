import { Divider } from '@nextui-org/react';
import { NumericUpDown } from '../../Common/numeric-up-down';
import { RemoveButton } from '../../Common/remove-button';
import { type ICartProduct } from '../../../common/interfaces';

interface Props {
	product: ICartProduct;
	quantity: number;
}

const styles = 'cart-item-controls flex items-center gap-2 col-start-1 col-end-4 self-center'

export const CartItemControls = ({ product, quantity }: Props) => {
	console.log(quantity)
	return (
		<div className={styles}>
			<NumericUpDown product={product} quantity={quantity} />
			<Divider orientation='vertical' />
			<RemoveButton product={product} />
		</div>
	);
};