import { useState } from 'react'

export const useCart = () => {
	const [cart_items, setCartItems] = useState([]);

	const on_add = (product, QTY) => {
		const exist = cart_items.find((x) => x.id === product.id);

		if (exist !== undefined) {
			setCartItems(cart_items.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + QTY } : x))
		} else {
			setCartItems([...cart_items, { ...product, qty: QTY }])
		}
	}

	const on_remove = (product) => {
		const exist = cart_items.find((x) => x.id === product.id);

		try {
			(exist.qty === 1)
				?
				(setCartItems(cart_items.filter((x) => x.id !== product.id)))
				:
				setCartItems(cart_items.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				))
		} catch (e) {

		}
	}

	const on_delete = (product) => {
		const exist = cart_items.find((x) => x.id === product.id);

		try {
			if (exist.qty >= 1) setCartItems(cart_items.filter((x) => x.id !== product.id))
		} catch (e) {

		}
	}

	const on_buy = (total) => {
		const productsDataList = [];

		cart_items.forEach(item => productsDataList.push([item.id, item.name].join(' , ')));
	}

	return [
		cart_items,
		on_add,
		on_remove,
		on_delete,
		on_buy
	] as const
}
