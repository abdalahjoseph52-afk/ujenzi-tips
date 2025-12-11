import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '2e51pi9t', // <--- I added your ID here automatically
  dataset: 'production',
  useCdn: true, // This makes loading faster
  apiVersion: '2023-05-03', 
});

// Helper function to load images easily
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}