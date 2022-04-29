import { useState } from 'react'

const useCart = ({ result, setResult, modalContainer }) => {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {

        const exist = cartItems.find((x) => x.id === product.id);

        if (exist !== undefined) {

            setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))

            setResult({
                ...result,
                success: true,
                info: 'El producto se añadió al carrito',
                alertClass: 'success-alert'
            })
        } else {

            setCartItems([...cartItems, { ...product, qty: 1 }])

            setResult({
                ...result,
                success: true,
                info: 'El producto se añadió al carrito',
                alertClass: 'success-alert'
            })

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

            setResult({
                ...result,
                success: true,
                info: 'El producto se eleminó del carrito',
                alertClass: 'success-alert'
            })

        } catch (e) {

            setResult({
                ...result,
                success: false,
                info: 'ocurrió un error al eliminar el producto',
                alertClass: 'success-alert'
            })
        }
    }

    const onDelete = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);

        try {

            if (exist.qty >= 1) setCartItems(cartItems.filter((x) => x.id !== product.id))

            setResult({
                ...result,
                success: true,
                info: 'El producto se eliminó del carrito',
                alertClass: 'success-alert'
            })

        } catch (e) {

            setResult({
                error: true,
                errorInfo: e,
                success: false,
                successInfo: '',
                alertClass: 'error-alert'
            })
        }
    }

    const onBuy = (total) => {

        let productsDataList = [];

        cartItems.forEach(item => productsDataList.push([item.id, item.name].join(' , ')));


        modalContainer.classList.remove('modal-inactive')
        modalContainer.classList.remove('animate__fadeOut');
        modalContainer.classList.add('animate__fadeIn');

        setTimeout(() => {
            modalContainer.classList.remove('animate__fadeIn');
            modalContainer.classList.add('animate__fadeOut');
            modalContainer.classList.add('modal-inactive')
        }, 3000)

        /* return setModalData({
            success: true,
            info: productsDataList.join(' , '),
            total: total
        }); */
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
