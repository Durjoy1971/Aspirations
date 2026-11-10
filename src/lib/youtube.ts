const API_KEY =
  process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ||
  process.env.YOUTUBE_API_KEY ||
  "";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
}

function decodeHTMLEntities(text: string): string {
  if (typeof window === "undefined") {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
  }
  const parser = new DOMParser();
  const decodedText = parser.parseFromString(`<!doctype html><body>${text}`, "text/html").body.textContent;
  return decodedText || text;
}

export const searchYoutube = async (query: string): Promise<YouTubeVideo[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${encodeURIComponent(
        query
      )}&maxResults=10&order=viewCount&videoDuration=long`
    );

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.id?.videoId || "",
      title: decodeHTMLEntities(item.snippet?.title || ""),
      description: item.snippet?.description || "",
      thumbnail:
        item.snippet?.thumbnails?.high?.url?.replace("hqdefault.jpg", "hq720.jpg") ||
        item.snippet?.thumbnails?.default?.url ||
        "",
      channelTitle: item.snippet?.channelTitle || "",
    }));
  } catch (error) {
    console.error("Error fetching from YouTube API:", error);
    return [];
  }
};

