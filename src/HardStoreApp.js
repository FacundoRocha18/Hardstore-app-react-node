import React, { useState, Suspense } from 'react';

/* React Router -------------------------------- */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

/* Custom Hooks -------------------------------- */
import useFetchProducts from './hooks/useFetchProducts';
import useCart from './hooks/useCart';
import useAuth from './hooks/useAuth';
import useAlert from './hooks/useAlert';


/* Components -------------------------------- */
import Header from './components/FixedComponents/PageHeader';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCartComponents/ShoppingCart';
import SingleProduct from './components/Products/SingleProduct';
import LoginScreen from './components/UsersComponents/LoginScreen';
import RegisterScreen from './components/UsersComponents/RegisterScreen';
import NoMatchPage from './components/NoMatchPage';
import Footer from './components/FixedComponents/PageFooter';


function App() {

  const { data: products, loading } = useFetchProducts();

  const { token, username, isAuth, onLogin, onLogout } = useAuth();

  const { cartItems, onAdd, onDelete, onRemove, onBuy } = useCart()

  const { isShowing, setIsShowing, onClose } = useAlert()

  const [redirect, setRedirect] = useState(false);

  console.log(isShowing)

  return (

    <div className="App">

      <Router>

        <Header
          token={token}
          username={username}
          onLogout={onLogout}
        />

        <Routes>

          <Route exact path='/'
            element={
              <HomePage
                products={products}
                loading={loading}
                onAdd={onAdd}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                onClose={onClose}
              />
            }
          />

          <Route exact path='api/products/shoppingCart'
            element={
              (isAuth(token))
                ?
                <ShoppingCart
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onDelete={onDelete}
                  onBuy={onBuy}
                  isShowing={isShowing}
                  setIsShowing={setIsShowing}
                  onClose={onClose}
                />
                :
                <Navigate
                  to={{
                    pathname: '/api/auth/login'
                  }}
                />

            }
          />

          <Route exact path='api/products/singleProduct/:id'
            element={
              <SingleProduct
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />

          <Route exact path='/api/auth/login'
            element={
              (!isAuth(token))
                ?
                <LoginScreen
                  onLogin={onLogin}
                />
                :
                <Navigate
                  to={{
                    pathname: '/'
                  }}
                />
            }
          />

          <Route
            path='/api/auth/register'
            element={
              (!redirect)
                ?
                <RegisterScreen
                  setRedirect={setRedirect}
                />
                :
                <Navigate
                  to={{
                    pathname: '/api/auth/login'
                  }}
                />
            }
          />

          <Route path="*"
            element={
              <NoMatchPage />
            }
          />

        </Routes>

        <Footer
          onLogout={onLogout}
          username={username}
          token={token}
        />

      </Router>
    </div >
  );
}

export default App;
