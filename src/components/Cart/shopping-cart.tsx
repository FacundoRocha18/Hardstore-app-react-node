import { useCartContext } from "../../contexts/cart-context";
import { CartEmptyCard } from "./cart-empty-card";
import { CartLayout } from "./cart-layout";

export const ShoppingCart = () => {
  const { cart_items, is_cart_empty } = useCartContext();

  return (
    <section className="flex flex-col gap-4 p-4 m-auto min-h-screen" id='cart-container'>
      <h2 className='text-center'>Mi carrito ({cart_items.length} item/s)</h2>
      <div>{is_cart_empty ? <CartEmptyCard /> : <CartLayout />}</div>
    </section>
  );
};
