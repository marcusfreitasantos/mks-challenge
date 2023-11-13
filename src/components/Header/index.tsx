"use client";
import * as S from "./styles";
import Container from "../Container";
import Link from "next/link";
import Cart from "../Cart";

export default function Header() {
  return (
    <S.Header>
      <Container>
        <S.Header__wrapper>
          <S.Header__logo>
            <Link href="/">MKS</Link>
            <span>Sistemas</span>
          </S.Header__logo>

          <Cart />
        </S.Header__wrapper>
      </Container>
    </S.Header>
  );
}
