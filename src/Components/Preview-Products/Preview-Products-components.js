import "./Preview-Products-style.scss";
import Product_card from "../Product-card-component.js/Product-card-component";
const Preview_Compoent = ({title, productss}) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title}</span>
      </h2>
      <div className="preview">
        {productss.filter((_, index) => index < 4)
          .map((product) => (
            <Product_card key={product.id} products={product} />
          ))}
      </div>
    </div>
  );
};
export default Preview_Compoent;
