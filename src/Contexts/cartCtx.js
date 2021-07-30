import React, { useContext, createContext, useState } from "react";

const CartCtx = createContext();

export default function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState(0);
  const [restaurantId, setRestaurantId] = useState("");
  return (
    <CartCtx.Provider
      value={{
        products,
        setProducts,
        payment,
        setPayment,
        shipping,
        setShipping,
        restaurantId,
        setRestaurantId,
      }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export const useCartCtx = () => {
  const context = useContext(CartCtx);
  const {
    products,
    setProducts,
    payment,
    setPayment,
    shipping,
    setShipping,
    restaurantId,
    setRestaurantId,
  } = context;

  const addCart = (newPdt) => {
    const exists = () => {
      let res = false;
      for (const pdt of products) {
        if (pdt.id === newPdt.id) {
          res = true;
          break;
        }
      }
      return res;
    };

    if (exists()) {
      const newArray = products.map((pdt) => {
        if (pdt.id === newPdt.id) {
          const pdtChanged = {
            ...pdt,
            quantity: (pdt.quantity += newPdt.quantity),
          };
          return pdtChanged;
        } else {
          return pdt;
        }
      });
      setProducts(newArray);
    } else {
      setProducts([...products, newPdt]);
    }
  };



  return {
    products,
    setProducts,
    payment,
    setPayment,
    shipping,
    setShipping,
    addCart,
    restaurantId,
    setRestaurantId,
  };
};
