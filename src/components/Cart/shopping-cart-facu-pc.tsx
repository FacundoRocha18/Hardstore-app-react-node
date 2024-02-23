import { useCartContext } from "../../contexts/cart-context";
import { CartEmptyCard } from "./cart-empty-card";
import { CartLayout } from "./cart-layout";

export const ShoppingCart = () => {
  const { is_cart_empty } = useCartContext();

  return (
    <section className="flex flex-col gap-4 p-4 lg:p-0 w-full m-auto min-h-screen" id='cart-container'>
      <h2 className='text-center my-4'>Mi carrito</h2>
      <div>{is_cart_empty ? <CartEmptyCard /> : <CartLayout />}</div>
    </section>
  );
};
