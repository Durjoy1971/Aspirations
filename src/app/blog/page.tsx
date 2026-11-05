"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

interface CarouselBlogItem {
  id: string;
  tag: string;
  title: string;
  date: string;
  image: string;
  link: string;
}

const carouselBlogs: CarouselBlogItem[] = [
  {
    id: "001",
    tag: "Programming",
    title: "Learn to Code: Beginner's Edition",
    date: "March 11, 2023",
    image: "https://i.ibb.co/ZmStb5s/1.jpg",
    link: "/blog001",
  },
  {
    id: "002",
    tag: "Data Science",
    title: "4 Key Points in Data Science",
    date: "March 09, 2023",
    image: "https://i.ibb.co/C9f9Jfb/1.jpg",
    link: "/blog002",
  },
  {
    id: "003",
    tag: "Web Development",
    title: "Key Points of Web Development",
    date: "May 11, 2023",
    image: "https://i.ibb.co/m8f8hqJ/1.jpg",
    link: "/blog003",
  },
  {
    id: "004",
    tag: "Mobile Development",
    title: "The Essentials of Mobile Development",
    date: "Feb 11, 2023",
    image: "https://i.ibb.co/rycm16G/19198999.jpg",
    link: "/blog004",
  },
  {
    id: "005",
    tag: "Photography",
    title: "Exploring the Essentials of Photography",
    date: "March 1, 2023",
    image: "https://i.ibb.co/Bj5TyTh/1.jpg",
    link: "/blog005",
  },
  {
    id: "006",
    tag: "Art & Design",
    title: "The Essentials of Art and Design",
    date: "March 11, 2023",
    image: "https://i.ibb.co/kyDchDr/1.jpg",
    link: "/blog006",
  },
];

const mainArticles = [
  {
    id: "007",
    title: "Your One-Stop Learning Destination: Courses, Videos, and Tutorials",
    tag: "Education",
    date: "March 11, 2023",
    image: "https://i.ibb.co/Tc5j1Tk/1.jpg",
    link: "/blog007",
    description:
      "Welcome to our website, where you can access a comprehensive library of free courses and tutorials on programming, CSS, Photoshop, and much more. Our user-friendly platform makes it easy for you to learn anything you want without having to waste time searching for videos. With our website, you can unlock your potential and become a pro in no time! Start learning today and take your skills to the next level.",
  },
  {
    id: "008",
    title: "Unlocking the Benefits of Online Education for Kids",
    tag: "Education",
    date: "May 1, 2023",
    image: "https://i.ibb.co/bP74jdm/1.jpg",
    link: "/blog008",
    description:
      "Discover the advantages of online education for kids, from personalized learning to a safe and interactive environment. Explore the benefits of flexible schedules and access to a wide range of educational resources. With online education, kids can thrive academically and develop essential skills for their future.",
  },
  {
    id: "009",
    title: "Time Management: Strategies for Utilizing Your Time Effectively",
    tag: "Productivity",
    date: "April 11, 2023",
    image: "https://i.ibb.co/pbXmkdr/1.jpg",
    link: "/blog009",
    description:
      "Discover practical strategies for managing your time effectively, from setting priorities to delegating tasks. Learn how to eliminate distractions, take regular breaks, and create a schedule that works for you. By utilizing these tips, you can make the most of your time and achieve your goals with greater ease.",
  },
];

export default function BlogPage() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Blog | Aspiration";
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? carouselBlogs.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= carouselBlogs.length - 2 ? 0 : prev + 1));
  };

  const visibleBlogs = [
    carouselBlogs[startIndex],
    carouselBlogs[(startIndex + 1) % carouselBlogs.length],
  ];

  return (
    <div className="pt-[160px] pb-[100px] flex flex-col items-center px-4">
      {/* Top Banner Image */}
      <div className="max-w-[800px] mb-8 w-full flex justify-center">
        {/* eslint-disable-next-js/no-img-element */}
        <img
          src="https://i.ibb.co/smxrbMy/Blogging-removebg-preview.png"
          alt="Blogging Illustration"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Blog Carousel */}
      <div className="relative w-full max-w-[1100px] px-8 my-8">
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-gray-800 shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all cursor-pointer border border-gray-100"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visibleBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#f9f9f9] rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.2)] p-5 flex flex-col items-center hover:bg-[#e9e9e9] transition-all duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[300px] object-cover rounded-lg shadow-md"
              />
              <Link href={blog.link} className="my-5">
                <button className="bg-[#0088e5] hover:bg-[#0070c0] text-white font-semibold py-2 px-6 rounded-full transition-colors cursor-pointer border-none shadow">
                  {blog.tag}
                </button>
              </Link>
              <h5 className="font-bold text-xl text-center text-gray-900 mt-2">
                {blog.title}
              </h5>
              <p className="text-[#888] text-sm text-center mt-1">{blog.date}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-gray-800 shadow-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-all cursor-pointer border border-gray-100"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
        </button>
      </div>

      {/* Main Articles Section */}
      <div className="w-full max-w-[1000px] space-y-20 mt-16">
        {mainArticles.map((article) => (
          <div
            key={article.id}
            className="flex flex-col items-center bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full max-w-[700px] h-auto rounded-2xl shadow-xl mb-8 object-cover"
            />
            <h4 className="text-2xl sm:text-3xl font-semibold text-center text-gray-900 mb-4 leading-tight">
              {article.title}
            </h4>
            <p className="text-[#888] text-sm mb-6 text-center">
              Tag: <span className="font-medium text-gray-700">{article.tag}</span> |{" "}
              <span>Date: {article.date}</span>
            </p>
            <p className="text-gray-700 text-base leading-relaxed text-justify mb-8 max-w-[850px]">
              {article.description}
            </p>
            <Link href={article.link}>
              <button className="inline-flex items-center gap-2 bg-[#0099ff] hover:bg-[#0088e5] text-white px-6 py-3 rounded-lg text-base font-medium shadow-[0_0_15px_rgb(2,194,252)] transition-all cursor-pointer border-none">
                <span>Read More</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

