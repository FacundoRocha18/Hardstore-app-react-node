import { lazy } from 'react';

const routes = [
  {
    path: 'api/products/shoppingCart',
    component: lazy(() => import('./components/ShoppingCartComponents/ShoppingCart')),
    exact: true
  }
];

export default routes;