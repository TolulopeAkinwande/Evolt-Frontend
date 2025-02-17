import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "index.css"
import "tailwindcss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        {<Route path='/' element={<SignUp/>}/>}
      </Routes>
    </>
  )
}

export default App
