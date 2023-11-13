"use client";
import { ReactNode } from "react";
import Theme from "./Theme";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";

type Props = {
  children: ReactNode;
};

export function ThemeWrapper({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
