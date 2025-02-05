import { getPosts } from "@/sanity/lib/client";

export const revalidate = 0

export default async function sitemap() {
    const baseUrl = 'https://dev-saiful.me';

    const response = await getPosts();    

    const blogPosts = response?.map((post) => {
        return{
            url: `${baseUrl}/blog/${post.slug.current}`,
            lastModified: post?.publishedAt,
            priority: 0.64
        }
    })     

  return [
    {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'never',
        priority: 1,
    },
    {
        url: `${baseUrl}/blog`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.80,
    },
    ...blogPosts
  ]
}