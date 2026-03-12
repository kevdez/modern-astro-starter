import {defineField, defineType} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const blogPageType = defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'blogTitle',
      title: 'Blog Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
