import { Locale } from 'next-intl';
import { MetadataRoute } from "next";

import { routing } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';

type Href = Parameters<typeof getPathname>[0]['href'];

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return process.env.NEXT_PUBLIC_WEBSITE_URL + pathname;
}

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      )
    }
  }));
}

export default function RootSitemap(): MetadataRoute.Sitemap {
  return [{
    url: process.env.NEXT_PUBLIC_WEBSITE_URL as string,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1
  },
  ...getEntries('/'),
  ];
}