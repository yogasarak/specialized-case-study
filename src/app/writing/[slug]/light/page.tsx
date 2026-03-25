import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WritingArticlePage } from "@/components/writing-article-page";
import { WRITING_POSTS, getWritingPost } from "@/data/writing";
import { getWritingDocument } from "@/lib/writing";

type WritingArticleLightRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return WRITING_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: WritingArticleLightRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingPost(slug);

  if (!post) {
    return {
      title: "Writing Light | Sara Keyser",
    };
  }

  return {
    title: `${post.title} | Sara Keyser Light`,
    description: post.description,
  };
}

export default async function WritingArticleLightRoute({
  params,
}: WritingArticleLightRouteProps) {
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
      tone="light"
    />
  );
}
