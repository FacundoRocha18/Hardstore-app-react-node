/* React Router -------------------------------- */
import {
	Link,
	useNavigate
} from 'react-router-dom';

/* Components -------------------------------- */
import ShoppingCartItem from './shopping-cart-item'

/* Custom Hooks -------------------------------- */

import { useCartContext } from '../../contexts/cart-context';
import { useAlertsContext } from '../../contexts/alerts-context';

export const ShoppingCart = () => {
	const navigate = useNavigate();
	const { cart_items, on_buy } = useCartContext()
	const { show_alert } = useAlertsContext()

	const itemPrice = cart_items.reduce((a, c) => a + c.price * c.qty, 0);
	const shippingPrice = itemPrice > 2000 ? 0 : 50;
	const totalPrice = itemPrice + shippingPrice;

	const handleBuy = (price: number, cart_items) => {
		on_buy(price);
		const itemList = [];
		cart_items.map((item) => itemList.push(item.name));

		show_alert('Se lo rediccionará a la página para ingresar información de pago y envío', 'info', true);

		setTimeout(() => { navigate('/api/users/payment', { replace: true }); }, 1000);
	}

	return (
		<>
			<section className="main-content-wrapper">
				<div>
					<h2 className="title-center">Carrito</h2>
					<div>
						<div className="column">
							<div>
								<h4>Producto:</h4>
							</div>

						</div>
						<div className="column">
							<div>
								<h4>Precio:</h4>
							</div>

						</div>
						<div className="column">
							<div>
								<h4>Cantidad:</h4>
							</div>

						</div>
					</div>
					<div>
						{
							cart_items.length === 0 && <div><h5>El carrito está vacío</h5><span><Link to={'/'}>Ir a la tienda</Link></span></div>
						}

						{
							cart_items.map((item) => (
								<ShoppingCartItem
									key={item.id}
									item={item}
									{...item}
								/>
							))
						}
					</div>

					<div>
						{
							cart_items.length === 0 &&
							<div>
							</div>
						}
						{
							cart_items.length > 0 &&
							<div className='animate__animated animate__bounceInDown animate__fast'>
								<div>
									<p>Envío: USD <span id="cart-total-shipping-price"> {shippingPrice.toFixed(2)}</span></p>
									<p><span>Total:</span> USD <span id="cart-total-price"> {totalPrice.toFixed(2)}</span></p>
								</div>
								<div>
									<button className="btn btn-success comprarButton " type="button"
										onClick={() => { handleBuy(totalPrice, cart_items); }} >
										<p>Comprar</p>
									</button>
								</div>
							</div>
						}
					</div>
				</div>
			</section>

		</>
	)
}
