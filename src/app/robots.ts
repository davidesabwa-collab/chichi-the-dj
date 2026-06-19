import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/admin', '/login', '/api/'],
            },
        ],
        sitemap: 'https://www.chichithedj.us/sitemap.xml',
        host: 'https://www.chichithedj.us',
    };
}
