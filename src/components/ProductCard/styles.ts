import { Montserrat } from "next/font/google";
import styled from "styled-components";

export const ProductCard = styled.div`
  width: 250px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 13%);
  background-color: #fff;
`;

export const ProductCard__info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductCard__title_wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  width: 100%;
`;

export const ProductCard__title = styled.h2`
  font-size: ${(props) => props.theme.font.default};
  font-weight: 400;
  width: 50%;
`;

export const ProductCard__price = styled.span`
  background-color: #373737;
  font-size: ${(props) => props.theme.font.default};
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  width: fit-content;
  font-weight: 700;
`;

export const ProductCard__description = styled.p`
  font-size: 10px;
  font-weight: 300;
  color: #2c2c2c;
`;

export const ProductCard__purchaseBtn = styled.button`
  background-color: ${(props) => props.theme.color.primary};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  border: none;
  text-transform: uppercase;
  font-family: Montserrat;
  font-weight: 600;
  gap: 12px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;
