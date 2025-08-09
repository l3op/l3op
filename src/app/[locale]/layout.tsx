import "./globals.css";
import { Metadata } from "next";
import { Cairo } from "next/font/google";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { locales } from "@/i18n/locales";
import { ThemeProvider } from "@/components/core/theme-provider";

const cairoSans = Cairo({
  variable: "--font-cairo-sans",
  subsets: ["arabic", "latin"]
});

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_WEBSITE_URL as string),
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
  //i18n Locale.
  const currentLocale = locales.find(({ lang }) => lang === locale);
  const currentLocaleLang = currentLocale?.lang;
  const currentLocaleDir = currentLocale?.dir;
  // Check if the locale is available or return 404 - not found.
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html
      lang={currentLocaleLang}
      dir={currentLocaleDir}
      className={`${cairoSans.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            enableColorScheme
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}