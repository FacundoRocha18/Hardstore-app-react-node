import { useState, useEffect } from 'react';
import getProducts from '../API/getProducts';

const useFetchProducts = () => {

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

    return {
        products,
        loading
    };

}

export default useFetchProducts;