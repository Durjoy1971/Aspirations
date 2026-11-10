import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <section
      className="block"
      style={{
        background: "linear-gradient(90deg, hsl(38, 100%, 98%) 21.32%, hsl(144, 45%, 98%) 130%)",
        padding: "250px 5vw 120px 10vw",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] items-center gap-[5vw]">
        <div className="pl-0 md:pl-[8vw]">
          <h1
            className="font-bold text-[min(4vw,50px)] text-black mb-[1vw] leading-[1.4]"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Empowering Young Minds
          </h1>
          <p
            className="text-gray-500 mb-[45px] text-[clamp(1vw,20vw,12px)] leading-[1.6]"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            We focus on nurturing a foundation for lifelong learning in young minds. We
            believe that education is not just about acquiring knowledge, but also about
            instilling a love for learning and empowering children to become lifelong learners.
          </p>
          <Link href="/kids">
            <button className="btn btn-primary">Discover More</button>
          </Link>
        </div>
        <figure className="m-0 flex justify-center">
          <Image
            className="w-[35vw] min-w-[220px] h-auto ml-0 md:ml-[3vw] object-contain"
            src="/images/Wp9k0Bq/Banner-picture.png"
            alt="A young lady sits, holding a pen and a notebook."
            width={500}
            height={500}
            priority
          />
        </figure>
      </div>
    </section>
  );
};

export default Banner;

