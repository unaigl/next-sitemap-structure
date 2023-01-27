// next-sitemap.config.js
const siteUrl = process.env.NEXT_PUBLIC_DOMAIN_URL

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  exclude: ["/404", "/server-sitemap-index.xml"],
  changefreq: "daily",
  generateRobotsTxt: true,
  sitemapSize: 7000, // default 7000
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/404"],
      },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      // `${siteUrl}sitemap.xml`,
      // `${siteUrl}sitemap/server-sitemap-promos.xml`,
      // `${siteUrl}sitemap/sitemap-merchants-1.xml`,
      // `${siteUrl}server-sitemap-index.xml`,
    ],
  },
}
