import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import { AuthContext } from './Components/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const{token}=useContext(AuthContext)
  
  

  return (
    <>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/:id'element={<ProductDetails/>}/>
       <Route path='/cart' element={<Cart/>}/>
      </Routes >
      
    </>
  )
}

export default App
