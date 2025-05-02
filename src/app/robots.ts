import type { MetadataRoute } from 'next';

export default function RootRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://l3op.vercel.app/sitemap.xml',
  };
}