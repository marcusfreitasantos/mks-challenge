"use client";
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
  };
};

export default function ProductCard({ productData }: ProductProps) {
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
