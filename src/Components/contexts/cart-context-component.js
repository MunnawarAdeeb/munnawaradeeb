import { createContext, useEffect, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const found = cartItems.find((elements) => elements.id === productToAdd.id);
  if (found) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const RemoveCartItem = (cartItems, cartItemToRemove) => {
  const found = cartItems.find(
    (elements) => elements.id === cartItemToRemove.id
  );

  if (found.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
const ClearCartItem = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
export const CartContext = createContext({
  isCartIsOpen: false,
  setIsCartIsOpen: () => {},
  cartitems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  DeleteItemToCart: () => {},
  cartCount: 0,
  cartTotal:0
});
export const CartProvider = ({ children }) => {
  const [isCartIsOpen, setIsCartIsOpen] = useState(false);
  const [cartItems, setcartItem] = useState([]);
  const [cartCount, setcartCount] = useState(0);
  const [cartTotal,setCartTotal]=useState(0);
  const addItemToCart = (productToAdd) => {
    setcartItem(addCartItem(cartItems, productToAdd));
  };
  const removeItemToCart = (cartItemToRemove) => {
    setcartItem(RemoveCartItem(cartItems, cartItemToRemove));
  };
  const DeleteItemToCart = (cartItemToClear) => {
    setcartItem(ClearCartItem(cartItems, cartItemToClear));
  };
  const newCartCount = cartItems.reduce(
    (accumalator, currentValue) => accumalator + currentValue.quantity,
    0
  );
  const newCartTotal=cartItems.reduce(
    (accumalator, currentValue) => accumalator + currentValue.quantity * currentValue.price,0);
  useEffect(() => {
    setcartCount(newCartCount);
  }, [cartItems]);
  useEffect(() => {
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const value = {
    isCartIsOpen,
    setIsCartIsOpen,
    cartItems,
    addItemToCart,
    cartCount,
    setcartCount,
    removeItemToCart,
    DeleteItemToCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
