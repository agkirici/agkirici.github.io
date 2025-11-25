import imageUrlBuilder from '@sanity/image-url';
import { getClient } from './client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export function urlFor(source: SanityImageSource) {
  const client = getClient();
  const builder = imageUrlBuilder(client);
  return builder.image(source);
}

