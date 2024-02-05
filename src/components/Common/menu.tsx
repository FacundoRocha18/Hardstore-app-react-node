import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";
import { type Item } from "../../common/interfaces";

export const Menu = ({ items }: { items: Item[] }) => {
  return (
    <NavbarMenu>
      {items.map((item, index) => (
        <NavbarMenuItem key={index}>
          <Link
            color={
              index === 2
                ? "primary"
                : index === items.length - 1
                  ? "danger"
                  : "foreground"
            }
            className="w-full"
            href="#"
            size="lg"
          >
            {item.label}
          </Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};
