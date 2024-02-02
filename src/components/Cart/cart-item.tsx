import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import { type ICartItem } from '../../common/interfaces';

interface Props {
	item: ICartItem
}

export const CartItem = ({ item }: Props) => {
	const { id, name, price, quantity } = item;

	return (
		<Card className="flex col-span-2">
			<CardHeader>
				<Image />
				<Link to={`/products/product/${id}`} replace>
					<h6>{name}</h6>
				</Link>
			</CardHeader>
			<CardBody>
				<p>USD <span>{price}</span> x unidad</p>
			</CardBody>
			<CardFooter>
				<div>
					<button onClick={(e) => { handleRemove(e); }}><p>-</p></button>
					<input type="number" value={quantity} min="1" max="101" onChange={() => quantity}></input>
					<button onClick={(e) => { handleAdd(e); }}><p>+</p></button>
				</div>
				<div>
					<button className="btn btn-danger remove-item-btn" type="button" onClick={(e) => { handleDelete(e); }}><span className="material-icons-outlined">close</span></button>
				</div>
			</CardFooter>
		</Card>
	);
};
