import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/cartContext";
import Image from "next/image";
import * as S from "./styles";
import ProductCartItem from "../ProductCartItem";

export default function Cart() {
  const { currentCartItems, cartTotal, setCartTotal } =
    useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const openCloseCartMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Cart__btn_wrapper onClick={openCloseCartMenu}>
        <Image
          src={"/images/cart.svg"}
          width={12}
          height={12}
          alt="cart icon"
        />
        <span>{currentCartItems?.length}</span>
      </S.Cart__btn_wrapper>

      {isOpen && (
        <S.Cart__content_wrapper>
          <S.Cart__content>
            <S.Cart__content_header>
              <S.Cart__title>Carrinho de compras</S.Cart__title>

              <S.Cart__close_btn onClick={openCloseCartMenu}>
                X
              </S.Cart__close_btn>
            </S.Cart__content_header>

            <S.Cart__products_wrapper>
              {currentCartItems?.map((cartItem, index) => {
                return (
                  <ProductCartItem
                    key={`${cartItem.name}_${index}`}
                    productData={cartItem}
                    currentCartItemIndex={index}
                  />
                );
              })}
            </S.Cart__products_wrapper>
          </S.Cart__content>

          <S.Cart__total_wrapper>
            <S.Cart__total>Total: </S.Cart__total>
            <S.Cart__total>R$ {cartTotal}</S.Cart__total>
          </S.Cart__total_wrapper>
          <S.Cart__total_finishPurchase_btn>
            Finalizar Compra
          </S.Cart__total_finishPurchase_btn>
        </S.Cart__content_wrapper>
      )}
    </>
  );
}
