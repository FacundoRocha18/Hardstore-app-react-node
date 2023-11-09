import { type IChildrenProps, type IProductsContext } from '../common/interfaces'
import { createContextCustom } from '../hooks/useContextCustom'
import { useProducts } from '../hooks/useProducts'

export const [useProductsContext, ContextProvider] = createContextCustom<IProductsContext>()

export const Products_Provider = ({ children }: IChildrenProps) => {
  const [products, loading] = useProducts()

  const providerValue: IProductsContext = {
    products,
    loading
  }

  return <ContextProvider value={providerValue}>{children}</ContextProvider>
}
