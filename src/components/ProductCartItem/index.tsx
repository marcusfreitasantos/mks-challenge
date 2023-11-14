"use client";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/contexts/cartContext";
import Image from "next/image";
import * as S from "./styles";

type ProductProps = {
  productData: {
    brand: string;
    createdAt: string;
    description: string;
    id: number;
    name: string;
    photo: string;
    price: number;
    updatedAt: string;
    amount: number;
  };
  currentCartItemIndex: number;
};

export default function ProductCartItem({ productData }: ProductProps) {
  const { currentCartItems, setCurrentCartItems, setCartTotal } =
    useContext(GlobalContext);
  const [productQuantity, setProductQuantity] = useState(1);
  let total = 0;

  const increaseProductAmountOnCart = () => {
    productData.amount += 1;
    setProductQuantity(productData.amount);

    currentCartItems.map((item) => {
      total += Number(item.price * item.amount);
    });
    setCartTotal(total);
  };

  const decreaseProductAmountOnCart = () => {
    productData.amount -= 1;
    setProductQuantity(productData.amount);

    currentCartItems.map((item) => {
      total += Number(item.price * item.amount);
    });
    setCartTotal(total);

    if (productData.amount === 0) {
      setCurrentCartItems(
        currentCartItems.filter((item) => item.id !== productData.id)
      );
    }
  };

  const removeProductFromCart = () => {
    currentCartItems.map((item) => {
      total += Number(item.price * item.amount);
    });
    setCartTotal(total);

    setCurrentCartItems(
      currentCartItems.filter((item) => item.id !== productData.id)
    );
  };

  return (
    <S.ProductCard>
      <S.ProductCard__remove_item_btn onClick={removeProductFromCart}>
        X
      </S.ProductCard__remove_item_btn>
      <S.ProductCard__info>
        <Image
          src={productData.photo}
          width={100}
          height={100}
          alt="imagem do produto: "
        />
        <S.ProductCard__title>{productData.name}</S.ProductCard__title>
        <S.ProductCard__title_wrapper>
          <S.ProductCard__quant_wrapper>
            <S.ProductCart__quant_btn
              onClick={decreaseProductAmountOnCart}
              disabled={productQuantity > 0 ? false : true}
            >
              -
            </S.ProductCart__quant_btn>
            <S.ProductCart__quant_value>
              {productQuantity}
            </S.ProductCart__quant_value>
            <S.ProductCart__quant_btn onClick={increaseProductAmountOnCart}>
              +
            </S.ProductCart__quant_btn>
          </S.ProductCard__quant_wrapper>

          <S.ProductCard__price>
            R$ {Math.trunc(productData.price)}
          </S.ProductCard__price>
        </S.ProductCard__title_wrapper>
      </S.ProductCard__info>
    </S.ProductCard>
  );
}
