import { useState } from 'react'

/* React Router -------------------------------- */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'

/* Custom Hooks -------------------------------- */
import useFetchProducts from './hooks/useFetchProducts'
import useFetchCats from './hooks/useFetchCats'
import useCart from './hooks/useCart'
import useAuth from './hooks/useAuth'
import useAlert from './hooks/useAlert'

/* Components -------------------------------- */
import Header from './components/Navbars/Header.tsx'
import Alert from './components/Alerts/Alert'
import Home from './components/HomeScreen'
import Cart from './components/Cart/shopping-cart'
import Product from './components/Products/ProductScreen'
import Login from './components/Auth/LoginScreen'
import Register from './components/Auth/RegisterScreen'
import NoMatch from './components/NoMatchScreen'
import CategorizedProducts from './components/Products/CategorizedProducts'
import Profile from './components/Auth/ProfileScreen'
import Payment from './components/Cart/payment-page'
import Footer from './components/Navbars/Footer'

const App = () => {
  const [redirect, setRedirect] = useState(false)

  const { products, loading } = useFetchProducts()

  const { data: categories } = useFetchCats()

  const { token, username, isAuth, onLogin, onLogout } = useAuth()

  const { setCartItems, cartItems, onAdd, onDelete, onRemove, onBuy } = useCart()

  const { isShowing, message, type, showAlert, onClose } = useAlert()

  return (
		<div className="App">

			<Router>

				<Header
					token={token}
					username={username}
					onLogout={onLogout}
					categories={categories}
				/>

				{
					isShowing && <Alert type={type} message={message} isShowing={isShowing} onClose={onClose} />
				}

				<Routes>

					<Route exact path='/'
						element={
							<Home
								products={products}
								loading={loading}
								onAdd={onAdd}
								showAlert={showAlert}
								categories={categories}
							/>
						}
					/>

					<Route exact path='/products/shoppingCart'
						element={
							(isAuth(token))
							  ? <Cart
									setCartItems={setCartItems}
									cartItems={cartItems}
									onAdd={onAdd}
									onRemove={onRemove}
									onDelete={onDelete}
									onBuy={onBuy}
									showAlert={showAlert}
								/>
							  : <Navigate
									to={{
									  pathname: '/auth/login'
									}}
								/>

						}
					/>

					<Route exact path='/users/payment'
						element={
							(isAuth(token))
							  ? <Payment />
							  : <Navigate
									to={{
									  pathname: '/auth/login'
									}}
								/>

						}
					/>

					<Route exact path='/products/product/:id'
						element={
							<Product
								products={products}
								loading={loading}
								onAdd={onAdd}
								onRemove={onRemove}
								showAlert={showAlert}
							/>
						}
					/>

					<Route exact path='/products/categories/:cat_id'
						element={
							<CategorizedProducts
								onAdd={onAdd}
								showAlert={showAlert}
								categories={categories}
							/>
						}
					/>

					<Route exact path='/users/profile'
						element={
							(isAuth(token))
							  ? <Profile />
							  : <Navigate
									to={{
									  pathname: '/auth/login'
									}}
								/>

						}
					/>

					<Route exact path='/auth/login'
						element={
							(!isAuth(token))
							  ? <Login
									onLogin={onLogin}
									showAlert={showAlert}
								/>
							  : <Navigate
									to={{
									  pathname: '/'
									}}
								/>
						}
					/>

					<Route
						path='/auth/register'
						element={
							(!redirect)
							  ? <Register
									setRedirect={setRedirect}
									showAlert={showAlert}
								/>
							  : <Navigate
									to={{
									  pathname: '/auth/login'
									}}
								/>
						}
					/>

					<Route path="*"
						element={
							<NoMatch />
						}
					/>

				</Routes>

				<Footer
				/>

			</Router>
		</div >
  )
}

export default App
