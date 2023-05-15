import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/utils.fireBase";
export const ProductsContext = createContext({ products: [] });

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect( () => {
    const getGategoriesMap = async() => {
     const categoryMap=await getCategoriesAndDocuments();
      setProducts(categoryMap)
      console.log(Object.keys(categoryMap)) /*This Method will give the Keys */
      console.log(Object.values(categoryMap)) /*This Method will give the values */
    }; getGategoriesMap();
  }, []);
  const value = { products };
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
