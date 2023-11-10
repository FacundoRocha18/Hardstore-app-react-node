import { useState } from 'react'

/* Custom Hooks -------------------------------- */
import useProducts from './hooks/useProducts'
import useFetchCats from './hooks/useFetchCats'
import useCart from './hooks/useCart'
import useAlert from './hooks/useAlert'

/* Components -------------------------------- */
import Product from './components/Products/product'
import Login from './components/Auth/LoginScreen'
import Register from './components/Auth/RegisterScreen'
import NoMatch from './components/NoMatchScreen'
import CategorizedProducts from './components/Products/CategorizedProducts'
import Profile from './components/Auth/ProfileScreen'
import Payment from './components/Cart/payment-page'
import Footer from './components/Navbars/Footer'

export const App = () => {
	const [redirect, setRedirect] = useState(false)

	const { products, loading } = useProducts()

	const { data: categories } = useFetchCats()

	const { setCartItems, cartItems, onAdd, onDelete, onRemove, onBuy } = useCart()

	return (
		<div>


		</div >
	)
}
