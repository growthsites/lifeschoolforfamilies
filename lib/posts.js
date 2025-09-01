// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      meta: {
        title: data.title ?? slug,
        date: data.date ?? null,
        excerpt: data.excerpt ?? "",
        coverImage: data.coverImage ?? "",
        author: data.author ?? "",
      },
      content,
    };
  });

  // sort newest first if date exists
  return posts.sort((a, b) => {
    const ad = a.meta.date ? new Date(a.meta.date).getTime() : 0;
    const bd = b.meta.date ? new Date(b.meta.date).getTime() : 0;
    return bd - ad;
  });
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) throw new Error("Not found");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    meta: {
      title: data.title ?? slug,
      date: data.date ?? null,
      excerpt: data.excerpt ?? "",
      coverImage: data.coverImage ?? "",
      author: data.author ?? "",
    },
    content,
  };
}
