import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cart-context";

export const CartEmptyCard = () => {
  const { is_cart_empty } = useCartContext();

  return (
    <Card className="flex items-center justify-center p-3 rounded h-full">
      <CardBody>
        <h4 className="text-center">El carrito está vacío</h4>
      </CardBody>
      <CardFooter>
        <Button
          className="w-full"
          as={Link}
          color={is_cart_empty ? "primary" : "default"}
          to={"/"}
        >
          Ir a la tienda
        </Button>
      </CardFooter>
    </Card>
  );
};
