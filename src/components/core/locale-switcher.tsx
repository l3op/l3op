"use client";

import { useTransition } from "react"
import { useLocale } from "next-intl";
import { Languages, Circle, CircleCheck } from "lucide-react";
import { locales } from "@/i18n/locales";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition()
  // I18n Navigation.
  const router = useRouter()
  const pathname = usePathname()
  // I18n Locales.
  const currentLocale = locales.find(({ lang }) => lang === useLocale());
  const currentLocaleLang = currentLocale?.lang;
  const currentLocaleName = currentLocale?.name;
  const currentLocaleDir = currentLocale?.dir;
  const currentLocaleFlag = currentLocale?.flag;

  // Function to change language.
  const handleChange = (locale: string) => {
    if (locale === currentLocaleLang) return;
    startTransition(() => {
      router.replace(pathname, { locale })
    })
  }

  return (
    <DropdownMenu dir={currentLocaleDir as any}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" disabled={isPending} className="cursor-pointer shrink-0">
          <Languages />
          <span className="text-xl">{currentLocaleFlag}</span>
          <span className="hidden md:inline" >{currentLocaleName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="bg-transparent backdrop-blur-md shadow-none border-none">
        {
          locales.map((locale) => (
            <DropdownMenuItem key={locale?.lang} onClick={() => handleChange(locale?.lang)} className={locale?.lang === currentLocaleLang ? 'cursor-pointer bg-muted' : 'cursor-pointer'}>
              <span>{locale?.lang === currentLocaleLang ? <CircleCheck /> : <Circle />}</span>
              <span className="text-xl">{locale?.flag}</span>
              <span className={locale?.lang === currentLocaleLang ? 'font-semibold' : ''}>{locale?.name}</span>
            </DropdownMenuItem>
          ))
        }
      </DropdownMenuContent>
    </DropdownMenu>
  );
}