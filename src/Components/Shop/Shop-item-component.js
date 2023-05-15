import { useContext } from "react";
import "./Shop-item-component.scss";
import { ProductsContext } from "../contexts/products-context-component";
import Preview_Compoent from "../Preview-Products/Preview-Products-components";
const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (<div>{
    Object.keys(products).map((title) => {
      const productss=products[title]
      return(<Preview_Compoent key={productss.id} productss={productss}  title={title}/>);
      
    })





  }</div>);
};
export default Shop;
