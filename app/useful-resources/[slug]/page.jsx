// app/useful-resources/[slug]/page.jsx
import { notFound } from "next/navigation";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default function PostPage({ params }) {
  let post;
  try {
    post = getPostBySlug(params.slug);
  } catch {
    return notFound();
  }

  const html = DOMPurify.sanitize(marked.parse(post.content));

  return (
    <main className="w-full max-w-3xl mx-auto px-5 py-12">
      <article className="prose-basic">
        <h1>{post.meta.title}</h1>
        {post.meta.date && (
          <p className="text-sm text-neutral-500">
            {new Date(post.meta.date).toLocaleDateString()}
          </p>
        )}
        {post.meta.author && (
          <p className="text-sm text-neutral-500">By {post.meta.author}</p>
        )}
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
