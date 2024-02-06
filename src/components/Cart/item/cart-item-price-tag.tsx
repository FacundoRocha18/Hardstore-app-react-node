interface Props {
	price: number;
}

export const CartItemPriceTag = ({ price }: Props) => {
	return (
		<div className='flex items-center justify-center cart-item-price-tag'>
			<p className='text-primary text-lg font-medium text-center'>
				USD {price}
			</p>
		</div>
	);
};
