"use client";

import React, { useEffect } from "react";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About Us | Aspiration";
  }, []);

  return (
    <div className="pt-[160px] pb-[80px] max-w-[1250px] mx-auto px-4">
      {/* Top Banner Box with navy borders */}
      <div className="bg-white border-y-[5px] border-r-[5px] border-l-[25px] sm:border-l-[50px] border-[#34495e] p-6 sm:p-10 mb-16 shadow-lg rounded-r-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
          <div>
            <h4 className="text-orange-500 font-extrabold text-xl mb-3">Aspiration</h4>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-[#4885ab] to-orange-500 bg-clip-text text-transparent">
              Start Your
              <br />
              Journey With
              <br />
              Us
            </h1>
            <h4 className="text-black font-semibold text-xl mb-3">Online Courses</h4>
            <p className="text-gray-700 font-medium text-base leading-relaxed">
              We provide you free online courses with high-quality video content. Which is a great way to learn new skills without having to search for the best videos by yourselves.
            </p>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-js/no-img-element */}
            <img
              src="https://i.ibb.co/2KpZXzk/woman-attending-online-class.jpg"
              alt="Online learning"
              className="w-full max-w-[550px] rounded-lg object-cover shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Feature Sections */}
      <div className="space-y-12 max-w-[1000px] mx-auto text-left">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-6">
            Learn and Explore with Our Website
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed text-justify">
            In the digital age, online learning platforms are revolutionizing the way students access education. Our website is one such platform that offers free video lessons for class 1 to 5 students, an array of skill-building courses, and a dedicated section for kids&apos; learning. In this blog, we&apos;ll explore three key features of our website that make it a valuable tool for learners of all ages.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#262667] mb-3">Skill-Building Courses:</h2>
          <p className="text-gray-600 text-base leading-relaxed text-justify mb-6">
            Our website&apos;s skill-building section is a treasure trove of courses aimed at enhancing learners&apos; skill sets. From programming and languages to English grammar and CSS, we offer a range of courses to cater to learners&apos; diverse needs. Our courses are designed to be self-paced, allowing learners to study at their own pace and convenience.
          </p>
          <div className="flex justify-center my-6">
            <img
              src="https://i.ibb.co/rGYFGc9/22-removebg-preview.png"
              alt="Skill building courses"
              className="max-w-full h-auto max-h-[350px] object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#262667] mb-3">Kids&apos; Corner:</h2>
          <p className="text-gray-600 text-base leading-relaxed text-justify mb-6">
            Our website&apos;s kids&apos; corner is a dedicated section for children&apos;s learning. It offers a range of courses specially designed for young learners, including kid&apos;s programming, kids&apos; grammar, and coding courses like beginner CSS and HTML. The courses are designed to be interactive and fun, making learning enjoyable for children.
          </p>
          <div className="flex justify-center my-6">
            <img
              src="https://i.ibb.co/Y3xFs1N/www.png"
              alt="Kids corner"
              className="max-w-full h-auto max-h-[350px] object-contain"
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#262667] mb-3">Blog:</h2>
          <p className="text-gray-600 text-base leading-relaxed text-justify mb-6">
            Insights and Skills for Student Success is a blog dedicated to providing valuable guidance and practical advice to students as they embark on their career journey. With a focus on essential skills and life lessons, our blog equips students with the knowledge and tools necessary to make informed decisions about their career choices.
          </p>
          <div className="flex justify-center my-6">
            <img
              src="https://i.ibb.co/wWCS03s/3963180-removebg-preview.png"
              alt="Blog insights"
              className="max-w-full h-auto max-h-[350px] object-contain"
            />
          </div>
          <p className="text-gray-600 text-base leading-relaxed text-justify mt-8">
            In conclusion, our website is a comprehensive online learning platform that caters to learners of all ages. From class 1 to 5 video lessons to skill-building courses and a dedicated section for kids&apos; learning, we offer a range of educational resources and activities to suit every learner&apos;s needs.
          </p>
        </div>
      </div>

      {/* Developers Section */}
      <div className="mt-24 text-center">
        <h1 className="text-3xl font-bold text-[#262667] mb-12">
          Behind The Project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto">
          {/* Dev 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center">
            <img
              src="https://i.ibb.co/h7T1c0g/profile-pic-4.png"
              alt="Md. Mahtab Uddin"
              className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-orange-400 shadow"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Md. Mahtab Uddin</h3>
            <p className="text-lg font-semibold text-gray-500 mb-3">Frontend Developer</p>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Passionate web designer specializing in front-end development, dedicated to crafting visually stunning and user-friendly websites.
            </p>
          </div>

          {/* Dev 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col items-center">
            <img
              src="https://i.ibb.co/23Nmdgm/photo-2023-04-25-19-46-13.jpg"
              alt="Durjoy Barua"
              className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-blue-500 shadow"
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Durjoy Barua</h3>
            <p className="text-lg font-semibold text-gray-500 mb-3">FullStack Developer</p>
            <p className="text-gray-600 text-sm leading-relaxed text-center">
              Passionate competitive programmer and full-stack web developer, dedicated to coding and love to create visually stunning, user-friendly and dynamic websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

