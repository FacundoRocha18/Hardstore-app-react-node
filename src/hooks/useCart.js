import { useState } from 'react'

/* Custom hooks */

import useAlert from './useAlert'


const useCart = () => {

    const [cartItems, setCartItems] = useState([]);

    const { isShowing, setIsShowing } = useAlert()


    const onAdd = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);

        if (exist !== undefined) {

            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))
            setIsShowing(true);

        } else {

            setCartItems([...cartItems, { ...product, qty: 1 }])
            setIsShowing(true);

        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);

        try {

            (exist.qty === 1)
                ?
                (setCartItems(cartItems.filter((x) => x.id !== product.id)))
                :
                setCartItems(cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                ))


        } catch (e) {

        }
    }

    const onDelete = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);

        try {

            if (exist.qty >= 1) setCartItems(cartItems.filter((x) => x.id !== product.id))


        } catch (e) {

        }
    }

    const onBuy = (total) => {

        let productsDataList = [];

        cartItems.forEach(item => productsDataList.push([item.id, item.name].join(' , ')));

    }
    return ({
        cartItems: cartItems,
        onAdd: onAdd,
        onRemove: onRemove,
        onDelete: onDelete,
        onBuy: onBuy,
        isShowing: isShowing
    })
}

export default useCart;
