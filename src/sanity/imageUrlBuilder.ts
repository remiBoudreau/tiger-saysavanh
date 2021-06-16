import sanityClient from './client'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: object) {
  return builder.image(source)
}