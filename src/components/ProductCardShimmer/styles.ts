import styled from "styled-components";

export const ProductCard = styled.div`
  width: 250px;
  margin: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 13%);
  background-color: #fff;
`;

export const Image = styled.div`
  width: 100%;
  height: 130px;
  background-image: url("/images/shimmer.gif");
  background-size: cover;
  margin: auto;
`;

export const ProductCard__info = styled.div`
  padding: 20px;
`;

export const ProductCard__title_wrapper = styled.div`
  height: 20px;
  margin: 20px 0;
  width: 100%;
  background-image: url("/images/shimmer.gif");
  background-size: cover;
`;

export const ProductCard__description = styled.p`
  height: 10px;
  background-image: url("/images/shimmer.gif");
  background-size: cover;
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
