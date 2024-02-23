import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
	Radio,
	RadioGroup,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";
import { type IProduct } from '../../common/interfaces';

export const CartOrderDetails = () => {
  const navigate_to = useNavigate();
  const { total, subtotal, is_cart_empty, cart_products, on_buy } =
    useCartContext();

  const handle_buy = (price: number, cart_products: IProduct[]) => {
    const items_list = [];

    on_buy(price);
    cart_products.map((product) => items_list.push(product.name));
    navigate_to("/checkout/payment", { replace: true });
  };

  return (
    <Card className="flex items-center justify-between p-3 rounded w-full col-span-1 row-span-1 row-start-2 cart-details max-h-[450px]">
      <CardHeader>
        <h4>Resumen del pedido</h4>
      </CardHeader>
      <CardBody className='gap-2'>
        <p>
          Producto/s: USD{" "}
          <span id="cart-total-shipping-price">{subtotal.toFixed(2)}</span>
        </p>
        <RadioGroup label="Envío" defaultValue="retiro-en-local">
					<Radio value="retiro-en-local">Retira en el local</Radio>
					<Radio value="envio-montevideo">Montevideo - US$5</Radio>
					<Radio value="envio-canelones">Canelones - US$5</Radio>
					<Radio value="despacho-al-interior">Despacho para el interior</Radio>
				</RadioGroup>
        <p>
          <span>Subtotal: </span> USD{" "}
          <span id="cart-total-price">{total.toFixed(2)}</span>
        </p>
      </CardBody>
      <CardFooter>
        <Button
          className="w-full cursor-pointer"
          color={is_cart_empty ? "default" : "primary"}
          type="button"
          onClick={() => {
            handle_buy(subtotal, cart_products);
          }}
          disabled={is_cart_empty}
        >
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
};
