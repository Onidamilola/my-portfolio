// Live tech news from public APIs that need no API key:
// - DEV.to articles API: https://developers.forem.com/api
// - Hacker News Firebase API: https://github.com/HackerNews/API

const REVALIDATE_SECONDS = 60 * 60; // refresh at most once an hour

export const NEWS_TOPICS = [
  { slug: "webdev", label: "Web Dev" },
  { slug: "ai", label: "AI" },
  { slug: "machinelearning", label: "Machine Learning" },
  { slug: "cloud", label: "Cloud" },
  { slug: "react", label: "React" },
  { slug: "python", label: "Python" },
] as const;

export type NewsTopic = (typeof NEWS_TOPICS)[number]["slug"];

export function toTopic(value: string | string[] | undefined): NewsTopic {
  const v = Array.isArray(value) ? value[0] : value;
  return NEWS_TOPICS.find((t) => t.slug === v)?.slug ?? "webdev";
}

export type DevArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  coverImage: string | null;
  publishedAt: string;
  readingMinutes: number;
  reactions: number;
  author: string;
  tags: string[];
};

type DevApiArticle = {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  public_reactions_count: number;
  tag_list: string[];
  user: { name: string };
};

export async function getDevArticles(topic: NewsTopic, count = 12): Promise<DevArticle[]> {
  try {
    const res = await fetch(
      `https://dev.to/api/articles?tag=${topic}&top=7&per_page=${count}`,
      { next: { revalidate: REVALIDATE_SECONDS } }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as DevApiArticle[];
    return data.map((a) => ({
      id: a.id,
      title: a.title,
      description: a.description,
      url: a.url,
      coverImage: a.cover_image,
      publishedAt: a.published_at,
      readingMinutes: a.reading_time_minutes,
      reactions: a.public_reactions_count,
      author: a.user?.name ?? "",
      tags: a.tag_list ?? [],
    }));
  } catch {
    return [];
  }
}

export type HackerNewsStory = {
  id: number;
  title: string;
  url: string;
  points: number;
  comments: number;
  by: string;
};

type HnItem = {
  id: number;
  type: string;
  title?: string;
  url?: string;
  score?: number;
  descendants?: number;
  by?: string;
  dead?: boolean;
  deleted?: boolean;
};

export async function getHackerNewsTop(count = 8): Promise<HackerNewsStory[]> {
  try {
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!res.ok) return [];
    const ids = ((await res.json()) as number[]).slice(0, count * 2);
    const items = await Promise.all(
      ids.map(async (id) => {
        try {
          const r = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
            next: { revalidate: REVALIDATE_SECONDS },
          });
          return r.ok ? ((await r.json()) as HnItem | null) : null;
        } catch {
          return null;
        }
      })
    );
    return items
      .filter((i): i is HnItem => !!i && i.type === "story" && !!i.title && !i.dead && !i.deleted)
      .slice(0, count)
      .map((i) => ({
        id: i.id,
        title: i.title!,
        url: i.url ?? `https://news.ycombinator.com/item?id=${i.id}`,
        points: i.score ?? 0,
        comments: i.descendants ?? 0,
        by: i.by ?? "",
      }));
  } catch {
    return [];
  }
}
