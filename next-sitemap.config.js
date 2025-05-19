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
} 