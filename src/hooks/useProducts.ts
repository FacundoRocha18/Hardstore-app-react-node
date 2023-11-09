import { useState, useEffect, useRef } from 'react';
import { fetchProducts } from '../services/fetchProducts';

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('Sin errores');
	const should_call = useRef(true);

	const getProducts = async () => {
		try {
			setLoading(true);
			const data = await fetchProducts();
			setProducts(data);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (should_call.current) {
			getProducts()
		}
	}, []);

	console.log(products)

	return [products, loading, error] as const
}
