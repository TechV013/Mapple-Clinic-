import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/data/blog-posts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="container py-16 animate-fade-in max-w-3xl mx-auto">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-foreground">
            {post.category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
        <span>By {post.author}</span>
        <span>&middot;</span>
        <span>{post.date}</span>
        <span>&middot;</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 leading-tight">
        {post.title}
      </h1>

      <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed whitespace-pre-line">
        {post.content}
      </div>

      <div className="border-t mt-12 pt-8 text-center">
        <p className="text-muted-foreground mb-4">
          This article is for informational purposes only and is not a
          substitute for professional medical advice.
        </p>
        <Link href="/contact">
          <Button className="rounded-full">
            Schedule an Appointment
          </Button>
        </Link>
      </div>
    </article>
  );
}
