/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://horex.com.tr',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://horex.com.tr/sitemap.xml',
      'https://horex.com.tr/sitemap-0.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  transform: async (config, path) => {
    if (path.startsWith('/semtler/')) {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
} 