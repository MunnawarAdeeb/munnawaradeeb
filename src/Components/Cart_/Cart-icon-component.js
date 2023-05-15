import { ReactComponent as CartIcon } from "../../Assets/shopping-bag.svg";
import "./cart-icon-style.scss";
import { CartContext } from "../contexts/cart-context-component";
import { useContext } from "react";
const Carticon = () => {
  const { isCartIsOpen, setIsCartIsOpen,cartCount} = useContext(CartContext);
  return (
    <>
      <div
        className="cart-icon-container"
        onClick={() => {
          setIsCartIsOpen(!isCartIsOpen);
        }}
      >
        <CartIcon className="shopping-icon" />
        <span className="item-count">{cartCount}</span>
      </div>
    </>
  );
};
export default Carticon;