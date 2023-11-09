import { useState, useEffect, useRef } from 'react';
import { fetch_products } from '../services/fetchProducts';

export const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('Sin errores');
	const should_fetch = useRef(true);

	const get_products = async () => {
		try {
			setLoading(true);
			const data = await fetch_products();
			setProducts(data);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (should_fetch.current) {
			get_products()
		}
	}, []);

	console.log(products)

	return [products, loading, error] as const
}
