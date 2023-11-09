import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { Root } from './routes/root'
import { Home } from './routes/home';
import { ShoppingCart } from './components/Cart/shopping-cart'
import NoMatch from './routes/no-match';
import Checkout from './components/Cart/checkout';
import Product from './components/Products/product';
import CategorizedProducts from './components/Products/categorized-products';
import { Loading } from './components/Common/loading';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/products/shoppingCart',
				element: <ShoppingCart />
			},
			{
				path: '/users/payment',
				element: <Checkout />
			},
			{
				path: '/products/product/:id',
				element: <Product />
			},
			{
				path: '/products/categories/:cat_id',
				element: <CategorizedProducts />
			},
			{
				path: '*',
				element: <NoMatch />
			}
		]
	}
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<NextUIProvider>
			<RouterProvider router={router} />
		</NextUIProvider>
	</React.StrictMode>
)
