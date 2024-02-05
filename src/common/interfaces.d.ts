/* eslint-disable @typescript-eslint/ban-types */

export interface Item {
  id: number;
  label: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
}

export interface IProduct {
  id: UUID;
  name: string;
  stock: number;
  price: number;
	image: string;
  created_by: string | null;
  created_at: string | null;
  updated_at: string | null;
  deleted_at: string | null;
}

export interface IProductsContext {
  products: IProduct[];
  loading: boolean;
}

export interface IChildrenProps {
  children: React.ReactNode;
}

export interface IShoppingCartItem {
  id: UUID;
  quantity: number;
  unit_price: number;
  subtotal: number;
  product: Product;
}

export interface ICart {
  id: UUID;
  shopping_cart_items: IShoppingCartItem[];
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}

export interface ICartItem extends IProduct {
  quantity: number;
}

export interface ICartContext {
  total: number;
  shipping_cost: number;
  subtotal: number;
  is_cart_empty: boolean;
  cart_items: IProduct[];
  on_add: (product: IProduct, QTY: number) => void;
  on_remove: (product: IProduct) => void;
  on_delete: (product: IProduct) => void;
  on_buy: (total: number) => void;
}

export type alert_type = "info" | "success" | "warning" | "error";

export interface IAlertsContext {
  is_visible: boolean;
  message: string;
  type: alert_type;
  show_alert: (message: string, type: alert_type, state: boolean) => void;
  close_alert: (e: Event) => void;
}

export interface ICategory {
  id: UUID;
  name: string;
  products: IProduct[];
}
