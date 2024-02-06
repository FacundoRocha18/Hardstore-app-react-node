import { Button } from '@nextui-org/react';
import type React from 'react';

interface Props {
	quantity: number;
}

export const NumericUpDown = ({ quantity }: Props) => {
	const handleAdd = (e: React.MouseEvent) => {
		e.preventDefault();
	};

	const handleRemove = (e: React.MouseEvent) => {
		e.preventDefault();
	};

	return (
		<div className='flex w-fit'>
			<Button className='border-1 rounded-l rounded-r-none min-w-0 w-10 hover:text-primary' variant='bordered' onClick={(e) => { handleRemove(e) }}>
				-
			</Button>
			<input
				type="number"
				value={1}
				min="1"
				max="101"
				className='border-1 border-l-0 border-r-0 text-foreground text-center'
				onChange={() => quantity}
			></input>
			<Button className='border-1 rounded-r rounded-l-none min-w-0 w-10 hover:text-primary' variant='bordered' onClick={(e) => { handleAdd(e) }}>
				+
			</Button>
		</div>
	);
};
