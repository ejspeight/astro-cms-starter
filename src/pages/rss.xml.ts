/**
 * RSS Feed — /rss.xml
 *
 * Generates an RSS 2.0 feed for all blog posts, sorted newest first.
 * The feed URL is automatically added to BaseLayout via <link rel="alternate">.
 *
 * Update site.url and site.name in src/config/site.ts when rebranding —
 * those values flow through here automatically.
 */

import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { site } from "../config/site";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = (await getCollection("blog")).sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: `${site.name} - Blog`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.seo_description ?? undefined,
      link: `/blog/${post.id}/`,
      ...(post.data.cover_image && {
        enclosure: {
          url: post.data.cover_image.startsWith("http")
            ? post.data.cover_image
            : new URL(post.data.cover_image, site.url).href,
          type: "image/jpeg",
          length: 0,
        },
      }),
    })),
    customData: `<language>${site.language}</language>`,
  });
}
