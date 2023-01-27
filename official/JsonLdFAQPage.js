import { FAQPageJsonLd } from "next-seo"

const JsonLdFAQPage = () => (
  <>
    <h1>FAQ Page JSON-LD</h1>
    <FAQPageJsonLd
      mainEntity={[
        {
          questionName: "How long is the delivery time?",
          acceptedAnswerText: "3-5 business days.",
        },
        {
          questionName: "Where can I find information about product recalls?",
          acceptedAnswerText: "Read more on under information.",
        },
      ]}
    />
  </>
)

export default JsonLdFAQPage
