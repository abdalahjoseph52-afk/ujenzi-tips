import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'professional',
  title: 'Verified Pros',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Job Title',
      type: 'string',
      description: 'e.g. Lead Site Engineer',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Architect', value: 'arch' },
          { title: 'Engineer', value: 'eng' },
          { title: 'Technician/Fundi', value: 'tech' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      description: 'Format: 2557XXXXXXXX',
    }),
    defineField({
      name: 'verified',
      title: 'Is Verified?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
  ],
})