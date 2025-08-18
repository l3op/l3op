"use client";

import { useTransition } from "react"
import { useParams } from "next/navigation";
import { Circle, CircleCheck } from "lucide-react";
import { Locale, useLocale, useTranslations } from "next-intl";
import { locales } from "@/i18n/locales";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function LocaleSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const [isPending, startTransition] = useTransition()
  // I18n Navigation.
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams();
  // I18n Locales.
  const usedLocale = useLocale();
  const currentLocale = locales.find((l) => l.lang === usedLocale);
  const currentLocaleLang = currentLocale?.lang;
  const currentLocaleDir = currentLocale?.dir;
  const currentLocaleFlag = currentLocale?.flag;

  // Function to change language.
  const handleChange = (locale: Locale) => {
    if (locale === currentLocaleLang) return;
    startTransition(() => {
      // @ts-expect-error
      router.replace({ pathname, params }, { locale: locale });
    })
  }

  return (
    <DropdownMenu dir={currentLocaleDir as any}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" disabled={isPending} className="cursor-pointer">
          <span className="text-xl">{currentLocaleFlag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="bg-transparent backdrop-blur-md shadow-none border-none">
        <DropdownMenuLabel>{t("label")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {locales.map((locale) => (
          <DropdownMenuItem key={locale?.lang} onClick={() => handleChange(locale?.lang)} className={locale?.lang === currentLocaleLang ? 'cursor-pointer bg-muted' : 'cursor-pointer'}>
            <span>{locale?.lang === currentLocaleLang ? <CircleCheck /> : <Circle />}</span>
            <span>{locale?.flag}</span>
            <span className={locale?.lang === currentLocaleLang ? 'font-semibold' : ''}>{t("locale", { locale: locale?.lang })}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}