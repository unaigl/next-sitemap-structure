const indexSeo = {
  title: "La mejor seleccion de promociones diariamente",
  description:
    "Seleccionamos para el usuario las mejores promociones de cada dia de las mejores tiendas",
  canonical: "https://www.tikpromos.com/",
  openGraph: {
    url: "https://www.url.ie/a",
    title: "Open Graph Title",
    description: "Open Graph Description",
    images: [
      {
        url: "https://www.example.ie/og-image-01.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "https://www.example.ie/og-image-02.jpg",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
      { url: "https://www.example.ie/og-image-03.jpg" },
      { url: "https://www.example.ie/og-image-04.jpg" },
    ],
    siteName: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
  robotsProps: {
    nosnippet: true,
    notranslate: true,
    noimageindex: true,
    noarchive: true,
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
  },
}
export default indexSeo
