import { BreadcrumbJsonLd } from "next-seo"

const JsonLdBreadcrumb = () => (
  <>
    <h1>Breadcrumb JSON-LD</h1>
    <BreadcrumbJsonLd
      itemListElements={[
        {
          position: 1,
          name: "Books",
          item: "https://example.com/books",
        },
        {
          position: 2,
          name: "Authors",
          item: "https://example.com/books/authors",
        },
        {
          position: 3,
          name: "Ann Leckie",
          item: "https://example.com/books/authors/annleckie",
        },
        {
          position: 4,
          name: "Ancillary Justice",
          item: "https://example.com/books/authors/ancillaryjustice",
        },
      ]}
    />
  </>
)

export default JsonLdBreadcrumb
