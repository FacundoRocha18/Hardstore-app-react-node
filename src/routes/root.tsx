import { Products_Provider } from "../contexts/products-context";
import { CartProvider } from "../contexts/cart-context";
import { Alerts_Provider } from "../contexts/alerts-context";
import { AppLayout } from "../components/Common/app-layout";

export const Root = () => {
  return (
    <>
      <CartProvider>
        <Products_Provider>
          <Alerts_Provider>
            <AppLayout />
          </Alerts_Provider>
        </Products_Provider>
      </CartProvider>
    </>
  );
};
