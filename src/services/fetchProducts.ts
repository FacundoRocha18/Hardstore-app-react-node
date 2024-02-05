import { GET_PRODUCTS_DEV_URL } from "../common/constants";
import { type IProduct } from "../common/interfaces";
import { data } from "../data/products.json";

export const fetch_products = async () => {
  /* const response = await fetch(GET_PRODUCTS_DEV_URL);
	const { data } = await response.json();
*/
  const products = data.map((product: IProduct) => {
    return {
      id: product.id,
      name: product.name,
      stock: product.stock,
      price: product.price,
			image: product.image,
      created_by: product.created_by,
      created_at: product.created_at,
      updated_at: product.updated_at,
      deleted_at: product.deleted_at,
    };
  });

  return products;
};
