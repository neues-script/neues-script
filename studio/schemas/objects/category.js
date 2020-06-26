export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'This is the category that will be displayed on posts and projects',
      validation: Rule => Rule.required()
    },
    {
      name: 'color',
      type: 'string',
      title: 'Color',
      description: 'This will be used to highlight the category, make sure to go for a color that has a contrast ratio of at least AA (compared to the main font color, #083626).',
      validation: Rule => Rule.required()
    }
  ]
}
