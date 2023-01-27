import React from "react"
import { NextSeo } from "next-seo"
import Head from "next/head"

import ProductSeo from "../seo/productSeo"
import Link from "next/link"
const Product = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <ProductSeo />
      <div>FILTROS</div>

      <div>
        <h1>
          <Link href="/">back</Link>
        </h1>
      </div>
    </div>
  )
}

export default Product
