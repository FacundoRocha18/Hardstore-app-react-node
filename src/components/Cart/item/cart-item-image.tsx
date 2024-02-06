import { Image } from '@nextui-org/react';

interface Props {
	image: string;
}

export const CartItemImage = ({ image }: Props) => {
	return (
		<div className='cart-item-image self-center justify-self-center'>
			<Image width={150} height={150} src={`data:image/jpeg;base64,${image}`} />
		</div>
	);
};