import { Locale } from "next-intl";

/**
 * Locale  metadate props 
 * */
export type LocaleProps = {
  params: Promise<{ locale: Locale }>;
};