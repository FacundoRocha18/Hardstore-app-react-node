import { GET_CATEGORIES_DEV_URL } from '../common/constants';
import { type ICategory } from '../common/interfaces';
import { data } from '../data/categories.json'

export const fetch_categories = async () => {
	/* const response = await fetch(GET_CATEGORIES_DEV_URL);
	const { data } = await response.json(); */

	const categories = data.map((category: ICategory) => {
		return {
			id: category.id,
			name: category.name,
			products: category.products
		}
	})

	return categories;
}
