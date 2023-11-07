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

export const LOGIN_URL_DEV = 'http://localhost:8000/api/auth/login';
export const LOGIN_URL_PROD = 'https://api.hardstore.store/api/auth/login';
