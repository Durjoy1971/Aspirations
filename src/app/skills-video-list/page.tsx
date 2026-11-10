"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import VideoCard from "@/components/VideoCard";
import { YouTubeVideo, searchYoutube } from "@/lib/youtube";
import Link from "next/link";

function SkillsVideoListContent() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");

  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Course Videos | Aspiration";

    let storedVideos: YouTubeVideo[] | null = null;
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("skill_videos");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            storedVideos = parsed;
          }
        } catch (e) {
          console.error("Error reading stored videos", e);
        }
      }
    }

    if (storedVideos && storedVideos.length > 0) {
      setVideos(storedVideos);
      setLoading(false);
      return;
    }

    // If sessionStorage is empty, check query param ?q=...
    if (q && q.trim()) {
      setLoading(true);
      searchYoutube(q.trim())
        .then((fetchedVideos) => {
          setVideos(fetchedVideos);
          if (typeof window !== "undefined") {
            sessionStorage.setItem("skill_videos", JSON.stringify(fetchedVideos));
          }
        })
        .catch((err) => {
          console.error("Error fetching videos for query:", err);
          setVideos([]);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setVideos([]);
      setLoading(false);
    }
  }, [q]);

  return (
    <div className="pt-[160px] pb-[100px] px-4 md:px-[100px] min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-8 px-4">
          <h1 className="text-3xl font-bold text-gray-800">Available Videos</h1>
          <Link
            href="/skills"
            className="fav-btn-primary text-sm py-2 px-4 no-underline inline-block"
          >
            Back to Skills
          </Link>
        </div>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-xl">Loading videos...</div>
        ) : videos.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-lg shadow p-8 max-w-[600px] mx-auto">
            <h3 className="text-xl font-semibold mb-3">No videos found</h3>
            <p className="text-gray-600 mb-6">
              Please choose a skill or search query from the skills page to view related courses.
            </p>
            <Link href="/skills" className="fav-btn-primary no-underline inline-block">
              Browse Skills
            </Link>
          </div>
        ) : (
          <div>
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SkillsVideoListPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-[160px] pb-[100px] text-center py-20 text-gray-500 text-xl">
          Loading videos...
        </div>
      }
    >
      <SkillsVideoListContent />
    </Suspense>
  );
}
