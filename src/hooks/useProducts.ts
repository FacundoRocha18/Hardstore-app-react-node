import { useState, useEffect } from 'react';
import getProducts from '../API/getProducts';

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getProducts()
			.then(products => {
				if (!products) {
					return loading;
				};
				setLoading(false);
				setProducts(products)
			})
	}, []);

	console.log(products)

	return [products, loading] as const
}
