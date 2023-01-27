import React from "react"
import { NextSeo } from "next-seo"

import ProductSeo from "../seo/productSeo"
import Head from "next/head"
import Link from "next/link"

const OutHead = () => {
  return (
    <div>
      <Head>
        <title>oooooooooooouut</title>
      </Head>
      <ProductSeo />
      <div>OutHead</div>
      <div>
        <h1>
          <Link href="/">back</Link>
        </h1>
      </div>
    </div>
  )
}

export default OutHead
