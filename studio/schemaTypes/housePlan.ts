import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'housePlan',
  title: 'House Plans (Ramani)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Plan Name',
      type: 'string',
      description: 'e.g. Kigamboni Modern',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Modern', value: 'modern' },
          { title: 'Budget', value: 'budget' },
          { title: 'Mansion', value: 'mansion' },
        ],
      },
    }),
    defineField({
      name: 'cost',
      title: 'Estimated Construction Cost',
      type: 'string',
      description: 'e.g. 45M - 60M TZS',
    }),
    defineField({
      name: 'rooms',
      title: 'Number of Rooms',
      type: 'string',
      description: 'e.g. 3 Bedrooms',
    }),
    defineField({
      name: 'area',
      title: 'Plot Size / Area',
      type: 'string',
      description: 'e.g. 120 sqm',
    }),
    defineField({
      name: 'image',
      title: 'House Image',
      type: 'image',
      options: { hotspot: true }, // Allows you to crop images
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})