export default {
  name: 'featuredPortfolioContent',
  title: 'Featured Portfolio Content',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'reference', to: {type: 'portfolio'}}],
    }
    
  ]

}