import { GET_CART_DATA_DEV_URL } from "../common/constants";
import { type ICart } from '../common/interfaces';

export const get_cart_data = async (id: string) => {
  const response = await fetch(GET_CART_DATA_DEV_URL + "?id=" + id);
	const data = await response.json();

	const cart: ICart = {
		id: data.id,
		products: data.shopping_cart_items,
		created_at: data.created_at,
		updated_at: data.updated_at,
		deleted_at: data.deleted_at
	}

  return cart;
};
