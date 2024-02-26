import {
	Card,
} from "@nextui-org/react";
import { type ICartProduct } from "../../../common/interfaces";
import { CartItemControls } from './cart-item-controls';
import { CartItemImage } from './cart-item-image';
import { CartItemTitle } from './cart-item-title';
import { CartItemPriceTag } from './cart-item-price-tag';

interface Props {
	product: ICartProduct;
}

export const CartItem = ({ product }: Props) => {
	const { id, name, price, quantity, image } = product;

	console.log(id, name, price, quantity, image)

	return (
		<Card className="rounded p-4 min-w-full lg:max-h-40 cart-item-layout">
			<CartItemImage image={image} />
			<CartItemTitle id={id} name={name} />
			<CartItemPriceTag price={price} />
			<CartItemControls product={product} quantity={quantity} />
		</Card>
	);
};
