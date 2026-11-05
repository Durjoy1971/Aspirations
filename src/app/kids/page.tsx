"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchYoutube } from "@/lib/youtube";
import { UserContext } from "@/context/UserContext";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface KidCourse {
  idValue: number | string;
  imageValue: string;
  titleValue: string;
  descriptionValue: string;
  keywordValue: string;
}

const defaultKidCourses: KidCourse[] = [
  {
    idValue: 1,
    imageValue: "https://i.ibb.co/Y3xFs1N/www.png",
    titleValue: "Scratch Programming",
    descriptionValue: "Fun and visual block-based programming designed for creative young learners.",
    keywordValue: "scratch programming for kids",
  },
  {
    idValue: 2,
    imageValue: "https://i.ibb.co/rGYFGc9/22-removebg-preview.png",
    titleValue: "English Grammar",
    descriptionValue: "Interactive stories, fun vocabulary games, and phonics for school kids.",
    keywordValue: "english grammar for kids",
  },
  {
    idValue: 3,
    imageValue: "https://i.ibb.co/wWCS03s/3963180-removebg-preview.png",
    titleValue: "Math & Puzzles",
    descriptionValue: "Exciting mental math challenges, number adventures, and brain-teasers.",
    keywordValue: "fun math for kids",
  },
  {
    idValue: 4,
    imageValue: "https://i.ibb.co/2KpZXzk/woman-attending-online-class.jpg",
    titleValue: "Creative Drawing",
    descriptionValue: "Step-by-step drawing, coloring, and cartoon design tutorials for beginners.",
    keywordValue: "drawing tutorial for kids",
  },
];

export default function KidCornerPage() {
  const { state } = useContext(UserContext);
  const [courses, setCourses] = useState<KidCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Kid's Corner | Aspiration";
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const kidQuery = query(
        collection(db, "kidList"),
        orderBy("idValue", "asc")
      );
      const querySnapshot = await getDocs(kidQuery);
      if (!querySnapshot.empty) {
        const coursesData = querySnapshot.docs.map((doc) => doc.data() as KidCourse);
        setCourses(coursesData);
      } else {
        setCourses(defaultKidCourses);
      }
    } catch (error) {
      console.error("Error fetching kid courses: ", error);
      setCourses(defaultKidCourses);
    } finally {
      setLoading(false);
    }
  };

  const handleViewCoursesClick = async (e: React.MouseEvent, keyword: string) => {
    e.preventDefault();

    if (state.isLoggedIn) {
      const response = await searchYoutube(keyword);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("skill_videos", JSON.stringify(response));
      }
      router.push("/skills-video-list");
    } else {
      alert("Please sign in to view videos.");
      router.push("/login");
    }
  };

  return (
    <div className="text-center pt-[170px] pb-[100px] px-4 md:px-[10vw] min-h-screen">
      <h1 className="text-[36px] font-bold text-gray-800 mb-4">Kid&apos;s Corner</h1>
      <p className="text-gray-600 max-w-[600px] mx-auto mb-12">
        Exciting and educational videos carefully picked for kids to explore coding, science, language, and creativity.
      </p>

      {loading ? (
        <div className="py-20 text-gray-500 text-lg">Loading courses...</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-[30px]">
          {courses.map((course) => (
            <div
              key={course.idValue}
              className="group relative w-[300px] h-[320px] bg-[#ff4f4f] rounded-[10px] overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,0.2)] transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-full h-[90%] overflow-hidden rounded-t-[10px]">
                {/* eslint-disable-next-js/no-img-element */}
                <img
                  src={course.imageValue}
                  alt={course.titleValue}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 bg-white/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-[10px] text-left">
                <h3 className="text-[20px] font-bold text-gray-900 mb-2 truncate">
                  {course.titleValue}
                </h3>
                <p className="text-[14px] text-gray-600 mb-3 line-clamp-2">
                  {course.descriptionValue}
                </p>
                <button
                  className="bg-[#ff6b6b] hover:bg-[#ff4f4f] text-white border-none py-2 px-4 rounded-[5px] text-[16px] font-medium transition-colors cursor-pointer w-full text-center"
                  onClick={(e) => handleViewCoursesClick(e, course.keywordValue)}
                >
                  View Videos
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

