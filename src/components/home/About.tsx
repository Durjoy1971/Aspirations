import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <section className="block bg-white py-[80px] pb-[100px] px-[5vw]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-[50px]">
        <div className="flex justify-center md:justify-start">
          {/* eslint-disable-next-js/no-img-element */}
          <img
            className="w-[32vw] min-w-[220px] ml-0 md:ml-[12vw]"
            src="https://i.ibb.co/DGLmFxP/about-banner.png"
            alt="about-banner"
          />
        </div>
        <div className="mr-0 md:mr-[9vw]">
          <h1
            className="font-bold text-[clamp(2.5vw,20vw,14px)] mb-[1vw] leading-[1.6] text-black"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            We Help to Create Possibility & Success in Your Career!
          </h1>
          <p
            className="text-gray-500 mb-[45px] text-[clamp(1.1vw,20vw,10px)] leading-[1.6]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Discover your potential and achieve career success with our tailored services.
            Our team of experts provides resume writing, interview coaching, and
            personalized career development plans. Let us guide you towards unlocking new
            possibilities and reaching your professional goals.
          </p>
          <Link href="/skills">
            <button className="btn btn-primary">Get Started Today</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
