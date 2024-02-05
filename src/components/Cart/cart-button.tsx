import { Badge } from "@nextui-org/react";
import { IconShoppingBag } from "@tabler/icons-react";
import { Link } from "react-router-dom";

interface Props {
  products_quantity: number;
}

export const CartButton = ({ products_quantity }: Props) => {
  return (
    <Badge content={products_quantity} color="primary">
      <Link
        className="flex items-center justify-between gap-2"
        to={"/checkout/cart"}
        title="Carrito de compras"
      >
        <IconShoppingBag size={30} />
      </Link>
    </Badge>
  );
};
