/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://masters-web.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*',
    '/private/*',
    '/_next/*',
    '/404',
    '/500',
    '/dashboard',
    '/dashboard/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/', '/dashboard/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1
      }
    ],
    additionalSitemaps: [
      'https://masters-web.com/sitemap.xml'
    ]
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // Custom priority and changefreq based on route
    const customRoutes = {
      '/': { priority: 1.0, changefreq: 'daily' },
      '/pricing': { priority: 0.9, changefreq: 'weekly' },
      '/projects': { priority: 0.8, changefreq: 'weekly' },
      '/contact': { priority: 0.8, changefreq: 'monthly' }
    }

    const customConfig = customRoutes[path] || {}

    return {
      loc: path,
      changefreq: customConfig.changefreq || config.changefreq,
      priority: customConfig.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  }
} 