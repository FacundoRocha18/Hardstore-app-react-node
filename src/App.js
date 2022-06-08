import React, { useState } from 'react';

/* React Router -------------------------------- */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

/* Custom Hooks -------------------------------- */
import useFetchProducts from './hooks/useFetchProducts';
import useFetchCats from './hooks/useFetchCats';
import useCart from './hooks/useCart';
import useAuth from './hooks/useAuth';
import useAlert from './hooks/useAlert';


/* Components -------------------------------- */
import Header from './components/SiteHeader';
import Home from './components/HomeScreen';
import Cart from './components/Cart/ShoppingCart';
import Product from './components/Products/ProductScreen';
import Login from './components/Users/LoginScreen';
import Register from './components/Users/RegisterScreen';
import NoMatch from './components/NoMatchScreen';
import ProductsWithCats from './components/Products/ProductsWithCats';
import Profile from './components/Users/ProfileScreen';
import Payment from './components/Cart/PaymentScreen';
import Footer from './components/SiteFooter';


function App() {

  const [redirect, setRedirect] = useState(false);

  const { data: products, loading } = useFetchProducts();

  const { data: categories } = useFetchCats()

  const { token, username, isAuth, onLogin, onLogout, status, loginMessage } = useAuth();

  const { cartItems, onAdd, onDelete, onRemove, onBuy } = useCart()

  const { isShowing, setIsShowing, message, setMessage, type, setType, showAlert, onClose } = useAlert()


  return (

    <div className="App">

      <Router>

        <Header
          token={token}
          username={username}
          onLogout={onLogout}
          categories={categories}
        />

        <Routes>

          <Route exact path='/'
            element={
              <Home
                products={products}
                loading={loading}
                onAdd={onAdd}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                message={message}
                setMessage={setMessage}
                type={type}
                setType={setType}
                onClose={onClose}
                categories={categories}
              />
            }
          />

          <Route exact path='api/products/shoppingCart'
            element={
              (isAuth(token))
                ?
                <Cart
                  cartItems={cartItems}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  onDelete={onDelete}
                  onBuy={onBuy}
                  isShowing={isShowing}
                  setIsShowing={setIsShowing}
                  message={message}
                  setMessage={setMessage}
                  type={type}
                  setType={setType}
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

          <Route exact path='api/users/payment'
            element={
              (isAuth(token))
                ?
                <Payment />
                :
                <Navigate
                  to={{
                    pathname: '/api/auth/login'
                  }}
                />

            }
          />

          <Route exact path='api/products/product/:id'
            element={
              <Product
                onAdd={onAdd}
                onRemove={onRemove}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                message={message}
                setMessage={setMessage}
                type={type}
                setType={setType}
                onClose={onClose}
              />
            }
          />

          <Route exact path='api/products/categories/:id'
            element={
              <ProductsWithCats
                products={products}
                loading={loading}
                onAdd={onAdd}
                type={type}
                setType={setType}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                message={message}
                setMessage={setMessage}
                onClose={onClose}
                categories={categories}
              />
            }
          />

          <Route exact path='api/users/profile'
            element={
              (isAuth(token))
                ?
                <Profile />
                :
                <Navigate
                  to={{
                    pathname: '/api/auth/login'
                  }}
                />

            }
          />

          <Route exact path='/api/auth/login'
            element={
              (!isAuth(token))
                ?
                <Login
                  onLogin={onLogin}
                  status={status}
                  loginMessage={loginMessage}
                  isShowing={isShowing}
                  message={message}
                  type={type}
                  showAlert={showAlert}
                  onClose={onClose}
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
                <Register
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
              <NoMatch />
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
