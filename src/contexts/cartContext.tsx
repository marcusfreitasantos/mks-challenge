"use client";

import { ReactNode, createContext } from "react";
import { useState } from "react";

type Props = {
  children: ReactNode;
};

type CartProps = {
  currentCartItems?: string[];
  cartTotal?: number;
  setCurrentCartItems?: Function;
  setCartTotal?: Function;
};

export const GlobalContext = createContext<CartProps>({});

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
