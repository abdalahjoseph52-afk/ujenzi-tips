import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'videoPost',
  title: 'Site Videos (Twende)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
    }),
    defineField({
      name: 'youtubeId',
      title: 'YouTube Video ID',
      type: 'string',
      description: 'The code at the end of the YouTube link (e.g. npnSan2ckYY)',
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'location',
      title: 'Site Location',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'e.g. Site Inspection, Technology',
    }),
  ],
})