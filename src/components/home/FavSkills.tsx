import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface PopularCourse {
  title: string;
  description: string;
  thumbnail: string;
}

const popularCourses: PopularCourse[] = [
  {
    title: "C Language Tutorial",
    description: "You will learn about the basic concept of C with examples.",
    thumbnail: "/images/courses/c-tutorial.jpg",
  },
  {
    title: "HTML Tutorial For Beginners",
    description: "Here you will learn the html concepts with examples from scratch.",
    thumbnail: "/images/courses/html-tutorial.jpg",
  },
  {
    title: "Phyton Pandas",
    description:
      "Practice your Phyton Pandas data science skills with problems on StrataScratch!",
    thumbnail: "/images/courses/pandas-tutorial.jpg",
  },
];

const FavSkills: React.FC = () => {
  return (
    <section className="bg-white py-[80px] text-center relative overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto px-4">
        <Image
          src="/images/shapes/departmets-vector.svg"
          alt="Vector line art"
          width={400}
          height={400}
          className="opacity-50 absolute right-0 top-0 pointer-events-none hidden lg:block"
        />

        <h2
          className="text-center my-[20px] mb-[50px] mx-auto font-bold text-[clamp(24px,2.5vw,42px)] text-black"
          style={{ fontFamily: "var(--font-poppins)" }}
        >
          We Have Most of Popular Courses
        </h2>

        <ul className="list-none m-0 p-0 flex flex-wrap justify-center gap-8">
          {popularCourses.map((course, idx) => (
            <li key={idx}>
              <div
                className="w-[350px] m-[15px] border border-[#ccc] rounded-[5px] overflow-hidden transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] text-center flex flex-col justify-between h-[450px]"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(38, 100%, 98%) 21.32%, hsl(144, 45%, 98%) 130%)",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Link href="/skills" className="block overflow-hidden relative pt-[60%]">
                  <figure className="absolute inset-0 m-0">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </figure>
                </Link>

                <div className="p-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-[20px] font-bold text-black my-[15px] mb-[10px]">
                      {course.title}
                    </h3>
                    <p className="text-[16px] text-[#555] mx-[5px] mb-[20px]">
                      {course.description}
                    </p>
                  </div>

                  <div>
                    <Link
                      href="/skills"
                      className="inline-flex items-center justify-center gap-2 text-white bg-[#4caf50] hover:bg-[#3e8e41] rounded-[5px] py-[10px] px-[20px] transition-colors font-medium no-underline mb-2"
                    >
                      <span>Learn More</span>
                      <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-[50px]">
          <Link href="/skills" className="fav-btn-primary no-underline inline-block">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FavSkills;

