import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root";
import { Home } from "./routes/home";
import { ShoppingCart } from "./components/Cart/shopping-cart";
import NoMatch from "./routes/no-match";
import Checkout from "./routes/checkout";
import Product from "./components/Products/product";
import CategorizedProducts from "./components/Products/categorized-products";
import "./styles/index.css";
import "./styles/app-layout.css";
import "./styles/cart-layout.css";
import "./styles/cart-item-layout.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/checkout/cart",
        element: <ShoppingCart />,
      },
      {
        path: "/checkout/payment",
        element: <Checkout />,
      },
      {
        path: "/products/product/:id",
        element: <Product />,
      },
      {
        path: "/products/categories/:cat_id",
        element: <CategorizedProducts />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
);
