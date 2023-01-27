// import Countries from "../../schema/Promos.schema"
import clientPromise from "../../lib/mongodb"

// Solo promos, NO count. Ya que el count se coge en getStaticProps consultando directamente a mongoDB

export default async function get(req, res) {
  /* OBSERVACION solo se llama a esta API desde el cliente en las paginas de ccategorias ISR */
  /* El count de las promos se hace directamente en getstaticprops (consulta mongo DB) y tb el get de las primeras 50 promos */

  try {
    const client = await clientPromise
    const db = client.db("tikpromosdb")

    const _start = parseInt(preventInjectionAttack(req.query._start))
    const _limit = parseInt(preventInjectionAttack(req.query._limit))
    if (_limit > 51)
      return res.status(400).json({ err: "limit query not valid" })

    const rawPromo = await db
      .collection("promos")
      .find({ pty: { $eq: 4 } })
      .skip(_start)
      .limit(_limit)
      .toArray()

    const promotions = JSON.parse(JSON.stringify(rawPromo))
    if (!promotions.length) return res.status(302).json("Does not exist")

    return res.json({ promotions, error: "" })
  } catch (error) {
    console.log("err api", error)
    return res.status(300).json({ promotions: [], error: "En Mantenimiento" })
  }
}

function preventInjectionAttack(_query) {
  if (!_query) return undefined
  const saveQuery = _query
    .replaceAll(/'/g, "")
    .replaceAll(/"/g, "")
    .replaceAll(/`/g, "")
  return saveQuery
}
