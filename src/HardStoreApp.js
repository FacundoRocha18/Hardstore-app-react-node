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
import Header from './components/FixedComponents/PageHeader';
import HomePage from './components/HomePage';
import ShoppingCart from './components/ShoppingCartComponents/ShoppingCart';
import SingleProduct from './components/Products/SingleProduct';
import LoginScreen from './components/UsersComponents/LoginScreen';
import RegisterScreen from './components/UsersComponents/RegisterScreen';
import NoMatchPage from './components/NoMatchPage';
import ProductsWithCats from './components/Products/ProductsWithCats';
import Footer from './components/FixedComponents/PageFooter';
import { Profile } from './components/UsersComponents/Profile';


function App() {

  const [redirect, setRedirect] = useState(false);

  const { data: products, loading } = useFetchProducts();

  const { data: categories } = useFetchCats()

  const { token, username, isAuth, onLogin, onLogout } = useAuth();

  const { cartItems, onAdd, onDelete, onRemove, onBuy } = useCart()

  const { isShowing, setIsShowing, message, setMessage, type, setType, onClose } = useAlert()


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
              <HomePage
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
                <ShoppingCart
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

          <Route exact path='api/products/product/:id'
            element={
              <SingleProduct
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
                <LoginScreen
                  onLogin={onLogin}
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
