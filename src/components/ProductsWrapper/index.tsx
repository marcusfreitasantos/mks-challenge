"use client";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "../ProductCard";
import { GetProducts } from "@/services/products";
import ProductCardShimmer from "../ProductCardShimmer/ProductCardShimmer";
import * as S from "./styles";

type ProductProps = {
  brand: string;
  createdAt: string;
  description: string;
  id: number;
  name: string;
  photo: string;
  price: number;
  updatedAt: string;
};

export function ProductsWrapper() {
  const shimmerObjects = Array.from(Array(8).keys());

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: GetProducts,
  });

  return (
    <>
      {isLoading ? (
        <S.ProductsWrapper>
          {shimmerObjects.map((shimmer, index) => {
            return <ProductCardShimmer key={`shimmer_${index}`} />;
          })}
        </S.ProductsWrapper>
      ) : (
        <S.ProductsWrapper>
          {data?.products?.map((product: ProductProps) => {
            return <ProductCard key={product.id} productData={product} />;
          })}
        </S.ProductsWrapper>
      )}
    </>
  );
}
