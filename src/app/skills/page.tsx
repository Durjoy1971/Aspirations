"use client";

import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { searchYoutube } from "@/lib/youtube";
import { UserContext } from "@/context/UserContext";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface SkillItem {
  idValue: number | string;
  iconValue: string;
  titleValue: string;
  descriptionValue: string;
  keywordValue: string;
}

const defaultSkills: SkillItem[] = [
  {
    idValue: 1,
    iconValue: "fa-solid fa-code",
    titleValue: "Web Development",
    descriptionValue: "Master modern web development including HTML, CSS, JavaScript, React and Next.js.",
    keywordValue: "web development full course",
  },
  {
    idValue: 2,
    iconValue: "fa-brands fa-python",
    titleValue: "Python Programming",
    descriptionValue: "Learn Python from scratch with hands-on projects, data structures, and automation.",
    keywordValue: "python programming tutorial",
  },
  {
    idValue: 3,
    iconValue: "fa-solid fa-database",
    titleValue: "Data Science",
    descriptionValue: "Explore data analysis, machine learning algorithms, Pandas, NumPy, and statistics.",
    keywordValue: "data science full course",
  },
  {
    idValue: 4,
    iconValue: "fa-solid fa-mobile-screen",
    titleValue: "Mobile App Development",
    descriptionValue: "Build cross-platform iOS and Android applications with Flutter and React Native.",
    keywordValue: "flutter mobile app development",
  },
  {
    idValue: 5,
    iconValue: "fa-solid fa-palette",
    titleValue: "UI / UX Design",
    descriptionValue: "Design intuitive interfaces, interactive prototypes, and master Figma design systems.",
    keywordValue: "figma ui ux tutorial",
  },
  {
    idValue: 6,
    iconValue: "fa-solid fa-brain",
    titleValue: "Artificial Intelligence",
    descriptionValue: "Deep dive into artificial neural networks, natural language processing, and modern AI.",
    keywordValue: "artificial intelligence full course",
  },
];

export default function SkillsPage() {
  const { state } = useContext(UserContext);
  const [courses, setCourses] = useState<SkillItem[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Skills | Aspiration";
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const skillQuery = query(
        collection(db, "SkillList"),
        orderBy("idValue", "asc")
      );
      const querySnapshot = await getDocs(skillQuery);
      if (!querySnapshot.empty) {
        const coursesData = querySnapshot.docs.map((doc) => doc.data() as SkillItem);
        setCourses(coursesData);
      } else {
        setCourses(defaultSkills);
      }
    } catch (error) {
      console.error("Error fetching courses from Firebase: ", error);
      setCourses(defaultSkills);
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
    <section className="bg-[#f4f6f9] pt-[150px] pb-[100px] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-[36px] font-bold mb-10 text-center text-[#2d3748]">
          Skills
        </h2>

        {loading ? (
          <div className="text-center py-20 text-gray-500 text-lg">
            Loading skills...
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-stretch gap-8">
            {courses.map((course) => (
              <div
                key={course.idValue}
                className="bg-white rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-[30px] max-w-[350px] w-full text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] flex flex-col justify-between"
              >
                <div>
                  <div className="text-[48px] mb-[20px] text-[#38b2ac]">
                    <i className={course.iconValue}></i>
                  </div>
                  <h3 className="text-[24px] font-bold mb-[20px] text-[#2d3748]">
                    {course.titleValue}
                  </h3>
                  <p className="text-[16px] leading-[1.5] mb-[30px] text-[#4a5568]">
                    {course.descriptionValue}
                  </p>
                </div>
                <div>
                  <button
                    className="inline-block py-[12px] px-[30px] rounded-[30px] bg-[#38b2ac] text-white text-[16px] font-bold border-none transition-all duration-300 hover:bg-[#2d8a83] cursor-pointer"
                    onClick={(e) => handleViewCoursesClick(e, course.keywordValue)}
                  >
                    View Courses
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
