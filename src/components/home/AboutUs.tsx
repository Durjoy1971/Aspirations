import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <div className="my-[100px] px-4 max-w-[1400px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/KD0hZWs/About-Us.png"
            alt="About Us Banner"
            width={600}
            height={400}
            className="max-w-full h-auto object-contain rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="relative inline-block ml-0 lg:ml-[60px]">
            <h1 className="text-[36px] md:text-[44px] font-extrabold text-black relative z-10 m-0">
              About <span className="text-orange-500">Aspiration</span>
            </h1>
            <div className="h-[10px] w-full bg-orange-400 rounded-full mt-2" />
          </div>

          <h4
            className="mt-[40px] text-gray-500 text-[1.25rem] md:text-[1.5rem] leading-relaxed text-justify font-normal max-w-[90%]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            We are working on creating an online course platform that offers free videos
            from a variety of sectors. Our goal is to curate and provide the best online
            courses available, with the aim of helping people learn and grow through
            accessible and high-quality educational content.
          </h4>

          <div className="mt-[30px]">
            <Link href="/aboutus">
              <button className="fav-btn-primary">Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

