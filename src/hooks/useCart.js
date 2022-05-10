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
            console.log(isShowing)
            alert('Se aumentó correctamente la cantidad')

        } else {

            setCartItems([...cartItems, { ...product, qty: 1 }])
            setIsShowing(true);
            alert('Se agregó correctamente el producto al carrito')

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
        onBuy: onBuy,
        isShowing: isShowing
    })
}

export default useCart;
