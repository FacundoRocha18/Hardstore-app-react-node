import { Divider } from '@nextui-org/react';
import { NumericUpDown } from '../../Common/numeric-up-down';
import { RemoveButton } from '../../Common/remove-button';

interface Props {
	quantity: number;
}

const styles = 'cart-item-controls flex items-center gap-2 col-start-1 col-end-4 self-center'

export const CartItemControls = ({ quantity }: Props) => {
	return (
		<div className={styles}>
			<NumericUpDown quantity={quantity} />
			<Divider orientation='vertical' />
			<RemoveButton />
		</div>
	);
};