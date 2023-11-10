import { Outlet } from 'react-router-dom'
import { Header } from '../components/Common/header'
import { Footer } from '../components/Common/footer'
import { Products_Provider } from '../contexts/products-context'
import { Cart_Provider } from '../contexts/cart-context'
import { Alerts_Provider } from '../contexts/alerts-context'

export const Root = () => {
	return (
		<>
			<Cart_Provider>
				<Products_Provider>
					<Alerts_Provider>
						<Header />
						<Outlet />
						<Footer />
					</Alerts_Provider>
				</Products_Provider>
			</Cart_Provider>
		</>
	)
}
