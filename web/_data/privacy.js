const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')

function generateBody (post) {
  return {
    ...post,
    body: BlocksToMarkdown(post.body, { serializers, ...client.config() })
  }
}

async function getPosts () {
  const about = await client.fetch(groq`*[_type == "privacy"][0]`)
  return generateBody(about)
}

module.exports = getPosts
