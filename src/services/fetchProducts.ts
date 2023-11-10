import { GET_PRODUCTS_DEV_URL } from '../common/constants';
import { type IProduct } from '../common/interfaces';

export const fetch_products = async () => {
    const response = await fetch(GET_PRODUCTS_DEV_URL);
    const { data } = await response.json();

    const product = data.map((product: IProduct) => {
        return {
            id: product.id,
            name: product.name,
            price: product.price,
            stock: product.stock
        }
    })

    return product;
}
