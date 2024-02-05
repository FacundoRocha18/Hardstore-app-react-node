import { type ReactNode } from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Dropdown as NextUIDropdown,
} from "@nextui-org/react";
import { type ICategory } from "../../common/interfaces";

interface Props {
  children: ReactNode;
  items: ICategory[];
}

export const Dropdown = ({ children, items }: Props) => {
  return (
    <NextUIDropdown closeOnSelect={false} type="listbox">
      <DropdownTrigger>{children}</DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={items}>
        {items.map((item) => (
          <DropdownItem key={item.id}>{item.name}</DropdownItem>
        ))}
      </DropdownMenu>
    </NextUIDropdown>
  );
};
