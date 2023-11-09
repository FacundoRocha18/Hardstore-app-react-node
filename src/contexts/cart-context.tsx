import { type IChildrenProps, type ICartContext } from '../common/interfaces'
import { useCart } from '../hooks/useCart'
import { createContextCustom } from '../hooks/useContextCustom'

export const [useCartContext, ContextProvider] = createContextCustom<ICartContext>()

export const Cart_Provider = ({ children }: IChildrenProps) => {
  const [cart_items, on_add, on_remove, on_delete, on_buy] = useCart()

  const providerValue: ICartContext = {
    cart_items,
    on_add,
		on_remove,
		on_delete,
		on_buy
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
