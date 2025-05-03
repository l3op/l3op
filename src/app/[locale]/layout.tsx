import "@/styles/globals.css";

import { Rubik } from 'next/font/google'
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Metadata } from "next";

const rubik = Rubik({
  weight: ['400', '600', '800'],
  subsets: ['arabic'],
  preload: true
})

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Manifest' });
  return {
    metadataBase: new URL('https://l3op.vercel.app'),
    title: { default: t('name'), template: `%s | ${t('name')}` },
    description: t('description'),
    keywords: t("keywords")
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={`${rubik.className} antialiased`} suppressHydrationWarning>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
