import { useState } from "react";
import { Link } from "react-router-dom";

/* Components */
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { IconChevronDown } from "@tabler/icons-react";
import { Dropdown } from "./dropdown";
import { Menu } from "./menu";

/* Common */
import { MOBILE_MAIN_MENU_ITEMS } from "../../common/constants";
import { CartButton } from "../Cart/cart-button";
import { useCartContext } from "../../contexts/cart-context";
import { useCategories } from "../../hooks/useCategories";
import { Logo } from "./logo";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart_items } = useCartContext();
  const [categories] = useCategories();

  return (
    <Navbar
      height="7rem"
      maxWidth="2xl"
      shouldHideOnScroll
      isBordered
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo text_color="black" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden items-center justify-between sm:flex gap-6"
        justify="end"
      >
        <NavbarItem>
          <Link className="text-base" to={"/"}>
            Inicio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Dropdown items={categories}>
            <div className="flex items-center justify-between gap-1 cursor-pointer">
              <p>Catálogo</p>
              <IconChevronDown size={16} />
            </div>
          </Dropdown>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="flex items-center justify-between gap-2"
            to={"/checkout/cart"}
            title="Carrito de compras"
          >
            Carrito
          </Link>
        </NavbarItem>
        <NavbarItem>
          <CartButton products_quantity={cart_items.length} />
        </NavbarItem>
      </NavbarContent>
      <Menu items={MOBILE_MAIN_MENU_ITEMS} />
    </Navbar>
  );
};
