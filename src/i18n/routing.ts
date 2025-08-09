import { defineRouting } from "next-intl/routing";
import { locales } from "@/i18n/locales";

export const routing = defineRouting({
  locales: locales.map(({ lang }) => lang),
  defaultLocale: "ar",
  localeDetection: true,
  localeCookie: false,
});
