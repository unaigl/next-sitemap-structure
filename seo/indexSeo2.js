const indexSeo = {
  title:
    "La mejor seleccion de promociones diariamente, obtenidas de las mejores tiendas",
  description:
    "Seleccionamos para el usuario las mejores promociones diariamente, de las mejores tiendas y empresas a nivel mundial. Las promociones seleccionadas son validas, al menos para España.",
  keywords: "e-commerce, store, buy, online, products, shopping",
  og: {
    title:
      "La mejor seleccion de promociones diariamente, obtenidas de las mejores tiendas",
    description:
      "Seleccionamos para el usuario las mejores promociones diariamente, de las mejores tiendas y empresas a nivel mundial. Las promociones seleccionadas son validas, al menos para España.",
    image:
      "https://tikpromos.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg90042.aa8ed32d.png&w=828&q=75",
    url: "https://tikpromos.com",
  },
  twitter: {
    handle: "@tikpromos",
    site: "https://twitter.com/tikpromos",
  },
  schema: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://example.com/#website",
    url: "https://example.com",
    name: "My E-commerce Store",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    hasPart: [
      {
        "@type": "WebPage",
        "@id": "https://example.com/products#product",
        url: "https://example.com/products",
        name: "Products",
        isPartOf: {
          "@id": "https://example.com/#website",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://example.com/cart#cart",
        url: "https://example.com/cart",
        name: "Cart",
        isPartOf: {
          "@id": "https://example.com/#website",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://example.com/checkout#checkout",
        url: "https://example.com/checkout",
        name: "Checkout",
        isPartOf: {
          "@id": "https://example.com/#website",
        },
      },
    ],
  },
  robotsProps: {
    maxSnippet: -1,
    maxImagePreview: "none",
    maxVideoPreview: -1,
  },
  sitemap: "https://example.com/sitemap.xml",
  favicon: "https://example.com/favicon.ico",
  analytics: "UA-12345678-9",
}
export default indexSeo
