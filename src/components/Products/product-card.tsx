import { Link } from 'react-router-dom';
import { useAlertsContext } from '../../contexts/alerts-context';
import { useCartContext } from '../../contexts/cart-context';

/* Styles imports -------------------------------- */
import { type IProduct } from '../../common/interfaces';
import { Card, CardBody, CardHeader, Image, Button, CardFooter } from '@nextui-org/react';
import { IconShoppingBagPlus } from '@tabler/icons-react';

interface Props {
	product: IProduct
}

export const ProductsCard = ({ product }: Props) => {
	const { on_add } = useCartContext()
	const { show_alert } = useAlertsContext()
	const { id, name, price } = product

	const handle_add_clicked = (e: any) => {
		e.preventDefault();

		show_alert('Se añadió correctamente el producto al carrito', 'success', true);
		on_add(product, 1);
	}

	return (
		<Card isFooterBlurred>
			<CardHeader className='absolute z-20 top-1 flex-col !items-start'>

			</CardHeader>
			<CardBody className='justify-center'>
				<Image
					removeWrapper
					className='object-cover'
					src="https://pcparts.com.uy/wp-content/uploads/2021/06/EQUIPOSARMADOSINTEL10GTX-300x300.jpg"
				/>
			</CardBody>
			<CardFooter className='flex justify-between items-center gap-2 p-4'>
				<section className='w-3/4'>
					<Link to={`/api/products/product/${id}`} replace>
						<h6 className='max-w-full overflow-hidden text-ellipsis' title={name}>{name}</h6>
					</Link>
					<h5 className='font-semibold text-lg'>USD <span className='text-orange-500'>{price}</span> iva inc.</h5>
				</section>
				<section className='w-1/4 flex place-content-center'>
					<Button className="p-0 gap-0 min-w-0 w-14 h-14 rounded-full hover:bg-orange-500" onClick={(e) => { handle_add_clicked(e); }}>
						<IconShoppingBagPlus />
					</Button>
				</section>
			</CardFooter>
		</Card>
	)
}
