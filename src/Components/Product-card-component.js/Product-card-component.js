import "./product-card-component.scss";
import { CartContext } from "../contexts/cart-context-component";
import { useContext } from "react";
import Button from "../Buttons/button.component.js"

const Product_card = ({ products }) => {
  const {addItemToCart}=useContext(CartContext)
  const { name, price,imageUrl } = products;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttonType="inverted" onClick={()=>{return addItemToCart(products)}}>Add to Cart</Button>
    </div>
  );
};
export default Product_card;
