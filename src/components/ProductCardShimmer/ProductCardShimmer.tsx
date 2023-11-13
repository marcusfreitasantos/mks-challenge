"use client";
import Image from "next/image";
import * as S from "./styles";

export default function ProductCardShimmer() {
  return (
    <S.ProductCard>
      <S.ProductCard__info>
        <S.Image />

        <S.ProductCard__title_wrapper />

        <S.ProductCard__description />
      </S.ProductCard__info>

      <S.ProductCard__purchaseBtn>
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
