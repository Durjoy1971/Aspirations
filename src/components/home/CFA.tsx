import React from "react";
import Link from "next/link";

const CFA: React.FC = () => {
  return (
    <section
      className="relative grid grid-cols-1 md:grid-cols-[5.5fr_5fr] items-center py-10 px-6 md:pl-[17vw] overflow-hidden"
      style={{ backgroundColor: "hsl(240, 8%, 18%)" }}
    >
      <div className="my-[1.5vw] flex flex-col sm:flex-row sm:items-center gap-6 z-10">
        <div className="max-w-[400px]">
          <h1
            className="text-white font-semibold text-[clamp(20px,2.4vw,36px)] leading-[1.8] m-0"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            Create Free Account &amp; Get Register
          </h1>
        </div>
        <div>
          <Link href="/login">
            <button className="btn btn-primary whitespace-nowrap">Register Now</button>
          </Link>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 mr-[13vw]">
        {/* eslint-disable-next-js/no-img-element */}
        <img
          className="w-[18vw] min-w-[150px] object-contain"
          src="https://i.ibb.co/1ZQ3Mpt/cta-banner.png"
          alt="cta-banner"
        />
      </div>
    </section>
  );
};

export default CFA;
