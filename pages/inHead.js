import React from "react"
import { NextSeo } from "next-seo"

import ProductSeo from "../seo/productSeo"
import Head from "next/head"
import Link from "next/link"

import JsonLdFAQPage from "../official/JsonLdFAQPage"
import JsonLdCorporateContact from "../official/JsonLdCorporateContact"

const InHead = () => {
  return (
    <div>
      <Head>
        <title> Next InHead innnnn</title>
      </Head>

      <JsonLdFAQPage />
      <JsonLdCorporateContact />

      <div>InHead</div>
      <div>
        <h1>
          <Link href="/">back</Link>
        </h1>
      </div>
    </div>
  )
}

export default InHead
