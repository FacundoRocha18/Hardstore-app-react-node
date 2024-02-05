import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";

export const CartOrderDetails = () => {
  const navigate_to = useNavigate();
  const { total, shipping_cost, subtotal, is_cart_empty, cart_items, on_buy } =
    useCartContext();

  const handle_buy = (price: number, cart_items) => {
    const items_list = [];

    on_buy(price);
    cart_items.map((item) => items_list.push(item.name));
    navigate_to("/checkout/payment", { replace: true });
  };

  return (
    <Card className="flex items-center justify-between p-3 rounded w-full col-span-1 row-span-1 row-start-2">
      <CardHeader>
        <h4>Resumen del pedido</h4>
      </CardHeader>
      <CardBody>
        <p>
          Producto/s: USD{" "}
          <span id="cart-total-shipping-price">{total.toFixed(2)}</span>
        </p>
        <p>
          Envío: USD{" "}
          <span id="cart-total-shipping-price">{shipping_cost.toFixed(2)}</span>
        </p>
        <p>
          <span>Subtotal: </span> USD{" "}
          <span id="cart-total-price">{subtotal.toFixed(2)}</span>
        </p>
      </CardBody>
      <CardFooter>
        <Button
          className="w-full cursor-pointer"
          color={is_cart_empty ? "default" : "primary"}
          type="button"
          onClick={() => {
            handle_buy(subtotal, cart_items);
          }}
          disabled={is_cart_empty}
        >
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};
