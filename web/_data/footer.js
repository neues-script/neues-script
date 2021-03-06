const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')

function generateBody (post) {
  return {
    ...post,
    contact: BlocksToMarkdown(post.contact, { serializers, ...client.config() }),
    privacy: BlocksToMarkdown(post.privacy, { serializers, ...client.config() })
  }
}

async function getPosts () {
  const about = await client.fetch(groq`*[_type == "footer"][0]`)
  return generateBody(about)
}

module.exports = getPosts
