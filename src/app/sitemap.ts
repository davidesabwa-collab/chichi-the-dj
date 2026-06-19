import { MetadataRoute } from 'next';
import { getBlogs, getEvents, getProducts } from '@/lib/firebase/firestore';

const BASE_URL = 'https://www.chichithedj.us';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = [
        { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
        { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${BASE_URL}/mixes`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
        { url: `${BASE_URL}/events`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
        { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE_URL}/shop`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
        { url: `${BASE_URL}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ];

    let dynamicRoutes: MetadataRoute.Sitemap = [];
    try {
        const [blogs, events, products] = await Promise.all([
            getBlogs(),
            getEvents(),
            getProducts(),
        ]);

        const blogRoutes = blogs.map((b) => ({
            url: `${BASE_URL}/blog/${b.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        const eventRoutes = events.map((e) => ({
            url: `${BASE_URL}/events/${e.id}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }));

        const productRoutes = products.map((p) => ({
            url: `${BASE_URL}/shop/${p.id}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }));

        dynamicRoutes = [...blogRoutes, ...eventRoutes, ...productRoutes];
    } catch {
        // Firestore may be unreachable at build time; static routes still serve
    }

    return [...staticRoutes, ...dynamicRoutes];
}
