import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await fetch('http://localhost:3000/api/projects').then((res) => res.json());

  const dynamicRoutes = projects.map((project: any) => ({
    url: `http://localhost:3000/projects/${project.slug}`,
    lastModified: project.lastModified || new Date(),
  }));

  return [
    {
      url: 'http://localhost:3000/',
      lastModified: new Date(),
    },
    {
      url: 'http://localhost:3000/about',
      lastModified: new Date(),
    },
    ...dynamicRoutes,
  ];
}
