import { Products_Provider } from '../contexts/products-context'
import { CartProvider } from '../contexts/cart-context'
import { Alerts_Provider } from '../contexts/alerts-context'
import { Layout } from '../components/Common/layout'

export const Root = () => {
	return (
		<>
			<CartProvider>
				<Products_Provider>
					<Alerts_Provider>
						<Layout />
					</Alerts_Provider>
				</Products_Provider>
			</CartProvider>
		</>
	)
}
