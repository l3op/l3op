"use client";

import { useEffect, useState, useTransition } from "react";
import { useTheme } from "next-themes";
import { Circle, CircleCheck, Moon, Sun, SunMoon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/i18n/locales";
import { Button } from "@/components/ui/button";
import { themeOptions } from "@/providers/theme-provider";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'


function ThemeIcon({ theme }: { theme: string }) {
  const icons: Record<string, React.JSX.Element> = {
    light: <Sun className="h-[1.2rem] w-[1.2rem]" />,
    dark: <Moon className="h-[1.2rem] w-[1.2rem]" />,
    system: <SunMoon className="h-[1.2rem] w-[1.2rem]" />,
  };
  return icons[theme];
}

export function ThemeToggle() {
  const t = useTranslations("ThemeToggle");
  const [isPending] = useTransition()
  const { setTheme, theme } = useTheme();
  const usedLocale = useLocale();
  const currentLocale = locales.find((l) => l.lang === usedLocale);
  const currentLocaleDir = currentLocale?.dir;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled>
        <ThemeIcon theme={"system"} />
      </Button>
    );
  }

  return (
    <DropdownMenu dir={currentLocaleDir as any}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={!mounted} className="cursor-pointer">
          <ThemeIcon theme={theme!} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="bg-transparent backdrop-blur-md shadow-none border-none">
        <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themeOptions.map((themeOption) => (
          <DropdownMenuItem key={themeOption.value} onClick={() => setTheme(themeOption.value)} className={themeOption.value === theme ? 'cursor-pointer bg-muted' : 'cursor-pointer'}>
            <span>{themeOption.value === theme ? <CircleCheck /> : <Circle />}</span>
            <ThemeIcon theme={themeOption.value} />
            <span>{t(themeOption.labelKey)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}