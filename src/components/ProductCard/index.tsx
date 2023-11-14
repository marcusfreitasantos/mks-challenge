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
};

export default function ProductCard({ productData }: ProductProps) {
  const { currentCartItems, setCurrentCartItems, setCartTotal, cartTotal } =
    useContext(GlobalContext);

  const addProductToCart = () => {
    if (
      currentCartItems.length &&
      currentCartItems.find((item) => item.id === productData.id)
    ) {
      console.log("no");
    } else {
      setCurrentCartItems((currentCartItems) => [
        ...currentCartItems,
        { ...productData, amount: (productData.amount = 1) },
      ]);
    }
  };
  let total = 0;
  useEffect(() => {
    currentCartItems.map((item) => {
      total += Number(item.price * 1);
      setCartTotal(total);
    });
  }, [currentCartItems]);

  return (
    <S.ProductCard>
      <S.ProductCard__info>
        <Image
          src={productData.photo}
          width={130}
          height={150}
          alt="imagem do produto: "
        />

        <S.ProductCard__title_wrapper>
          <S.ProductCard__title>{productData.name}</S.ProductCard__title>
          <S.ProductCard__price>R${productData.price}</S.ProductCard__price>
        </S.ProductCard__title_wrapper>

        <S.ProductCard__description>
          {productData.description}
        </S.ProductCard__description>
      </S.ProductCard__info>

      <S.ProductCard__purchaseBtn onClick={addProductToCart}>
        <Image
          src={"/images/purchase.svg"}
          width={14}
          height={14}
          alt="ícone de sacola"
        />
        Comprar
      </S.ProductCard__purchaseBtn>
    </S.ProductCard>
  );
}
