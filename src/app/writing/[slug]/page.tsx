import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingArticlePage } from "@/components/writing-article-page";
import { WRITING_POSTS, getWritingPost } from "@/data/writing";
import { getWritingDocument } from "@/lib/writing";

type WritingArticleRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return WRITING_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: WritingArticleRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    return {
      title: "Writing | Sara Keyser",
    };
  }

  return {
    title: `${post.title} | Sara Keyser`,
    description: post.description,
  };
}

export default async function WritingArticleRoute({
  params,
}: WritingArticleRouteProps) {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    notFound();
  }

  const document = await getWritingDocument(slug);

  return (
    <WritingArticlePage
      slug={slug}
      title={document.title || post.title}
      description={post.description}
      topics={post.topics}
      readTime={post.readTime}
      blocks={document.blocks}
      tone="dark"
    />
  );
}
