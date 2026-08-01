export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const staticRoutes = ['/']

  const routes = [
    ...staticRoutes
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `<url><loc>${config.public.siteUrl}${r}</loc><changefreq>weekly</changefreq></url>`).join('\n')}
</urlset>`

  event.node.res.setHeader('Content-Type', 'application/xml')
  return xml
})