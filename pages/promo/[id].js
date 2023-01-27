import Link from "next/link"
import React from "react"
import clientPromise from "../../lib/mongodb"

/* @DEV De momento SSG, pero hay que cubrir un caso -> Cuando una promo termina y otra lo reemplaza con el mismo id*/
//todo cubrir, no dando el mismo id nunca a una promo? o eliminando la ruta cuando la promo se elimine? oi haciendolo ISR cada 2 dias?
/* NO Fetch en client-side - NO API */

const Id = ({ promo }) => {
  return (
    <div>
      <Link href={`/`}>BACK</Link>
      <div
        style={{
          border: "2px solid red",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        {promo[0].id}
      </div>
      <div
        style={{
          border: "2px solid red",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        {promo[0].ent}
      </div>
      <div
        style={{
          border: "2px solid red",
          margin: "2rem",
          padding: "2rem",
        }}
      >
        {promo[0].pr}
      </div>
    </div>
  )
}

export default Id

export async function getStaticProps({ params }) {
  if (!params.id) return { props: { msg: "wrong" } }
  const id = parseInt(params.id)
  //todo fetch mas imagenes y mas datos, descripcion detallada?
  try {
    const client = await clientPromise
    const db = client.db("tikpromosdb")

    // Get the number of objects in the collection
    const collection = await db.collection("promos")
    const rawPromo = await collection
      .find({ id: { $eq: id } }, { id: 1, ent: 1, pr: 1 })
      .toArray()

    const promo = JSON.parse(JSON.stringify(rawPromo))

    return {
      props: {
        promo,
      },
      // revalidate: 3600,
    }
  } catch (e) {
    console.error(e)
  }
}

export async function getStaticPaths() {
  try {
    const client = await clientPromise
    const db = client.db("tikpromosdb")

    // Get the number of objects in the collection
    const collection = await db.collection("promos")
    const promo = await collection.find({}, { id: 1, _id: 0 }).toArray()

    const paths = promo.map((p) => ({
      params: {
        id: `${p.id}`,
      },
    }))

    return {
      paths,
      fallback: false, // error al poner TRUE // false y 'blocking' funcionan
    }
  } catch (e) {
    console.error(e)
  }
}
