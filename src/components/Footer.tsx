import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-[70vw] mx-auto pt-[60px] pb-[20px] mb-[40px]">
        {/* Brand */}
        <div className="mb-[30px]">
          <Link href="/home">
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
                  href="/home"
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
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Reviews
                </a>
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
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Career
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Refund policy
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  payment options
                </a>
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
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Book Store
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Notes and Guides
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Offers
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Durjoy1971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbbbbb] hover:text-[#e91e63] hover:pl-[15px] transition-all duration-500 capitalize text-[18px] font-medium block"
                >
                  Crash Courses
                </a>
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
                href="https://www.facebook.com/profile.php?id=100005243536152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a
                href="https://t.me/Durjoy_Barua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a
                href="https://t.me/Durjoy_Barua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_25px_white]"
              >
                <FontAwesomeIcon icon={faTwitter} />
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

