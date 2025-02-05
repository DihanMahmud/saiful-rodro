export default function robots() {

    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio'],
      },
      sitemap: 'https://dev-saiful.me/sitemap.xml',
    }
  }