import "./cart-dropdown-style.scss";
import Button from "../Buttons/button.component";
import { useContext } from "react";
import { CartContext } from "../contexts/cart-context-component";
import { useNavigate } from "react-router-dom";
import Cart_Item from "./cart-item-component";
const Cart_Drop_Down = () => {
  const { cartItems,setIsCartIsOpen,isCartIsOpen } = useContext(CartContext);
  const Navigate=useNavigate()
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((elem) => (
          <Cart_Item key={elem.id} CartItems={elem} />
        ))}
      </div>
      <Button onClick={()=>{Navigate("checkout");setIsCartIsOpen(!isCartIsOpen)}} >Check Out</Button>
     
    </div>
  );
};
export default Cart_Drop_Down;
