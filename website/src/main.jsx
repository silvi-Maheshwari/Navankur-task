import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {  AuthProvider } from './Components/AuthContext.jsx'
// import { AuthProvider } from './Components/AuthContext.js'
import {BrowserRouter} from 'react-router-dom'
import { CartProvider } from './Components/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  
<AuthProvider>
  <CartProvider>
  <BrowserRouter>
    <App />

    </BrowserRouter>
    </CartProvider>
    </AuthProvider>
  
 
)
