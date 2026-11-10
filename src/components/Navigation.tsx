"use client";

import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { UserContext } from "@/context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { searchYoutube } from "@/lib/youtube";

const Navigation: React.FC = () => {
  const { state, dispatch } = useContext(UserContext);
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
        alert("Log out successful");
        router.push("/home");
      })
      .catch((error) => console.log(error));
  };

  const handleViewCoursesClick = async (e: React.MouseEvent, query: string) => {
    e.preventDefault();
    if (state.isLoggedIn) {
      const response = await searchYoutube(query);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("skill_videos", JSON.stringify(response));
      }
      router.push("/skills-video-list");
    } else {
      router.push("/login");
    }
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
      setShowGoTop(window.scrollY >= 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header
        style={{
          background: scrolled
            ? "hsl(210, 17%, 98%)"
            : "linear-gradient(90deg, hsl(38, 100%, 98%) 21.32%, hsl(144, 45%, 98%) 130%)",
          paddingTop: scrolled ? "20px" : "25px",
          paddingBottom: scrolled ? "20px" : "25px",
          paddingLeft: "min(16.8vw, 120px)",
          paddingRight: "min(8vw, 80px)",
          boxShadow: scrolled ? "0 1px 3px hsla(0, 0%, 0%, 0.1)" : "none",
        }}
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link href="/home" className="flex-shrink-0">
            <Image
              src="/images/3RPhwRx/logo003.png"
              alt="Aspiration logo"
              width={220}
              height={55}
              priority
              className="object-contain w-[15vw] min-w-[200px] h-auto"
            />
          </Link>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-gray-700 p-2 rounded focus:outline-none"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="text-2xl" />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link
              href="/home"
              className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors"
              style={{ fontFamily: "var(--font-rubik)" }}
            >
              Home
            </Link>
            <Link
              href={state.isLoggedIn ? "/skills" : "/login"}
              className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors"
              style={{ fontFamily: "var(--font-rubik)" }}
            >
              Skills
            </Link>
            <Link
              href={state.isLoggedIn ? "/kids" : "/login"}
              className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors"
              style={{ fontFamily: "var(--font-rubik)" }}
            >
              Kid&apos;s Corner
            </Link>
            <Link
              href="/blog"
              className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors"
              style={{ fontFamily: "var(--font-rubik)" }}
            >
              Blog
            </Link>
            <button
              onClick={(e) => handleViewCoursesClick(e, "motivation madness")}
              className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors text-left bg-transparent border-none cursor-pointer"
              style={{ fontFamily: "var(--font-rubik)" }}
            >
              Life and Teachings
            </button>
          </nav>

          {/* Desktop Auth Links */}
          <div className="hidden xl:flex items-center gap-4">
            {state.isLoggedIn ? (
              <button
                onClick={handleSignOut}
                className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors bg-transparent border-none cursor-pointer"
                style={{ fontFamily: "var(--font-rubik)" }}
              >
                LogOut
              </button>
            ) : (
              <>
                <Link
                  href="/login"
                  className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors"
                  style={{ fontFamily: "var(--font-rubik)" }}
                >
                  Log In
                </Link>
                <Link
                  href="/AdminLogin"
                  className="durjoy text-black font-medium text-[15px] py-4 px-2 hover:text-[#555] transition-colors"
                  style={{ fontFamily: "var(--font-rubik)" }}
                >
                  Admin
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white shadow-lg mt-3 p-4 rounded-lg flex flex-col gap-3">
            <Link
              href="/home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black font-medium text-[15px] py-2 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              href={state.isLoggedIn ? "/skills" : "/login"}
              onClick={() => setMobileMenuOpen(false)}
              className="text-black font-medium text-[15px] py-2 border-b border-gray-100"
            >
              Skills
            </Link>
            <Link
              href={state.isLoggedIn ? "/kids" : "/login"}
              onClick={() => setMobileMenuOpen(false)}
              className="text-black font-medium text-[15px] py-2 border-b border-gray-100"
            >
              Kid&apos;s Corner
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-black font-medium text-[15px] py-2 border-b border-gray-100"
            >
              Blog
            </Link>
            <button
              onClick={(e) => handleViewCoursesClick(e, "motivation madness")}
              className="text-left text-black font-medium text-[15px] py-2 border-b border-gray-100 bg-transparent border-none cursor-pointer"
            >
              Life and Teachings
            </button>
            {state.isLoggedIn ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleSignOut();
                }}
                className="text-left text-red-600 font-medium text-[15px] py-2"
              >
                LogOut
              </button>
            ) : (
              <div className="flex gap-4 pt-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-blue-600 font-medium text-[15px]"
                >
                  Log In
                </Link>
                <Link
                  href="/AdminLogin"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 font-medium text-[15px]"
                >
                  Admin
                </Link>
              </div>
            )}
          </div>
        )}
      </header>

      {/* Back to top button */}
      <a
        href="#top"
        onClick={scrollToTop}
        className={`go-top ${showGoTop ? "active" : ""}`}
        aria-label="Back to top"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </>
  );
};

export default Navigation;
