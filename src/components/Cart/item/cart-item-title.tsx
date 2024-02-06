import { Link } from 'react-router-dom';

interface Props {
	id: string;
	name: string;
}

export const CartItemTitle = ({ id, name }: Props) => {
	return (
		<div className='flex items-center cart-item-title'>
			<Link to={`/products/product/${id}`} replace>
				<h6 className='line-clamp-1 text-ellipsis'>{name}</h6>
			</Link>
		</div>
	);
};
