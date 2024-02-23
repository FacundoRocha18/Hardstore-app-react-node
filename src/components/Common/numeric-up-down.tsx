import { Button } from '@nextui-org/react';
import type React from 'react';
import { useCartContext } from '../../contexts/cart-context';
import { type IProduct } from '../../common/interfaces';

interface Props {
	product: IProduct;
	quantity: number;
}

export const NumericUpDown = ({ product, quantity }: Props) => {
	const { on_add, on_remove } = useCartContext();
	const handleAdd = (e: React.MouseEvent) => {
		e.preventDefault();
		on_add(product, 1);
	};

	const handleRemove = (e: React.MouseEvent) => {
		e.preventDefault();
		on_remove(product, 1);
	};

	return (
		<div className='flex w-fit'>
			<Button className='border-1 rounded-l rounded-r-none min-w-0 w-10 hover:text-primary' variant='bordered' onClick={(e) => { handleRemove(e) }}>
				-
			</Button>

			<input
				type="number"
				value={quantity}
				min="1"
				max="101"
				className='border-1 border-l-0 border-r-0 text-foreground text-center'
				onChange={() => quantity}
			/>

			<Button className='border-1 rounded-r rounded-l-none min-w-0 w-10 hover:text-primary' variant='bordered' onClick={(e) => { handleAdd(e) }}>
				+
			</Button>
		</div>
	);
};
