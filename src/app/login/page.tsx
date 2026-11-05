"use client";

import React, { useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { UserContext } from "@/context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage() {
  const { dispatch } = useContext(UserContext);
  const router = useRouter();

  const [isSignUpMode, setIsSignUpMode] = useState(false);

  // Sign In inputs
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  // Sign Up inputs
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Login | Aspiration";
  }, []);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      if (userCredential.user.emailVerified || userCredential.user.email === "durjoybarua1971@gmail.com") {
        alert("Sign In Successful");
        dispatch({
          type: "LOGIN",
          payload: {
            userName: userCredential.user.displayName || userCredential.user.email?.split("@")[0] || "",
            email: userCredential.user.email || "",
          },
        });
        router.push("/home");
      } else {
        alert("Please verify your email before logging in.");
      }
    } catch (error: any) {
      alert("Invalid email or password.");
      console.error(error);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: signUpUsername,
      });

      await sendEmailVerification(user);
      alert("Account Created Successfully! Please check your email to verify your account.");
      setSignUpUsername("");
      setSignUpEmail("");
      setSignUpPassword("");
      setIsSignUpMode(false);
    } catch (error: any) {
      let errorMessage = "An error occurred. Please try again later.";
      if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters long.";
      } else if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email address is already in use.";
      }
      alert(errorMessage);
      console.error(error);
    }
  };

  return (
    <div
      className={`relative w-full min-h-[90vh] overflow-hidden bg-white mt-[80px] transition-all duration-1000 ${
        isSignUpMode ? "sign-up-mode" : ""
      }`}
      style={{ minHeight: "88vh" }}
    >
      {/* Curved Animated Background Bubble */}
      <div
        className={`absolute h-[2000px] w-[2000px] rounded-full transition-transform duration-[1800ms] ease-in-out z-10 pointer-events-none hidden md:block ${
          isSignUpMode
            ? "translate-x-[100%] -translate-y-1/2 right-[52%]"
            : "-translate-y-1/2 right-[48%]"
        }`}
        style={{
          top: "-10%",
          backgroundImage: "linear-gradient(-45deg, #4481eb 0%, #04befe 100%)",
        }}
      />

      {/* Forms Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-full md:w-1/2 transition-all duration-1000 ease-in-out z-20 ${
            isSignUpMode ? "left-1/2 md:left-1/4 -translate-x-1/2" : "left-1/2 md:left-3/4 -translate-x-1/2"
          }`}
        >
          {/* Sign In Form */}
          <div
            className={`transition-all duration-500 px-6 sm:px-12 flex flex-col items-center justify-center ${
              isSignUpMode ? "opacity-0 pointer-events-none hidden" : "opacity-100"
            }`}
          >
            <form onSubmit={handleSignIn} className="w-full max-w-[380px] flex flex-col items-center">
              <h2 className="text-[32px] font-bold text-black mb-6">Sign in</h2>

              <div className="w-full bg-[#f0f0f0] rounded-[55px] h-[55px] flex items-center px-6 mb-4">
                <FontAwesomeIcon icon={faUser} className="text-[#acacac] text-lg mr-4" />
                <input
                  type="email"
                  placeholder="Email"
                  value={signInEmail}
                  required
                  onChange={(e) => setSignInEmail(e.target.value)}
                  className="bg-transparent border-none outline-none font-semibold text-gray-800 text-base w-full placeholder-gray-400"
                />
              </div>

              <div className="w-full bg-[#f0f0f0] rounded-[55px] h-[55px] flex items-center px-6 mb-6">
                <FontAwesomeIcon icon={faLock} className="text-[#acacac] text-lg mr-4" />
                <input
                  type="password"
                  placeholder="Password"
                  value={signInPassword}
                  required
                  onChange={(e) => setSignInPassword(e.target.value)}
                  className="bg-transparent border-none outline-none font-semibold text-gray-800 text-base w-full placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-[150px] h-[49px] bg-[#5995fd] hover:bg-[#4d84e2] text-white font-semibold rounded-[49px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Login
              </button>
            </form>
          </div>

          {/* Sign Up Form */}
          <div
            className={`transition-all duration-500 px-6 sm:px-12 flex flex-col items-center justify-center ${
              !isSignUpMode ? "opacity-0 pointer-events-none hidden" : "opacity-100"
            }`}
          >
            <form onSubmit={handleSignUp} className="w-full max-w-[380px] flex flex-col items-center">
              <h2 className="text-[32px] font-bold text-black mb-6">Create Account</h2>

              <div className="w-full bg-[#f0f0f0] rounded-[55px] h-[55px] flex items-center px-6 mb-4">
                <FontAwesomeIcon icon={faUser} className="text-[#acacac] text-lg mr-4" />
                <input
                  type="text"
                  placeholder="Username"
                  value={signUpUsername}
                  required
                  onChange={(e) => setSignUpUsername(e.target.value)}
                  className="bg-transparent border-none outline-none font-semibold text-gray-800 text-base w-full placeholder-gray-400"
                />
              </div>

              <div className="w-full bg-[#f0f0f0] rounded-[55px] h-[55px] flex items-center px-6 mb-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#acacac] text-lg mr-4" />
                <input
                  type="email"
                  placeholder="Email"
                  value={signUpEmail}
                  required
                  onChange={(e) => setSignUpEmail(e.target.value)}
                  className="bg-transparent border-none outline-none font-semibold text-gray-800 text-base w-full placeholder-gray-400"
                />
              </div>

              <div className="w-full bg-[#f0f0f0] rounded-[55px] h-[55px] flex items-center px-6 mb-6">
                <FontAwesomeIcon icon={faLock} className="text-[#acacac] text-lg mr-4" />
                <input
                  type="password"
                  placeholder="Password"
                  value={signUpPassword}
                  required
                  onChange={(e) => setSignUpPassword(e.target.value)}
                  className="bg-transparent border-none outline-none font-semibold text-gray-800 text-base w-full placeholder-gray-400"
                />
              </div>

              <button
                type="submit"
                className="w-[150px] h-[49px] bg-[#5995fd] hover:bg-[#4d84e2] text-white font-semibold rounded-[49px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Side Panels (Switchers) */}
      <div className="hidden md:grid absolute top-0 left-0 w-full h-full grid-cols-2 z-20 pointer-events-none">
        {/* Left Panel */}
        <div
          className={`flex flex-col items-center justify-around text-center px-12 transition-all duration-1000 ${
            isSignUpMode ? "-translate-x-[800px] pointer-events-none" : "translate-x-0 pointer-events-auto"
          }`}
        >
          <div className="text-white max-w-[320px]">
            <h3 className="text-[28px] font-semibold mb-2">New here ?</h3>
            <p className="text-sm opacity-90 mb-4">
              Click the sign-up button to create your account and explore our website.
            </p>
            <button
              onClick={() => setIsSignUpMode(true)}
              className="bg-transparent border-2 border-white text-white font-semibold py-2 px-8 rounded-full text-sm hover:bg-white hover:text-[#4481eb] transition-all cursor-pointer"
            >
              Sign up
            </button>
          </div>
          {/* eslint-disable-next-js/no-img-element */}
          <img
            src="https://raw.githubusercontent.com/Durjoy1971/image-storing-for-project/d487a194e9fa133f62e06ef44bf1644ddfa68505/log.svg?token=AVZYKT6SIQWXOK5TLLQLHGTEJCVI2"
            alt="Sign in illustration"
            className="w-[280px] max-w-full"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
        </div>

        {/* Right Panel */}
        <div
          className={`flex flex-col items-center justify-around text-center px-12 transition-all duration-1000 ${
            isSignUpMode ? "translate-x-0 pointer-events-auto" : "translate-x-[800px] pointer-events-none"
          }`}
        >
          <div className="text-white max-w-[320px]">
            <h3 className="text-[28px] font-semibold mb-2">One of us ?</h3>
            <p className="text-sm opacity-90 mb-4">
              Click the sign-in button to log-in to our website.
            </p>
            <button
              onClick={() => setIsSignUpMode(false)}
              className="bg-transparent border-2 border-white text-white font-semibold py-2 px-8 rounded-full text-sm hover:bg-white hover:text-[#4481eb] transition-all cursor-pointer"
            >
              Sign in
            </button>
          </div>
          {/* eslint-disable-next-js/no-img-element */}
          <img
            src="https://raw.githubusercontent.com/Durjoy1971/image-storing-for-project/d487a194e9fa133f62e06ef44bf1644ddfa68505/register.svg?token=AVZYKT4DAXBPGSTRKJEUCBDEJCVG4"
            alt="Sign up illustration"
            className="w-[280px] max-w-full"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Mobile toggle switch */}
      <div className="md:hidden absolute bottom-6 w-full flex justify-center z-30">
        <button
          onClick={() => setIsSignUpMode(!isSignUpMode)}
          className="text-blue-600 font-semibold underline text-sm"
        >
          {isSignUpMode ? "Already have an account? Sign in" : "New here? Create an account"}
        </button>
      </div>
    </div>
  );
}
