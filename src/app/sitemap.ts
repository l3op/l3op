import { Locale } from 'next-intl';
import { MetadataRoute } from "next";
import { routing } from '@/i18n/routing';
import { getPathname } from '@/i18n/navigation';

const baseUrl = "https://l3op.vercel.app";
type Href = Parameters<typeof getPathname>[0]['href'];
const lastModified = new Date().toISOString().split("T")[0];

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return baseUrl + pathname;
}

function getEntries(href: Href) {
  return routing.locales.map((locale) => ({
    url: getUrl(href, locale),
    lastModified: lastModified,
    priority: 0.7,
    alternates: {
      languages: Object.fromEntries(
        routing.locales.map((cur) => [cur, getUrl(href, cur)])
      )
    }
  }));
}

export default function RootSitemap(): MetadataRoute.Sitemap {
  return [{
    url: baseUrl,
    lastModified: lastModified,
    changeFrequency: "yearly",
    priority: 1,
  },
  ...getEntries('/'),
  ...getEntries('/about-me'),
  ];
}