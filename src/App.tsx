import './App.css'
import { Route, Routes } from 'react-router-dom';
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import LandingPage from './components/landingPage';
import ProductPage from './product';
import ProductList from './components/productsList';
import { CartProvider } from './cartContext';
import CartPage from './components/cartPage';
import OrderHistory from './components/order-history';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
   <CartProvider>
     <Routes>
     <Route path='/' element={<LandingPage/>} />
     <Route path='sign-up' element={<SignUpPage />} />
     <Route path='login' element={<LoginPage />} />
      <Route path='/' element={<LandingPage/>} />
      <Route path='products' element={<ProductList/>} />
      <Route path="cart" element={<CartPage/>} />
      <Route path="order" element={<OrderHistory/>} />
      <Route path='/single-product/:id' element={<ProductPage/>} />
    </Routes>
   </CartProvider>
  );
}

export default App
