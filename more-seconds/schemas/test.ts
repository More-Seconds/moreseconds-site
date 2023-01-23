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
      name: 'heroImage',
      type: 'image',
      // hidden: ({ parent }) => parent?.sectionType !== "hero-image"
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
                  {title: "Project Summary Section", value: "project-summary"},
                  {title: "Centered Text", value: "centered-text"},
                  {title: "Image Section", value: "image-section"},
                  {title: "Full-Width Image", value: "full-width-image"},
                ],
              }
            },

           

            {
              name: 'fullWidthImage',
              type: 'image',
              hidden: ({ parent }) => parent?.sectionType !== "full-width-image"
            },

            {
              name: 'imageSection',
              type: 'array',
              of: [
                {
                  type: 'image',
                }
              ],

              hidden: ({ parent }) => parent?.sectionType !== "image-section"
            },

            {
              name: 'centeredText',
              type: 'string',
              hidden: ({ parent }) => parent?.sectionType !== "centered-text"
            },

            {
              name: 'projectSummaryHeading',
              type: 'string',
              hidden: ({ parent }) => parent?.sectionType !== "project-summary"
            },
            {
              name: 'projectSummaryDescription',
              type: 'string',
              hidden: ({ parent }) => parent?.sectionType !== "project-summary"
            },

            {
              name: 'projectYear',
              type: 'number',
              hidden: ({ parent }) => parent?.sectionType !== "project-summary"
            },

            {
              name: 'projectIndustry',
              type: 'string',
              hidden: ({ parent }) => parent?.sectionType !== "project-summary"
            },


            {
              name: 'image',
              type: 'image',
              hidden: ({ parent }) => parent?.sectionType !== "project-summary"
            },
            

            
          ]
        },

      ]
    },

    
    
    
  ]
}