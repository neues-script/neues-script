const groq = require('groq')
const client = require('../utils/sanityClient');

module.exports =  async function() {
  const homePage =  await client.fetch(groq`
    *[_type == "homePage"][0]{
      ...,
      'headerImage': {
        'url': headerImage.asset->url,
        'alt': headerImage.alt,
        'caption': headerImage.caption
      },
      'aboutImage': {
        'url': aboutImage.asset->url,
        'alt': aboutImage.alt,
        'caption': aboutImage.caption
      }
    }
  `);
  return homePage;
}