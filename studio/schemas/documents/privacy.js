export default {
  name: 'privacy',
  type: 'document',
  title: 'Privacy',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
      validation: Rule => Rule.required()
    }
  ]
}
