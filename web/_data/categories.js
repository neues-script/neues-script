const groq = require('groq')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')

const hasToken = !!client.config().token

function generateCat (cat) {
  return {
    ...cat,
  }
}

async function getCategories () {
  const filter = groq`*[_type == "category"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const categories = docs.map(generateCat)
  const reducedCategories = overlayDrafts(hasToken, categories)
  return reducedCategories
}

module.exports = getCategories
