import './App.css'
import { Route, Routes } from 'react-router'
import SignUp from './components/signup';
import Login from './components/login';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='login' element={<Login/>}/>

    </Routes>
  );
}

export default App
