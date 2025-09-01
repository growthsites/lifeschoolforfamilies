// app/blog/page.jsx
import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="w-full max-w-5xl mx-auto px-5 py-12">
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Blog</h1>
      <p className="text-neutral-600 mt-2">Latest articles and updates.</p>

      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ slug, meta }) => (
          <article
            key={slug}
            className="bg-white border border-neutral-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {meta.coverImage && (
              <div className="relative w-full h-44">
                <Image
                  src={meta.coverImage}
                  alt={meta.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-2">{meta.title}</h2>
              {meta.date && (
                <p className="text-xs text-neutral-500 mt-1">
                  {new Date(meta.date).toLocaleDateString()}
                </p>
              )}
              {meta.excerpt && (
                <p className="text-sm text-neutral-600 mt-3 line-clamp-3">
                  {meta.excerpt}
                </p>
              )}
              <Link
                href={`/blog/${slug}`}
                className="inline-block mt-4 text-blue-600 underline underline-offset-4"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
