"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faTelegram,
  faWhatsapp,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for getting in touch! We will respond shortly.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-[80px] pb-[50px] text-white"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.952)",
        fontFamily: "var(--font-josefin)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[40px] md:text-[50px] font-medium text-[#bbbbbb] pb-2 border-b border-yellow-400 inline-block">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info */}
          <div className="lg:col-span-5">
            <h3 className="text-[#bbbbbb] text-[35px] font-medium mb-6">Get in touch</h3>

            <address className="not-italic text-lg space-y-4">
              <p>
                <strong className="text-[#f9004d] text-[18px]">
                  Email: <span className="text-yellow-400 font-light">ASPIRATION@gmail.com</span>
                </strong>
              </p>
              <p>
                <strong className="text-[#f9004d] text-[18px]">
                  Phone: <span className="text-yellow-400 font-light">01815823481</span>
                </strong>
              </p>
            </address>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://www.facebook.com/profile.php?id=100005243536152"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center bg-white/20 rounded-full text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-125 hover:shadow-[0_0_25px_white]"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://github.com/Durjoy1971"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center bg-white/20 rounded-full text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-125 hover:shadow-[0_0_25px_white]"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://t.me/Durjoy_Barua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center bg-white/20 rounded-full text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-125 hover:shadow-[0_0_25px_white]"
                aria-label="Telegram"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </a>
              <a
                href="https://t.me/Durjoy_Barua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center bg-white/20 rounded-full text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-125 hover:shadow-[0_0_25px_white]"
                aria-label="WhatsApp"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://t.me/Durjoy_Barua"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[45px] h-[45px] flex items-center justify-center bg-white/20 rounded-full text-white transition-all duration-700 hover:bg-white hover:text-black hover:scale-125 hover:shadow-[0_0_25px_white]"
                aria-label="Snapchat"
              >
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7 flex items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/10 border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 rounded-none text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 rounded-none text-base"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={5}
                  required
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/10 border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 rounded-none text-base"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-3 rounded-none transition-colors duration-300 font-semibold tracking-wider uppercase text-sm cursor-pointer"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

