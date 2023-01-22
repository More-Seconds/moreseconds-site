// import { withProps } from 'recompose'
// import PortableText from '@sanity/portable-text-editor'

// const CustomTextInput = withProps({
//     focusPath: [],
//     level: 0,
//     type: 'block'
//   })(PortableText)


// schemas/pet.js
export default {
  name: 'test',
  title: 'Test',
  type: 'document',

  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'nameOfSection',
              title: 'Name of section',
              type: 'string'
            },

            {
              name: 'sectionType',
              title: 'Section Type',
              type: 'string',
              options: {
                list: [
                  {title: "Side By Side Section", value: "side-by-side"},
                  {title: "Rich Text", value: "rich-text"},
                ],
              }
            },

            {
              name: 'body',
              type: 'blockContent',
              hidden: ({ parent }) => parent?.sectionType !== "rich-text"
            },

            {
              name: 'text',
              type: 'string',
              hidden: ({ parent }) => parent?.sectionType !== "side-by-side"
            },

            {
              name: 'image',
              type: 'image',
              hidden: ({ parent }) => parent?.sectionType !== "side-by-side"
            },

            
          ]
        },

      ]
    },

    
    
    
  ]
}