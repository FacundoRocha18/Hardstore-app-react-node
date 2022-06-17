import { useState } from 'react'

/* Custom hooks */


const useCart = () => {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product, QTY) => {

        const exist = cartItems.find((x) => x.id === product.id);

        if (exist !== undefined) {

            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + QTY } : x))

        } else {

            setCartItems([...cartItems, { ...product, qty: QTY }])

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
    })
}

export default useCart;
