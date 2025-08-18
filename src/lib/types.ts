import { Locale } from "next-intl";

/**
 * Locale metadate props 
 * */
export interface MetadataProps {
  params: Promise<{ locale: Locale }>;
}