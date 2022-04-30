import { useState } from 'react'

const useCart = () => {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);

        if (exist !== undefined) {

            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))

        } else {

            setCartItems([...cartItems, { ...product, qty: 1 }])

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


       /*  modalContainer.classList.remove('modal-inactive')
        modalContainer.classList.remove('animate__fadeOut');
        modalContainer.classList.add('animate__fadeIn');

        setTimeout(() => {
            modalContainer.classList.remove('animate__fadeIn');
            modalContainer.classList.add('animate__fadeOut');
            modalContainer.classList.add('modal-inactive')
        }, 3000) */

    }
    return ({
        cartItems: cartItems,
        onAdd: onAdd,
        onRemove: onRemove,
        onDelete: onDelete,
        onBuy: onBuy
    })
}

export default useCart;
