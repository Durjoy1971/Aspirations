import { NextRequest, NextResponse } from "next/server";
import { YouTubeVideo, decodeHTMLEntities } from "@/lib/youtube";

export async function GET(request: NextRequest) {
  try {
    const query = request.nextUrl.searchParams.get("q");

    if (!query || query.trim() === "") {
      return NextResponse.json(
        { error: "Missing required query parameter: q" },
        { status: 400 }
      );
    }

    const apiKey =
      process.env.YOUTUBE_API_KEY ||
      process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "YouTube API key is not configured" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${encodeURIComponent(
        query.trim()
      )}&maxResults=10&order=viewCount&videoDuration=long`,
      {
        next: { revalidate: 86400 },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const message =
        errorData?.error?.message || `YouTube API responded with status ${response.status}`;
      return NextResponse.json(
        { error: message },
        { status: response.status }
      );
    }

    const data = await response.json();

    if (!data.items || !Array.isArray(data.items)) {
      return NextResponse.json([]);
    }

    const videos: YouTubeVideo[] = data.items.map((item: any) => ({
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

    return NextResponse.json(videos);
  } catch (error: any) {
    if (
      error?.digest === "NEXT_PRERENDER_INTERRUPTED" ||
      error?.digest?.startsWith?.("NEXT_") ||
      error?.message?.includes?.("bail out of prerendering")
    ) {
      throw error;
    }
    console.error("Error in YouTube search route:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
