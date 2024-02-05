import Grid from "../Common/grid";

export const CartItemsListHeader = () => {
  return (
    <div className="grid items-header col-span-2 text-center">
      <h4>Producto</h4>
      <h4>Precio</h4>
      <h4>Cantidad</h4>
      <h4>Subtotal</h4>
    </div>
  );
};
