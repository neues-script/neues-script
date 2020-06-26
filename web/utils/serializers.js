const imageUrl = require('./imageUrl')

// Learn more on https://www.sanity.io/docs/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({node}) => `[${node.name}](/authors/${node.slug.current})`,
    code: ({node}) =>
      '```' + node.language + '\n' + node.code + '\n```',
    mainImage: ({node}) => {
      if(node.caption) {
        return `<div>
          <img src="${imageUrl(node).url()}" alt="${node.alt}" />
          <figcaption>${node.caption}</figcaption>
        </div>`
      }
      return `![${node.alt}](${imageUrl(node).url()})`;
    },
    file: ({node}) => '',
    video: ({node}) => `<iframe width="100%" height="400px" src="${node.href}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  }
}
