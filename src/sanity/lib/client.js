import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})



export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt,
      author->,
      categories[]->
    }
  `);
}

export async function getPost(slug) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      body,
      publishedAt,
      author->,
      categories[]->
    }
  `, { slug });
}

export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] {
      _id,
      title,
      slug,
      description
    }
  `);
}

export async function getPostsByCategory(category) {
  return client.fetch(`
    *[_type == "post" && $category in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt,
      author->,
      categories[]->
    }
  `, { category });
}