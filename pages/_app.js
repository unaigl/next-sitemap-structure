// import "../styles/globals.css"

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import "../styles/globals.css"

import AppSeo from "../official/AppSeo"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppSeo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
