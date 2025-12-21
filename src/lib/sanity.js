import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url'; // <--- BADILISHA HAPA

export const client = createClient({
  projectId: '2e51pi9t',
  dataset: 'production',
  useCdn: false, 
  apiVersion: '2023-05-03', 
});

// Tumia 'createImageUrlBuilder' badala ya ile ya zamani
const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}