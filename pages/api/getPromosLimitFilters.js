// import Countries from "../../schema/Promos.schema"
import clientPromise from "../../lib/mongodb"

export default async function get(req, res) {
  try {
    const client = await clientPromise
    const db = client.db("tikpromosdb")

    console.log("(req.query", req.query)

    // input VALIDATION
    const _start = parseInt(preventInjectionAttack(req.query._start))
    const _limit = parseInt(preventInjectionAttack(req.query._limit))

    if (_limit > 51)
      return res.status(300).json({
        promotions: [],
        numberOfPromos: 0,
        err: "limit query not valid",
      })

    //_text
    const _text = preventInjectionAttack(req.query._text)
    // if (_text) {}

    //_disG
    const _disG = preventInjectionAttack(req.query._disG)
    if (_disG) {
      const isValid = inputValidationDisG(_disG)
      if (!isValid) {
        // console.log("error en validacion numero: 1")
        return res.status(300).json({
          promotions: [],
          numberOfPromos: 0,
          err: "disG query not valid",
        })
      }
    }

    // _prG
    const _prG = preventInjectionAttack(req.query._prG)
    if (_prG) {
      const isValid = inputValidationPrG(_prG)
      if (!isValid) {
        // console.log("error en validacion numero: 2")
        return res.status(300).json({
          promotions: [],
          numberOfPromos: 0,
          err: "prG query not valid",
        })
      }
    }

    //_disC
    const _preDisC = preventInjectionAttack(req.query._disC)
    const _disC = getDisCFromQuery(_preDisC)
    if (_disC) {
      const isValid = inputValidationDisC(_disC)
      if (!isValid) {
        // console.log("error en validacion numero: 3")
        return res.status(300).json({
          promotions: [],
          numberOfPromos: 0,
          err: "disC query not valid",
        })
      }
    }

    //_mT
    const _mT = preventInjectionAttack(req.query._mT)
    if (_mT) {
      const isValid = inputValidationMT(_mT)
      if (!isValid) {
        // console.log("error en validacion numero: 4")
        return res.status(300).json({
          promotions: [],
          numberOfPromos: 0,
          err: "mT query not valid",
        })
      }
    }

    /* QUERY */
    // objeto de queries que usaremos para filtrat en "find()" en mongo (SIN _ ya que en mongo las props no tienen _ )
    const queryObj = {}
    if (_text) queryObj.des = { $regex: _text, $options: "i" }
    if (_disG) queryObj.disG = { $eq: Number(_disG) }
    if (_prG) queryObj.prG = { $eq: Number(_prG) }
    if (_mT) queryObj.mT = { $eq: _mT }
    // el discount Code es mas complejo de sacar. Si no esta definidom, la query lo devuelve como 'undefined'
    if (_disC === true) queryObj.disC = { $exists: true }
    if (_disC === false) queryObj.disC = { $exists: false }

    const rawPromo = await db
      .collection("promos")
      /* @DEV si da error, agregar el operator $and, pero en principio no hace falta */
      .find(queryObj) // { ent: { $eq: _enterp }, ty: {$eq: _ty}, ... }, {}
      .skip(_start)
      .limit(_limit)
      .toArray()

    const promotions = JSON.parse(JSON.stringify(rawPromo))

    // Get the number of objects in the collection // Solo en SSR // NO en fetch (client-side) (no se extraer por lo que podemos devolver 0)
    let countPromos = 0
    if (!req.query._avoid) {
      const collection = await db.collection("promos")
      countPromos = await collection.countDocuments(queryObj)
    }

    const numberOfPromos = JSON.parse(JSON.stringify(countPromos))

    return res
      .status(200)
      .json({ promotions, numberOfPromos: numberOfPromos, error: "" })
  } catch (error) {
    console.log("Not able to fetch data", error)
    return res.status(300).json({
      promotions: [],
      numberOfPromos: 0,
      error: "En Mantenimiento.",
    })
  }
}
/* HELPERS */
function getDisCFromQuery(_disC) {
  if (_disC === "Si") return true
  else return false
}

/* INPUT VALIDATION */
function inputValidationDisG(_disG) {
  if (_disG === "0" || _disG === "1" || _disG === "2" || _disG === "3") {
    return _disG
  }
}
function inputValidationPrG(_prG) {
  if (_prG === "0" || _prG === "1" || _prG === "2" || _prG === "3") {
    return _prG
  }
}
function inputValidationDisC(_disC) {
  if (_disC === "Si" || _disC === "No") {
    return _disC
  }
}

function inputValidationMT(_mT) {
  // soporta hasta _mT99
  const includes = _mT.includes("mT")
  const maxLength = _mT.length < 4
  if (includes && maxLength) {
    return _mT
  }
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
