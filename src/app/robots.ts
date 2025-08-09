import type { MetadataRoute } from 'next';

export default function RootRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: process.env.NEXT_PUBLIC_WEBSITE_URL,
    sitemap: process.env.NEXT_PUBLIC_WEBSITE_URL + "/sitemap.xml"
  };
}