import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'generalCategories',
  title: 'General Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})
