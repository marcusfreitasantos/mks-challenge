"use client";
import { ReactNode } from "react";
import * as S from "./styles";

type Props = {
  children?: ReactNode;
};

export default function MainContent({ children }: Props) {
  return <S.Section>{children}</S.Section>;
}
