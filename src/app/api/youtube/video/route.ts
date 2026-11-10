import { NextRequest, NextResponse } from "next/server";
import { YouTubeVideo, decodeHTMLEntities } from "@/lib/youtube";

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id || id.trim() === "") {
      return NextResponse.json(
        { error: "Missing required query parameter: id" },
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
      `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet&id=${encodeURIComponent(
        id.trim()
      )}`,
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

    if (!data.items || !Array.isArray(data.items) || data.items.length === 0) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    const item = data.items[0];
    const video: YouTubeVideo = {
      id: item.id || id.trim(),
      title: decodeHTMLEntities(item.snippet?.title || ""),
      description: decodeHTMLEntities(item.snippet?.description || ""),
      thumbnail:
        item.snippet?.thumbnails?.high?.url?.replace("hqdefault.jpg", "hq720.jpg") ||
        item.snippet?.thumbnails?.medium?.url ||
        item.snippet?.thumbnails?.default?.url ||
        "",
      channelTitle: item.snippet?.channelTitle || "",
    };

    return NextResponse.json(video);
  } catch (error: any) {
    if (
      error?.digest === "NEXT_PRERENDER_INTERRUPTED" ||
      error?.digest?.startsWith?.("NEXT_") ||
      error?.message?.includes?.("bail out of prerendering")
    ) {
      throw error;
    }
    console.error("Error in YouTube video route:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
