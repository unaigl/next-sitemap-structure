// import Countries from "../../schema/Promos.schema"
import clientPromise from "../../lib/mongodb"

// VALIDATION done

export default async function get(req, res) {
  /* OBSERVACION solo se llama a esta API desde el cliente en las paginas de ccategorias ISR */
  /* El count de las promos se hace directamente en getstaticprops (consulta mongo DB) y tb el get de las primeras 50 promos */
  //_mT
  const _mT = preventInjectionAttack(req.query._mT)
  if (_mT) {
    const isValid = inputValidationMT(_mT)
    if (!isValid) {
      console.log("1,", _mT, isValid)
      returnResNull(res)
    }
  }

  if (!_mT) {
    console.log("2,", _mT)
    returnResNull(res)
  }

  try {
    const client = await clientPromise
    const db = client.db("tikpromosdb")

    const _start = parseInt(preventInjectionAttack(req.query._start))
    const _limit = parseInt(preventInjectionAttack(req.query._limit))
    if (_limit > 6)
      return res.status(400).json({ err: "limit query not valid" })

    const rawPromo = await db
      .collection("promos")
      .find({ mT: { $eq: _mT } }, {})
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

/* HELPERS */
function preventInjectionAttack(_query) {
  if (!_query) return undefined
  const saveQuery = _query
    .replaceAll(/'/g, "")
    .replaceAll(/"/g, "")
    .replaceAll(/`/g, "")
  return saveQuery
}
function inputValidationMT(_mT) {
  // soporta hasta mT99
  const includes = _mT.includes("mT")
  const maxLength = _mT.length < 4
  if (includes && maxLength) {
    return _mT
  }
}

function returnResNull(res) {
  return res.status(300).json({
    promotions: [],
    error: "mT query not valid",
  })
}
