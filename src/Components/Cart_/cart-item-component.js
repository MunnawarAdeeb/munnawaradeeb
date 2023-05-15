import "./cart-item-style.scss";

const Cart_Item = ({ CartItems }) => {
  const { name, quantity, imageUrl, price } = CartItems;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} />
      <div className="item-details">
        <h2 className="name">{name}</h2>
        <span>quantity={quantity}</span>
        <span>
          Price= {quantity}x${price}=${quantity*price}
        </span>
      </div>
    </div>
  );
};
export default Cart_Item;
