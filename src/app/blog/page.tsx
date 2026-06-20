import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Stay informed with the latest health tips, wellness advice, and updates from our healthcare team.",
};

export default function BlogPage() {
  return (
    <div className="container py-16 animate-fade-in">
      <section className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
          Our Blog
        </div>
        <h1 className="font-heading text-5xl font-bold mb-4">
          Health Tips & Insights
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Expert advice, wellness tips, and updates from our healthcare team to
          help you live your healthiest life.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-all h-full">
              <div className="relative h-56">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground">
                    {post.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span>{post.date}</span>
                  <span>&middot;</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
