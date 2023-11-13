"use client";
import { useState } from "react";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
