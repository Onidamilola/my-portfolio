import BlurFade from "@/components/magicui/blur-fade";
import { Badge } from "@/components/ui/badge";
import { getBlogPosts } from "@/data/blog";
import {
  NEWS_TOPICS,
  getDevArticles,
  getHackerNewsTop,
  toTopic,
} from "@/data/news";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "My posts, plus live tech news on web development, AI, machine learning and cloud.",
};

const BLUR_FADE_DELAY = 0.04;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { topic?: string | string[] };
}) {
  const topic = toTopic(searchParams.topic);
  const [posts, articles, stories] = await Promise.all([
    getBlogPosts(),
    getDevArticles(topic),
    getHackerNewsTop(),
  ]);
  const topicLabel = NEWS_TOPICS.find((t) => t.slug === topic)?.label;

  return (
    <section className="space-y-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl tracking-tighter">Blog &amp; tech news</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          What I&apos;m reading on web development, AI, machine learning and
          cloud, updated hourly from DEV Community and Hacker News.
        </p>
      </BlurFade>

      {posts.length > 0 && (
        <div>
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <h2 className="text-xl font-bold mb-4">My posts</h2>
          </BlurFade>
          {posts
            .sort(
              (a, b) =>
                new Date(b.metadata.publishedAt).getTime() -
                new Date(a.metadata.publishedAt).getTime()
            )
            .map((post, id) => (
              <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={post.slug}>
                <Link
                  className="flex flex-col space-y-1 mb-4"
                  href={`/blog/${post.slug}`}
                >
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </Link>
              </BlurFade>
            ))}
        </div>
      )}

      <div>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <h2 className="text-xl font-bold">Top articles this week</h2>
          <nav aria-label="News topics" className="mt-3 flex flex-wrap gap-1.5">
            {NEWS_TOPICS.map((t) => (
              <Link
                key={t.slug}
                href={t.slug === "webdev" ? "/blog" : `/blog?topic=${t.slug}`}
                scroll={false}
                aria-current={t.slug === topic ? "page" : undefined}
              >
                <Badge
                  variant={t.slug === topic ? "default" : "secondary"}
                  className="px-2.5 py-1 text-xs"
                >
                  {t.label}
                </Badge>
              </Link>
            ))}
          </nav>
        </BlurFade>

        {articles.length === 0 ? (
          <p className="mt-6 text-sm text-muted-foreground">
            Couldn&apos;t load {topicLabel} articles right now. Please try again
            later.
          </p>
        ) : (
          <ul className="mt-6 space-y-3">
            {articles.map((a, id) => (
              <BlurFade key={a.id} delay={BLUR_FADE_DELAY * 5 + id * 0.03}>
                <li>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex gap-4 rounded-lg border p-3 transition-colors hover:bg-secondary/60"
                  >
                    {a.coverImage && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={a.coverImage}
                        alt=""
                        loading="lazy"
                        className="hidden sm:block h-20 w-36 shrink-0 rounded-md object-cover"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="font-medium leading-snug tracking-tight group-hover:underline">
                        {a.title}
                      </p>
                      <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
                        {a.description}
                      </p>
                      <p className="mt-2 text-[11px] text-muted-foreground">
                        {a.author} · {formatDate(a.publishedAt)} · {a.readingMinutes} min
                        read · ❤ {a.reactions}
                      </p>
                    </div>
                  </a>
                </li>
              </BlurFade>
            ))}
          </ul>
        )}
      </div>

      <div>
        <BlurFade delay={BLUR_FADE_DELAY * 6}>
          <h2 className="text-xl font-bold">Trending on Hacker News</h2>
        </BlurFade>
        {stories.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            Couldn&apos;t load Hacker News right now. Please try again later.
          </p>
        ) : (
          <ol className="mt-4 space-y-3">
            {stories.map((s, id) => (
              <BlurFade key={s.id} delay={BLUR_FADE_DELAY * 7 + id * 0.03}>
                <li className="flex gap-3">
                  <span className="w-5 shrink-0 text-right text-sm tabular-nums text-muted-foreground">
                    {id + 1}.
                  </span>
                  <div className="min-w-0">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn("text-sm leading-snug hover:underline")}
                    >
                      {s.title}
                    </a>
                    <p className="text-[11px] text-muted-foreground">
                      {s.points} points · by {s.by} ·{" "}
                      <a
                        href={`https://news.ycombinator.com/item?id=${s.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {s.comments} comments
                      </a>
                    </p>
                  </div>
                </li>
              </BlurFade>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
