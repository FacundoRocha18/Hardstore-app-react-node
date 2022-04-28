import React, { useState } from 'react';
import useFetchProducts from './hooks/useFetchProducts'
import Header from './components/FixedComponents/PageHeader'
import HomePage from './components/HomePage'
import ShoppingCart from './components/ShoppingCartComponents/ShoppingCart'
import SingleProduct from './components/Products/SingleProduct'
import LoginScreen from './components/LoginComponents/LoginScreen';
import Footer from './components/FixedComponents/PageFooter'
import { useHistory } from 'react-router'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import useToken from './hooks/useToken';

function App() {

  const { token, isLoading, setToken } = useToken()

  const [cartItems, setCartItems] = useState([]);

  const { data: products, loading } = useFetchProducts();

  const [result, setResult] = useState({
    success: false,
    info: '',
    alertClass: 'alert-inactive'
  });

  const [modalData, setModalData] = useState({
    success: null,
    info: [],
    total: 0
  });


  if (!token) {
    return <LoginScreen setToken={setToken} isLoading={isLoading} />
  }

  const logout = () => {
    sessionStorage.clear();
    window.location.reload(false);
  };

  const modalContainer = document.querySelector('.modal-container');

  const onAdd = (product) => {

    const exist = cartItems.find((x) => x.id === product.id);

    if (exist !== undefined) {

      setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x))

      setResult({
        ...result,
        success: true,
        info: 'El producto se añadió al carrito',
        alertClass: 'success-alert'
      })
    } else {

      setCartItems([...cartItems, { ...product, qty: 1 }])

      setResult({
        ...result,
        success: true,
        info: 'El producto se añadió al carrito',
        alertClass: 'success-alert'
      })

    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    try {

      (exist.qty === 1)
        ?
        (setCartItems(cartItems.filter((x) => x.id !== product.id)))
        :
        setCartItems(cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        ))

      setResult({
        ...result,
        success: true,
        info: 'El producto se eleminó del carrito',
        alertClass: 'success-alert'
      })

    } catch (e) {

      setResult({
        ...result,
        success: false,
        info: 'ocurrió un error al eliminar el producto',
        alertClass: 'success-alert'
      })
    }
  }

  const onDelete = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    try {

      if (exist.qty >= 1) setCartItems(cartItems.filter((x) => x.id !== product.id))

      setResult({
        ...result,
        success: true,
        info: 'El producto se eliminó del carrito',
        alertClass: 'success-alert'
      })

    } catch (e) {

      setResult({
        error: true,
        errorInfo: e,
        success: false,
        successInfo: '',
        alertClass: 'error-alert'
      })
    }
  }

  const onBuy = (total) => {

    let productsDataList = [];

    cartItems.forEach(item => productsDataList.push([item.id, item.name].join(' , ')));


    modalContainer.classList.remove('modal-inactive')
    modalContainer.classList.remove('animate__fadeOut');
    modalContainer.classList.add('animate__fadeIn');

    setTimeout(() => {
      modalContainer.classList.remove('animate__fadeIn');
      modalContainer.classList.add('animate__fadeOut');
      modalContainer.classList.add('modal-inactive')
    }, 3000)

    return setModalData({
      success: true,
      info: productsDataList.join(' , '),
      total: total
    });
  }

  return (
    <div className="App">
      <Router>
        <Header logout={logout} />
        <Routes>

          <Route exact path='/' element={
            <HomePage
              products={products}
              loading={loading}
              onAdd={onAdd}
              result={result}
            />
          } />

          <Route exact path='/shoppingCart' element={
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

          <Route exact path='/singleProduct/:id' element={
            <SingleProduct
              onAdd={onAdd}
              onRemove={onRemove}
            />
          } />

          <Route exact path='/api/auth/' element={
            <LoginScreen />
          } />
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
