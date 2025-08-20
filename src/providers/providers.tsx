import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "@/providers/theme-provider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextIntlClientProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
};