const API_KEY =
  process.env.YOUTUBE_API_KEY ||
  process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ||
  "";

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channelTitle: string;
}

export function decodeHTMLEntities(text: string): string {
  if (!text) return "";
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, code) => {
      const num = Number(code);
      return !isNaN(num) ? String.fromCharCode(num) : _;
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
      const num = parseInt(hex, 16);
      return !isNaN(num) ? String.fromCharCode(num) : _;
    });
}

export const searchYoutube = async (query: string): Promise<YouTubeVideo[]> => {
  if (!query || !query.trim()) {
    return [];
  }

  // 1. In browser environment, call internal API proxy route
  if (typeof window !== "undefined") {
    try {
      const response = await fetch(`/api/youtube/search?q=${encodeURIComponent(query.trim())}`);
      if (response.ok) {
        const data = await response.json();
        return Array.isArray(data) ? data : [];
      }
      console.warn("Internal search API returned non-OK status:", response.status);
    } catch (error) {
      console.warn("Failed fetching from /api/youtube/search, falling back to direct API:", error);
    }
  }

  // 2. Direct YouTube API fallback (for server execution or proxy fallback)
  if (!API_KEY) {
    console.error("YouTube API key is missing");
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&part=snippet&type=video&q=${encodeURIComponent(
        query.trim()
      )}&maxResults=10&order=viewCount&videoDuration=long`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      console.error("YouTube search API error status:", response.status);
      return [];
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.id?.videoId || "",
      title: decodeHTMLEntities(item.snippet?.title || ""),
      description: decodeHTMLEntities(item.snippet?.description || ""),
      thumbnail:
        item.snippet?.thumbnails?.high?.url?.replace("hqdefault.jpg", "hq720.jpg") ||
        item.snippet?.thumbnails?.medium?.url ||
        item.snippet?.thumbnails?.default?.url ||
        "",
      channelTitle: item.snippet?.channelTitle || "",
    }));
  } catch (error) {
    console.error("Error fetching from YouTube API:", error);
    return [];
  }
};

export const getVideoById = async (id: string): Promise<YouTubeVideo | null> => {
  if (!id || !id.trim()) {
    return null;
  }

  // 1. In browser environment, call internal API proxy route
  if (typeof window !== "undefined") {
    try {
      const response = await fetch(`/api/youtube/video?id=${encodeURIComponent(id.trim())}`);
      if (response.ok) {
        const data = await response.json();
        return data as YouTubeVideo;
      }
      console.warn("Internal video API returned non-OK status:", response.status);
    } catch (error) {
      console.warn("Failed fetching from /api/youtube/video, falling back to direct API:", error);
    }
  }

  // 2. Direct YouTube API fallback (for server execution or proxy fallback)
  if (!API_KEY) {
    console.error("YouTube API key is missing");
    return null;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet&id=${encodeURIComponent(id.trim())}`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      console.error("YouTube video API error status:", response.status);
      return null;
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      return null;
    }

    const item = data.items[0];
    return {
      id: item.id || id,
      title: decodeHTMLEntities(item.snippet?.title || ""),
      description: decodeHTMLEntities(item.snippet?.description || ""),
      thumbnail:
        item.snippet?.thumbnails?.high?.url?.replace("hqdefault.jpg", "hq720.jpg") ||
        item.snippet?.thumbnails?.medium?.url ||
        item.snippet?.thumbnails?.default?.url ||
        "",
      channelTitle: item.snippet?.channelTitle || "",
    };
  } catch (error) {
    console.error("Error fetching video by ID from YouTube API:", error);
    return null;
  }
};
