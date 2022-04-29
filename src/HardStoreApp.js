import React, { useState } from 'react';
import useFetchProducts from './hooks/useFetchProducts'
import Header from './components/FixedComponents/PageHeader'
import HomePage from './components/HomePage'
import ShoppingCart from './components/ShoppingCartComponents/ShoppingCart'
import SingleProduct from './components/Products/SingleProduct'
import LoginScreen from './components/LoginComponents/LoginScreen';
import Footer from './components/FixedComponents/PageFooter'
import useCart from './hooks/useCart'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import useAuth from './hooks/useAuth';


function App() {

  const { data: products, loading } = useFetchProducts();

  const [result, setResult] = useState({
    success: false,
    info: '',
    alertClass: 'alert-inactive'
  });

  const modalContainer = document.querySelector('.modal-container');

  const { cartItems, onAdd, onDelete, onRemove, onBuy } = useCart(result, setResult, modalContainer)

  const { token, onLogin, onLogout } = useAuth();

  const [modalData, setModalData] = useState({
    success: null,
    info: [],
    total: 0
  });


  if (!token) {
    return <LoginScreen
      onLogin={onLogin}
    />
  }



  return (
    <div className="App">
      <Router>
      <Header
            onLogout={onLogout}
            token={token}
          />
          <Routes>

            <Route exact path='/' element={
              <HomePage
                products={products}
                loading={loading}
                onAdd={onAdd}
                result={result}
              />
            } />

            <Route exact path='api/products/shoppingCart' element={
              <ShoppingCart
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                onDelete={onDelete}
                onBuy={onBuy}
                result={result}
                modalData={modalData}
              />
            } />

            <Route exact path='api/products/singleProduct/:id' element={
              <SingleProduct
                onAdd={onAdd}
                onRemove={onRemove}
              />
            } />

            <Route exact path='/api/auth/login' element={
              <LoginScreen />
            } />

            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
          <Footer />
      </Router>
    </div >
  );
}

export default App;
