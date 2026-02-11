import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.securelifefincorp.com';

    // Base routes
    const routes = [
        '',
        '/about',
        '/contact',
        '/services',
        '/privacy-policy',
        '/terms-and-conditions',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service slugs
    const serviceSlugs = [
        'personal-financial-planning',
        'business-financial-planning',
        'insurance-services',
        'tax-investment-options',
    ];

    const serviceRoutes = serviceSlugs.map((slug) => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [...routes, ...serviceRoutes];
}
