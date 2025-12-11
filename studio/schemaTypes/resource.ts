import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resources (Downloads)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Resource Title',
      type: 'string',
      description: 'e.g. Fundi Contract Standard',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Upload File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.xls,.xlsx', // Only allows documents
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Legal & Contracts', value: 'Legal' },
          { title: 'Site Management', value: 'Site Management' },
          { title: 'Planning & Guides', value: 'Planning' },
          { title: 'Quality Control', value: 'Quality Control' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Explain why the user needs this file.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
    },
  },
})