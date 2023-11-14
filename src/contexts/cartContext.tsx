"use client";

import { ReactNode, createContext } from "react";
import { useState } from "react";

type Props = {
  children: ReactNode;
};

export const GlobalContext = createContext({});

export function CartProvider({ children }: Props) {
  const [currentCartItems, setCurrentCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        currentCartItems,
        setCurrentCartItems,
        cartTotal,
        setCartTotal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
