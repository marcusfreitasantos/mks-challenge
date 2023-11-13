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
`;
