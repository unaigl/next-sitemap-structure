import React from "react"
import { CarouselJsonLd } from "next-seo"

const JsonLdCarousel = () => (
  <>
    <h1>Carousel Default JSON-LD</h1>
    <CarouselJsonLd
      ofType="product with promotion"
      data={[
        {
          courseName: "Course 1",
          description: "Course 1 Description",
          providerName: "Course Provider",
          keywords: "cake for a party, coffee",
          category: "Dessert",
          url: "http://example.com/course-1.html",
        },
        {
          courseName: "Course 2",
          description: "Course 2 Description",
          providerName: "Course Provider",
          keywords: "cake for a party, coffee",
          category: "Dessert",
          url: "http://example.com/course-2.html",
        },
      ]}
    />
  </>
)

export default JsonLdCarousel
