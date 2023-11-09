import { type Item } from './interfaces';

export const CATEGORIES_ITEMS: Item[] = [
	{
		id: 1,
		label: 'Notebooks'
	},
	{
		id: 2,
		label: 'Perifericos'
	},
	{
		id: 3,
		label: 'Componentes'
	}
];

export const MOBILE_MAIN_MENU_ITEMS = [
	{
		id: 1,
		label: 'Preguntas frecuentes'
	}
];

export const GET_PRODUCTS_DEV_URL = 'http://localhost:3000/products/listAll'
export const GET_PRODUCTS_PROD_URL = 'https://api.hardstore.store/'
