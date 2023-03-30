import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams(): { postId: string; }[] {
  const posts = getSortedPostsData(); //deduped!

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }): { title: string; } {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData(); //deduped!
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) {
    return notFound();
  }

  const pubDate = getFormattedDate("");

  return (
    <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
      <h1 className="text-3xl mt-4 mb-0">{}</h1>
      <p className="mt-0">{}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: "" }} />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
