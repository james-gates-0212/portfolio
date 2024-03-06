import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const host = 'https://james-gates-portfolio.vercel.app' + (process.env.BASE_PATH || '');
  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: host + '/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: host + '/experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}
