import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import LandingPage from './components/landingPage';
import ProductPage from './product';
import ProductList from './components/productsList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='sign-up' element={<SignUpPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='single-product/:id' element={<ProductPage />} />
      <Route path='products' element={<ProductList />} />
    </Routes>
  );
}

export default App
