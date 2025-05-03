import type { MetadataRoute } from 'next';

export default function RootRobots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    host: 'https://l3op.vercel.app',
    sitemap: 'https://l3op.vercel.app/sitemap.xml'
  };
}