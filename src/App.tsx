import './App.css'
import { Route, Routes } from 'react-router'
import LoginPage from './components/login';
import SignUpPage from './components/signup';
import LandingPage from './components/landingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='login' element={<LoginPage/>}/>
      <Route path='landing' element={<LandingPage/>}/>

    </Routes>
  );
}

export default App
