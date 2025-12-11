// Import Helper
import blockContent from './blockContent'

// Import Your Custom Ujenzi Types
import marketPrice from './marketPrice'
import housePlan from './housePlan'
import teamMember from './teamMember'
import service from './service'
import testimonial from './testimonial'
import professional from './professional'
import faq from './faq'
import videoPost from './videoPost'
import article from './article' // <--- 1. Import this

export const schemaTypes = [
  // Defaults
  blockContent,

  // Ujenzi Custom
  marketPrice,
  housePlan,
  teamMember,
  service,
  testimonial,
  professional,
  faq,
  videoPost,
  article, // <--- 2. Add this
]