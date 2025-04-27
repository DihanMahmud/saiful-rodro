

import Link from "next/link"
import Image from "next/image"
import { getCategories, getPostsByCategory } from "@/sanity/lib/client"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { urlFor } from "@/sanity/lib/image"
import { Badge } from "@/components/ui/badge"

export const revalidate = 0

export default async function CategoryPage({ params }) {
  const category = params.category
  
  const [posts, categories] = await Promise.all([getPostsByCategory(category), getCategories()])

  return (
    <div className="w-full bg-white text-[#222] min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center capitalize">Posts in {category}</h1>

      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>
        <div className="flex flex-wrap gap-2">
          <Link href="/blog">
            <Badge variant="secondary" className="hover:bg-secondary/80 px-4 py-2">
              All Posts
            </Badge>
          </Link>
          {categories.map((cat) => (
            <Link key={cat._id} href={`/blog/category/${cat.title.toLowerCase()}`}>
              <Badge
                variant={cat.title.toLowerCase() === category.toLowerCase() ? "default" : "outline"}
                className="hover:bg-secondary/80 px-4 py-2"
              >
                {cat.title}
              </Badge>
            </Link>
          ))}
        </div>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
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
      ) : (
        <div className="text-center text-muted-foreground">
          <p>No posts found in this category.</p>
        </div>
      )}
    </div>
    </div>
  )
}

