import { useContext } from "react";
import { CartContext } from "./CartContext";
import { AuthContext } from "./AuthContext";


const Cart = () => {
  const { cart, removeFromCart, makePurchase, updateQty } = useContext(CartContext);
  const { token } = useContext(AuthContext);

  if (cart.length === 0) return <p className="empty-cart">Your cart is empty.</p>;

  

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <input 
            type="number" 
            value={item.qty} 
            placeholder="quantity"
            onChange={(e) => updateQty(item.id, Number(e.target.value))} 
          />
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <h2 className="total">Total: ${cart.reduce((acc, item) => acc + item.price * item.qty, 0)}</h2>
      {token ? <button onClick={() => makePurchase("eve.holt@reqres.in")}>Buy</button> : <p className="login-msg">Please login to purchase.</p>}
    </div>
  );
};

export default Cart;
