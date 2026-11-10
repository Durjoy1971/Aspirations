import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const FALLBACK_BLOG_SLUGS = [
  "learn-to-code-beginners-edition",
  "4-key-points-in-data-science",
  "key-points-of-web-development",
  "essentials-of-mobile-development",
  "essentials-of-photography",
  "essentials-of-art-and-design",
  "one-stop-learning-destination",
  "online-education-for-kids",
  "time-management-strategies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aspiration.edu";

  const staticRoutes = [
    "",
    "/aboutus",
    "/skills",
    "/kids",
    "/blog",
    "/login",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("daily" as const) : ("weekly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = (
    blogs && blogs.length > 0
      ? blogs.map((blog) => {
          const parsedDate = new Date(blog.date);
          const lastModified = !isNaN(parsedDate.getTime()) ? parsedDate : new Date();
          return {
            url: `${baseUrl}/blog/${blog.slug}`,
            lastModified,
            changeFrequency: "monthly" as const,
            priority: 0.7,
          };
        })
      : FALLBACK_BLOG_SLUGS.map((slug) => ({
          url: `${baseUrl}/blog/${slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }))
  );

  return [...staticEntries, ...blogEntries];
}
