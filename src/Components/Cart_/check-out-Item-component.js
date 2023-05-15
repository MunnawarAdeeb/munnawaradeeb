import { useContext } from "react";
import { CartContext } from "../contexts/cart-context-component";
import "./check-out-item-style.scss";
const CheckOutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const { DeleteItemToCart, removeItemToCart, addItemToCart } =
    useContext(CartContext);
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt="Image Not Found" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div
            className="arrow"
            onClick={() => {
              removeItemToCart(cartItem);
            }}
          >
            &#10094;
          </div>
          <span className="quantity">{quantity}</span>
          <div
            className="arrow"
            onClick={() => {
              addItemToCart(cartItem);
            }}
          >
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <span
          className="remove-button"
          onClick={() => DeleteItemToCart(cartItem)}
        >
          &#10005;
        </span>
      </div>
    </>
  );
};
export default CheckOutItem;
