import type { MetadataRoute } from "next";
import { siteName, siteUrl } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Katana",
    description:
      "AI automation, lead generation, website design, and AI SEO for service businesses.",
    start_url: "/",
    display: "standalone",
    background_color: "#090909",
    theme_color: "#daf0ee",
    id: siteUrl,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
