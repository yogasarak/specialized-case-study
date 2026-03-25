export type WritingPost = {
  slug: string;
  title: string;
  description: string;
  topics: readonly string[];
  readTime: string;
};

export const WRITING_POSTS: readonly WritingPost[] = [
  {
    slug: "the-value-of-next-ssr",
    title: "The Value of Next.js SSR",
    description:
      "When SSR is worth the tradeoff, where it helps most, and how it fits into production decisions in Next.js.",
    topics: ["#nextjs", "#ssr", "#performance", "#seo"],
    readTime: "8 min read",
  },
] as const;

export function getWritingPost(slug: string) {
  return WRITING_POSTS.find((entry) => entry.slug === slug);
}
