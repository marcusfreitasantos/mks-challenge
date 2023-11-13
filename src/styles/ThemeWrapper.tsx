"use client";

import Theme from "./Theme";
import StyledComponentsRegistry from "@/lib/registry";
import { ThemeProvider } from "styled-components";

export function ThemeWrapper({ children }) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
