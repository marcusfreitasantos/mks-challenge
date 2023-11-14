import styled from "styled-components";

export const Cart__btn_wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  color: #000;
  font-size: ${(props) => props.theme.font.default};
  font-weight: 700;
  gap: ${(props) => props.theme.font.default};
  cursor: pointer;
`;

export const Cart__content_wrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  width: 90%;
  height: 100vh;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 5%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 0;
  right: 0;
  animation: showCartMenu 0.3s forwards;

  @keyframes showCartMenu {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: initial;
    }
  }
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Cart__content = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 12px;
`;

export const Cart__products_wrapper = styled.div`
  height: 600px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) {
    max-height: 600px;
    flex: 1;
  }
`;

export const Cart__content_header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Cart__title = styled.h3`
  font-size: 27px;
  color: #fff;
  font-weight: 700;
  width: 70%;
`;

export const Cart__close_btn = styled.button`
  background-color: #000;
  color: ${(props) => props.theme.color.primary};
  font-size: ${(props) => props.theme.font.big};
  font-weight: 400;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
`;

export const Cart__total_wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

export const Cart__total = styled.span`
  font-size: ${(props) => props.theme.font.default};
  color: #fff;
  font-weight: 700;
`;

export const Cart__total_finishPurchase_btn = styled.button`
  background-color: #000;
  padding: 12px;
  text-align: center;
  font-size: ${(props) => props.theme.font.default};
  font-weight: 700;
  color: #fff;
  border: none;
  width: 100%;
`;
