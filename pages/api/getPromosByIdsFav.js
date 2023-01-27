// import Countries from "../../schema/Promos.schema"
import clientPromise from "../../lib/mongodb"

export default async function get(req, res) {
  try {
    const client = await clientPromise
    const db = client.db("tikpromosdb")

    // input VALIDATION
    const _start = parseInt(preventInjectionAttack(req.query._start))
    const _limit = parseInt(preventInjectionAttack(req.query._limit))

    if (_limit > 51)
      return res
        .status(300)
        .json({ promotions: [], countPromos: "", err: "limit query not valid" })

    //ids
    const _idsStr = preventInjectionAttack(req.query._ids)

    const idsArrNum = inputValidationIds(_idsStr) // Number[]

    if (!idsArrNum.length)
      return res.status(300).json({
        promotions: [],
        countPromos: "",
        err: "No hay ninguna promocion guardada en favoritos",
      })

    const rawPromo = await db
      .collection("promos")
      /* @DEV si da error, agregar el operator $and, pero en principio no hace falta */
      .find({ id: { $in: idsArrNum } }) // Number[] // [31041, 90042]
      .skip(_start)
      .limit(_limit)
      .toArray()

    const promotions = JSON.parse(JSON.stringify(rawPromo))

    // Get the number of objects in the collection
    // solo para la 1era consulta
    let countPromos = 0
    if (!req.query._avoid) {
      const rawCountPromos = await db
        .collection("promos")
        .countDocuments({ id: { $in: idsArrNum } }) // [31041, 90042]

      countPromos = JSON.parse(JSON.stringify(rawCountPromos))
    }

    return res.json({ promotions, countPromos, error: "" })
  } catch (error) {
    console.log("Not able to fetch data", error)
    return res
      .status(300)
      .json({ promotions: [], countPromos: 0, error: error })
  }
}

// HELPER
/* INPUT VALIDATION */
function inputValidationIds(_ids) {
  if (!_ids) return null
  const idsArr = _ids.split("-")

  //WARNING en caso de que no se borren las promos de localstorage, borrar este condicional
  // maximo de 500 promos en favoritos
  const passMaxLength = idsArr.length > 500
  if (passMaxLength) return null

  // Como maximo 7 caracteres (cifras)
  const passcaracterMaxLength = idsArr.every((idStr) => idStr.length < 7)
  if (!passcaracterMaxLength) return null

  // Convertimos a numeros
  // const idsArrNumbers = idsArr.map((id) => Number(id))
  const idsArrNumbers = []
  idsArr.forEach((id) => idsArrNumbers.push(parseInt(id)))

  // si no son todos numeros, devolvemos false y no consultamos la base de datos
  const areNumber = idsArrNumbers.every((id) => !isNaN(Number(id)))
  if (!areNumber) return null

  // si han pasado los 2 filtros, devolvemos array de los ides (numbers) para consulta en mongo db
  return idsArrNumbers
}

// OBSERVATION prevent Injection Attack By Removing Quotes
function preventInjectionAttack(_query) {
  if (!_query) return undefined
  const saveQuery = _query
    .replaceAll(/'/g, "")
    .replaceAll(/"/g, "")
    .replaceAll(/`/g, "")
    .replaceAll(/^/g, "")
  return saveQuery
}
