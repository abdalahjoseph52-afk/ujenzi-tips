import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'marketPrice',
  title: 'Market Prices (Ticker)',
  type: 'document',
  fields: [
    defineField({
      name: 'materialName',
      title: 'Material Name',
      type: 'string',
      description: 'e.g. Cement (42.5N)',
    }),
    defineField({
      name: 'price',
      title: 'Current Price',
      type: 'string',
      description: 'e.g. 17,500/=',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'materialName',
      subtitle: 'price',
    },
  },
})