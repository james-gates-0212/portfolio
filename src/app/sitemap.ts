import { getConfig } from '@/config';
import { MetadataRoute } from 'next';

const config = getConfig();

export default function sitemap(): MetadataRoute.Sitemap {
  const host = config.common.host + config.common.basePath;
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
