"use client";

import React, { useEffect, useState, Suspense } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { YouTubeVideo, getVideoById } from "@/lib/youtube";

function VideoPlayerContent() {
  const params = useParams();
  const id = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "";
  const [video, setVideo] = useState<Partial<YouTubeVideo> | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Video Player | Aspiration";

    if (!id) return;

    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(`video_${id}`);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed && parsed.title) {
            setVideo(parsed);
            document.title = `${parsed.title} | Aspiration`;
            return;
          }
        } catch (e) {
          console.error("Error reading stored video:", e);
        }
      }

      // If video is not in sessionStorage, automatically fetch video details
      getVideoById(id)
        .then((fetchedVideo) => {
          if (fetchedVideo) {
            setVideo(fetchedVideo);
            sessionStorage.setItem(`video_${id}`, JSON.stringify(fetchedVideo));
            if (fetchedVideo.title) {
              document.title = `${fetchedVideo.title} | Aspiration`;
            }
          }
        })
        .catch((err) => {
          console.error("Error fetching video details:", err);
        });
    }
  }, [id]);

  useEffect(() => {
    if (video?.title) {
      document.title = `${video.title} | Aspiration`;
    }
  }, [video?.title]);

  return (
    <div className="flex flex-col min-h-screen pt-[130px] pb-[100px] px-4">
      <div className="w-full max-w-[1000px] mx-auto">
        <div className="mb-4">
          <Link
            href="/skills-video-list"
            className="text-blue-600 hover:underline font-medium text-sm flex items-center gap-1"
          >
            &larr; Back to video list
          </Link>
        </div>

        {/* Video Embed */}
        <div className="w-full bg-black rounded-lg overflow-hidden shadow-2xl">
          {id ? (
            <iframe
              className="w-full h-[min(70vw,550px)]"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
              title={video?.title || "YouTube video player"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="h-[300px] flex items-center justify-center text-white">
              No video ID provided
            </div>
          )}
        </div>

        {/* Details */}
        <div className="mt-6">
          <h1 className="text-[28px] font-semibold text-[#8B4513] mb-2 leading-snug">
            {video?.title || "Video Lecture"}
          </h1>
          <p className="text-[18px] font-bold text-blue-600 mb-6">
            {video?.channelTitle || "Aspiration Courses"}
          </p>
          {video?.description && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed text-sm">
                {video.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VideoPlayerPage() {
  return (
    <Suspense
      fallback={
        <div className="pt-[160px] text-center py-20 text-gray-500 text-lg">
          Loading video player...
        </div>
      }
    >
      <VideoPlayerContent />
    </Suspense>
  );
}
