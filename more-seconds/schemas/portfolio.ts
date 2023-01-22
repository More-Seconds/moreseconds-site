// import { withProps } from 'recompose'
// import PortableText from '@sanity/portable-text-editor'

// const CustomTextInput = withProps({
//     focusPath: [],
//     level: 0,
//     type: 'block'
//   })(PortableText)


// schemas/pet.js
export default {
  name: 'Portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string'
    },
    {
      name: 'body',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              type: 'string'
            },
            {
              name: 'text',
              type: 'blockContent'
            }
          ]
        }
      ]
    },

    
    
    
  ]
}