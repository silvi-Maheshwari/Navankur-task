import { createContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);


  const addToCart = (product,navigate) => {
    setCart([...cart, { ...product }]);
    alert('Added to cart')
    navigate('/cart')
 
  };

  const updateQty = (id, qty) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, qty } : item)));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const makePurchase = async (userEmail) => {
    try {
      // Using the '/api' proxy path
      await axios.post("/api/", {
        user: { email: userEmail },
        cartItems: cart,
        totalPrice: cart.reduce((acc, item) => acc + item.price * item.qty, 0),
      });

      setCart([]);
      console.log('purchase succesful ')
      alert("Purchase successful!");
    } catch (error) {
      console.error("Error processing purchase:", error);
      alert("Error processing purchase.");
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, makePurchase, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};
