"use client"

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes"

export interface theme {
  value: string;
  labelKey: string;
}

export const themeOptions: theme[] = [
  { value: "light", labelKey: "light" },
  { value: "dark", labelKey: "dark" },
  { value: "system", labelKey: "system" },
];

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
      {children}
    </NextThemesProvider>
  )
}