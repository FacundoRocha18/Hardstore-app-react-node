import { useCartContext } from '../../contexts/cart-context';
import { CartEmptyCard } from './cart-empty-card';
import { ShoppingCartLayout } from './shopping-cart-layout';

export const ShoppingCart = () => {
	const { cart_items, is_cart_empty } = useCartContext()

	return (
		<section className="flex flex-col gap-4 w-8/12 m-auto min-h-screen">
			<h2 className="text-center">Mi carrito ({cart_items.length} items)</h2>
			<div>
				{
					is_cart_empty
						?
						<CartEmptyCard />
						:
						<ShoppingCartLayout />
				}
			</div>
		</section>
	)
}
