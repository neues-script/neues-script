const groq = require('groq')
const client = require('../utils/sanityClient');

module.exports =  async function() {
  const page =  await client.fetch(groq`
    *[_type == "journalPage"][0]
  `);
  return page;
}