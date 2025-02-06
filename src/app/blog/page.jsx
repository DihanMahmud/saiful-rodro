


import Link from "next/link"
import Image from "next/image"
import { getCategories, getPosts } from "@/sanity/lib/client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { Badge } from "@/components/ui/badge"

export const revalidate = 0;

export const metadata = {
  title: "Saiful's Blog",
  description: "Here you can find all the blogs I write. Keep Learning.",
    // Open Graph / Facebook
openGraph: {
  url: "https://oebic.com/blog",
  type: "website",
  title: "Blogs | Oebic | Web Design Agency for Kitchen Remodeling Businesses",
  description:
    "Discover SEO tips, web design trends, and digital marketing strategies for kitchen remodeling services & interior design businesses. Oebic's blog helps you stay ahead in the industry.",
  images: [
    {
      url: "https://res.cloudinary.com/dcsmozstd/image/upload/v1733416765/blogOG_ps5zwn.png",
      width: 500,
      height: 500,
      alt: "Oebic - Web Design Agency",
    },
  ],
},

// Twitter
twitter: {
  card: "summary_large_image",
  site: "@oebic_inc", // Replace with your Twitter handle
  creator: "@oebic_inc", // Replace with the content creator's Twitter handle
  title: "Blogs | Oebic | Web Design Agency for Kitchen Remodeling Businesses",
  description:
    "Discover SEO tips, web design trends, and digital marketing strategies for kitchen remodeling services & interior design businesses. Oebic's blog helps you stay ahead in the industry.",
  images: [
    {
      url: "https://res.cloudinary.com/dcsmozstd/image/upload/v1733416765/blogOG_ps5zwn.png",
      alt: "Oebic - Web Design Agency",
    },
  ],
},
};
 

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()])

  

  const featuredPost = posts[0] // Assuming the first post is the featured one
  const regularPosts = posts.slice(1)

  return (
    <div className="w-full min-h-screen bg-white text-[#222]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center"> <Link href="https://dev-saiful.me" className=" underline">Saiful's</Link> Blog</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/blog">
            <Badge variant="secondary" className="hover:bg-secondary/80 px-4 py-2">
              All Posts
            </Badge>
          </Link>
          {categories.map((category) => (
            <Link key={category._id} href={`/blog/category/${category.slug.current.toLowerCase()}`}>
              <Badge variant="outline" className="hover:bg-secondary/80 px-4 py-2">
                {category.title}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      <div>
        {
          posts.length === 0 && <div className="h-full w-full flex justify-center items-center">No posts found.</div>
        }
      </div>

      {featuredPost && (
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Featured Post</h2>
          <Card className="overflow-hidden">
            <div className="relative h-[400px] md:h-[500px]">
              <Image
                src={urlFor(featuredPost.mainImage).url() || "/placeholder.svg"}
                alt={featuredPost.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <CardTitle className="text-3xl md:text-4xl mb-2">{featuredPost.title}</CardTitle>
                <p className="text-lg mb-4 line-clamp-2">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={urlFor(featuredPost.author.image).url() || "/placeholder.svg"}
                    alt={featuredPost.author.name}
                    width={48}
                    height={48}
                    className="rounded-full border-2 border-white"
                  />
                  <div>
                    <p className="font-medium">{featuredPost.author.name}</p>
                    <p className="text-sm flex items-center">
                      <CalendarIcon className="mr-1 h-4 w-4" />
                      {new Date(featuredPost.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button asChild variant="secondary">
                  <Link href={`/blog/${featuredPost.slug.current}`}>Read Full Article</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <Card key={post._id} className="flex flex-col">
            <div className="relative w-full pt-[56.25%]">
              <Image
                src={urlFor(post.mainImage).url() || "/placeholder.svg"}
                alt={post.title}
                layout="fill"
                className="object-cover rounded-t-lg"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{post.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>
              <div className="flex items-center space-x-3">
                <Image
                  src={urlFor(post.author.image).url() || "/placeholder.svg"}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{post.author.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/blog/${post.slug.current}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}




