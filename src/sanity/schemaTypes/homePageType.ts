import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: HomeIcon,
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Location Name',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'emoji',
          title: 'Location Emoji',
          type: 'string',
          description: 'Pick an emoji to represent the location',
        }),
      ],
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'twitterLink',
      title: 'Twitter Link',
      type: 'url',
      validation: (rule) => rule.uri({
        scheme: ['http', 'https']
      }),
    }),
    defineField({
      name: 'aboutMeImage',
      title: 'About Me Image',
      type: 'image',
    }),
    defineField({
      name: 'aboutMeTitle',
      title: 'About Me Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutMeBody',
      title: 'About Me Body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'homePageBody',
      title: 'Home Page Body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'blogLinkText',
      title: 'Blog Link Text',
      type: 'string',
      description: 'Label for the blog link at the bottom of the page',
      initialValue: 'View blog posts',
    }),
  ],
})
