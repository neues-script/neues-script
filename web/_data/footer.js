const groq = require('groq')
const client = require('../utils/sanityClient');

module.exports =  async function() {
  const footer =  await client.fetch(groq`
    *[_type == "footer"][0]
  `);
  return footer;
}