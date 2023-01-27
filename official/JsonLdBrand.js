import React from "react"
import { BrandJsonLd } from "next-seo"

const JsonLdBrand = () => (
  <>
    <h1>Brand JSON-LD</h1>
    <BrandJsonLd
      slogan="What does the fox say?"
      id="https://www.purpule-fox.io/#corporation"
      logo="https://www.example.com/photos/logo.jpg"
      aggregateRating={{
        ratingValue: "5",
        ratingCount: "18",
      }}
    />
  </>
)

export default JsonLdBrand
