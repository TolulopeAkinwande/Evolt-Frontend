import './App.css'
import { Route, Routes } from 'react-router'
import SignUp from './components/Signup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignUp/>}/>
    </Routes>
  );
}

export default App
