const addLinks = (searchPhrase, hyperlink) => {
  const document = DocumentApp.getActiveDocument()
  const body = document.getBody()
  let search = null
  let count = 0
  while (count < 1 && (search = body.findText(searchPhrase, search))) {
    const searchElement = search.getElement()
    const startIndex = search.getStartOffset()
    const endIndex = search.getEndOffsetInclusive()
    searchElement.asText().setLinkUrl(startIndex, endIndex, hyperlink)
    count++
  }
  document.saveAndClose()
}

addLinks("Kiton", "https://2men.it/collections/kiton/")
