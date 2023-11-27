/* React Router -------------------------------- */
import { Link } from 'react-router-dom';

/* Components -------------------------------- */
import { ShoppingCartItem } from './shopping-cart-item'

/* Custom Hooks -------------------------------- */
import { useCartContext } from '../../contexts/cart-context';
import { Button } from '@nextui-org/react';
import { CartOrderDetails } from './cart-order-details';

export const ShoppingCart = () => {
	const { cart_items, is_cart_empty } = useCartContext()

	return (
		<section className="w-8/12 m-auto h-screen">
			<h2 className="text-center">Mi carrito ({cart_items.length} items)</h2>
			<div className='flex items-center justify-between'>
				<div className='text-center'>
					{
						is_cart_empty
							?
							<div><h4>El carrito está vacío</h4><Button as={Link} to={'/'}>Ir a la tienda</Button></div>
							:
							cart_items.map((item) => (
								<ShoppingCartItem
									key={item.id}
									item={item}
									{...item}
								/>
							))
					}
				</div>
				<CartOrderDetails />
			</div>
		</section>
	)
}
