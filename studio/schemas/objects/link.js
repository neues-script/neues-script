export default {
  name: 'externalLink',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'linkName',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'linkName'
    }
  }
}
