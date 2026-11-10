import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aspiration.edu";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/add", "/update-delete", "/AdminLogin"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
