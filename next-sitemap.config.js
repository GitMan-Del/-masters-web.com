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
    '/dashboard/*',
    '/projects',
    '/projects/*'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/dashboard/',
          '/projects/'
        ]
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
    ],
    host: 'https://masters-web.com'
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  autoLastmod: true,
  transform: async (config, path) => {
    // Custom priority and changefreq based on route
    const customRoutes = {
      '/': { 
        priority: 1.0, 
        changefreq: 'daily',
        lastmod: new Date().toISOString()
      },
      '/pricing': { 
        priority: 0.9, 
        changefreq: 'weekly',
        lastmod: new Date().toISOString()
      },
      '/contact': { 
        priority: 0.8, 
        changefreq: 'monthly',
        lastmod: new Date().toISOString()
      }
    }

    const customConfig = customRoutes[path] || {}

    return {
      loc: path,
      changefreq: customConfig.changefreq || config.changefreq,
      priority: customConfig.priority || config.priority,
      lastmod: customConfig.lastmod || (config.autoLastmod ? new Date().toISOString() : undefined),
      alternateRefs: [
        {
          href: path === '/' ? 'https://masters-web.com' : `https://masters-web.com${path}`,
          hreflang: 'en'
        }
      ]
    }
  },
  additionalPaths: async () => {
    // Add any additional paths that might not be automatically detected
    const additionalPaths = [
      {
        loc: '/',
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: 'https://masters-web.com',
            hreflang: 'en'
          }
        ]
      },
      {
        loc: '/pricing',
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: 'https://masters-web.com/pricing',
            hreflang: 'en'
          }
        ]
      },
      {
        loc: '/contact',
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: 'https://masters-web.com/contact',
            hreflang: 'en'
          }
        ]
      }
    ]

    return additionalPaths
  }
} 