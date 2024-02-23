import { Button } from '@nextui-org/react';
import { useCartContext } from '../../contexts/cart-context';
import { type ICartProduct } from '../../common/interfaces';

interface Props {
	product: ICartProduct;
}

export const RemoveButton = ({ product }: Props) => {
	const { on_delete } = useCartContext();

	const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		on_delete(product);
	};

	return (
		<Button
			className="bg-danger-50 p-2 text-black rounded lg:bg-transparent lg:p-0 lg:text-primary"
			type="button"
			onClick={(e) => {
				handleDelete(e);
			}}>
			Eliminar del carrito
		</Button>
	);
};
