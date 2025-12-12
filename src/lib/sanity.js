import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: '2e51pi9t', 
  dataset: 'production',
  useCdn: false, // <--- NIMEBADILISHA HAPA: False inaleta data mpya haraka zaidi
  apiVersion: '2023-05-03', 
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}