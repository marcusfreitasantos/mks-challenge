import styled from "styled-components";

export const ProductCard = styled.div`
  width: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 13%);
  background-color: #fff;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const ProductCard__info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ProductCard__title_wrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  width: 100%;
  gap: 12px;
`;

export const ProductCard__title = styled.h2`
  font-size: ${(props) => props.theme.font.default};
  font-weight: 400;
  color: #000;
`;

export const ProductCard__price = styled.span`
  background-color: #373737;
  font-size: ${(props) => props.theme.font.default};
  color: #fff;
  padding: 8px 12px;
  border-radius: 5px;
  width: fit-content;
  font-weight: 700;

  @media (min-width: 768px) {
    background: transparent;
    color: #000;
    padding: 0;
  }
`;

export const ProductCard__quant_wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  justify-content: space-around;
  color: #000;
  font-weight: 400;
`;

export const ProductCart__quant_value = styled.span`
  font-size: 22px;
  padding: 5px;
`;

export const ProductCart__quant_btn = styled.button`
  font-size: 22px;
  border: none;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
