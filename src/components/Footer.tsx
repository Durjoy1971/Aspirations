import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-[70vw] mx-auto pt-[60px] pb-[20px] mb-[40px]">
        {/* Brand */}
        <div className="mb-[30px]">
          <Link href="/">
            <Image
              src="/images/3RPhwRx/logo003.png"
              alt="Aspiration logo"
              width={220}
              height={55}
              className="w-[15vw] min-w-[200px] h-auto -ml-[10px] mb-[20px] object-contain"
            />
          </Link>
          <p className="text-white text-base mb-[30px]">
            Professionally scale cross functional human capital and extensive technology.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Useful Link */}
          <div>
            <h4 className="text-[22px] text-white capitalize mb-[35px] font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:bg-[#e91e63] after:h-[2px] after:w-[55px]">
              Useful Link
            </h4>
            <ul className="space-y-[10px] p-0 list-none">
              <li>
                <Link
                  href="/"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#reviews"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Contact US
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[22px] text-white capitalize mb-[35px] font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:bg-[#e91e63] after:h-[2px] after:w-[55px]">
              company
            </h4>
            <ul className="space-y-[10px] p-0 list-none">
              <li>
                <Link
                  href="/aboutus"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  href="#privacy"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link
                  href="#refund"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Refund policy
                </Link>
              </li>
              <li>
                <Link
                  href="#payment"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  payment options
                </Link>
              </li>
            </ul>
          </div>

          {/* Others */}
          <div>
            <h4 className="text-[22px] text-white capitalize mb-[35px] font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:bg-[#e91e63] after:h-[2px] after:w-[55px]">
              Others
            </h4>
            <ul className="space-y-[10px] p-0 list-none">
              <li>
                <Link
                  href="/blog"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kids"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Book Store
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Notes and Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#offers"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Offers
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Crash Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[22px] text-white capitalize mb-[35px] font-medium relative after:content-[''] after:absolute after:left-0 after:-bottom-[10px] after:bg-[#e91e63] after:h-[2px] after:w-[55px]">
              follow us
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center bg-black/90 text-white text-[20px] h-[60px] flex items-center justify-center">
        <p className="flex items-center gap-2 m-0">
          <FontAwesomeIcon icon={faCopyright} /> 2022-2024 CopyRight By Team ASPIRANTS
        </p>
      </div>
    </footer>
  );
};

export default Footer;

