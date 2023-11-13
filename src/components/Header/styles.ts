import styled, { css } from "styled-components";

export const Header = styled.header`
  color: #fff;
  background-color: ${(props) => props.theme.color.primary};
`;

export const Header__wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Header__logo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.font.small};

  a {
    font-size: ${(props) => props.theme.font.big};
    font-weight: 600;
  }

  span {
    font-size: ${(props) => props.theme.font.default};
  }
`;
