import { useEffect, useRef, useState } from "react";
import { type IShoppingCartItem, type ICart, type ICartProduct } from "../common/interfaces";
import { get_cart_data as fetch_cart } from "../services/cart.service";

export const useCart = () => {
	const [cart_data, setCartData] = useState<ICart>();
	const [cart_items, setCartItems] = useState<IShoppingCartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("Sin errores");
	const [is_cart_empty, setIsCartEmpty] = useState(true);
	const [total, setTotal] = useState(0);
	const [shipping_cost, setShippingCost] = useState(0);
	const [subtotal, setSubtotal] = useState(0);

  const should_fetch = useRef(true);

	const get_cart_data = async (id: string) => {
		try {
			setLoading(true);
			const data = await fetch_cart(id);
			setCartData(data);
			setCartItems(data.products);
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		if (should_fetch.current) {
			get_cart_data('93f71e60-0170-4125-a1ba-f10a4f4720f7');
		}
	}, [])

	useEffect(() => {
		if (cart_items.length > 0) {
			setIsCartEmpty(false);
		}

		if (cart_items.length <= 0) {
			setIsCartEmpty(true);
		}

		on_select_shipping(total);
	}, [cart_items]);

	const on_add = (product_to_add: ICartProduct, quantity_to_add: number) => {
		const product_in_cart = cart_items.find((product) => product.id === product_to_add.id);

		if (product_in_cart == null) {
			setCartItems([...cart_items, { ...product_to_add, quantity: quantity_to_add }]);
			return;
		}

		setCartItems(add_quantity_if_product_exists(product_to_add, quantity_to_add));
		setSubtotal(add_total);
	};

	const on_remove = (product_to_remove: ICartProduct) => {
		const product_in_cart = cart_items.find((x) => x.id === product_to_remove.id);

		if (product_in_cart == null) {
			return;
		}

		if (product_in_cart?.quantity === 1) {
			setCartItems(cart_items.filter((cart_product) => cart_product.id !== product_to_remove.id))
			return;
		}

		const remove_quantity = cart_items.map((cart_product) => {
			if (cart_product.id !== product_to_remove.id) {
				return cart_product;
			}
			
			return { ...product_in_cart, quantity: product_in_cart?.quantity - 1 };
		})

		setCartItems(remove_quantity);
		setSubtotal(subtotal - product_to_remove.price);
	};

	const on_delete = (product: ICartProduct) => {
		const product_in_cart = cart_items.find((x) => x.id === product.id);
		
		if (product_in_cart == null) {
			return;
		}

		if (product_in_cart?.quantity >= 1) {
			setCartItems(cart_items.filter((cart_product) => cart_product.id !== product.id));
		}
	};

	const on_buy = (total) => {
		const productsDataList = [];

		cart_items.forEach((item) =>
			productsDataList.push([item.id, item.name].join(" , ")),
		);
	};

	const on_select_shipping = (shipping_cost: number) => {
		setShippingCost(shipping_cost);
	};

	const add_quantity_if_product_exists = (
		product_to_add: ICartProduct,
		quantity_to_add: number
	) => {
		const updated_products_list = cart_items.map((cart_product) => {
			const product_id_exists = cart_product.id === product_to_add.id;

			if (!product_id_exists) {
				return cart_product;
			}

			return {
				...cart_product,
				quantity: cart_product.quantity + quantity_to_add
			}
		})

		return updated_products_list;
	};

	const add_total = cart_items.reduce((previous_total, product) => {
		return previous_total + product.price * product.quantity
	}, 0)

	return [
		cart_data,
		cart_items,
		loading,
		error,
		total,
		shipping_cost,
		subtotal,
		is_cart_empty,
		on_add,
		on_remove,
		on_delete,
		on_buy,
		on_select_shipping
	] as const;
};
