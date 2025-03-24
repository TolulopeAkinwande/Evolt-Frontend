import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import LandingPage from './components/landingPage';
import ProductPage from './product';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUpPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='landing' element={<LandingPage />} />
      <Route path='products' element={<ProductPage/>} />
    </Routes>
  );
}

export default App
