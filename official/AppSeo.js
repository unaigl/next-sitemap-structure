import React from "react"
import { NextSeo } from "next-seo"

const AppSeo = () => (
  <>
    <NextSeo
      title="Seleccionamos para el usuario las mejores promociones de cada dia de las mejores tiendas"
      description="Seleccionamos para el usuario las mejores promociones de cada dia de las mejores tiendas..."
      canonical="https://www.canonical.ie/"
      openGraph={{
        type: "website",
        url: "https://www.url.ie/a",
        title: "Open Graph Title",
        description: "Open Graph Description",
        locale: "es_ES",
        siteName: "Tikpromos",
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
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: "none",
        maxVideoPreview: -1,
      }}
      additionalMetaTags={[
        // {
        //   property: "dc:enterprise",
        //   content: "SL Tikpromos",
        // },
        {
          name: "tikpromos-website   XXXX application-name",
          content:
            "keywords: Seleccionamos para el usuario las mejores promociones de cada dia de las mejores tiendas...   XXX NextSeo, keywords, description, and author. These tags are used by search engines to understand the content of the webpage and to determine its relevance to a search query.",
        },
        {
          httpEquiv: "x-ua-compatible",
          content: "IE=edge; chrome=1",
        },
      ]}
    />
  </>
)

export default AppSeo
