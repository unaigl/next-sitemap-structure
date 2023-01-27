import { SiteLinksSearchBoxJsonLd } from "next-seo"

/* Da acceso al buscador de la web desde la pagina de google */

const Page = () => (
  <>
    <h1>Sitelinks Search Box JSON-LD</h1>
    <SiteLinksSearchBoxJsonLd
      url="https://www.tikpromos.com"
      potentialActions={[
        {
          target: "https://tikpromos.com/filtros?_text",
          queryInput: "search_term_string",
        },
      ]}
    />
  </>
)

export default Page
