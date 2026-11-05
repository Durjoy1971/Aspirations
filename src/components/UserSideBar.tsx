"use client";

import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const UserSideBar: React.FC = () => {
  const { state } = useContext(UserContext);

  if (!state || !state.isLoggedIn || state.email === "durjoybarua1971@gmail.com") {
    return null;
  }

  return (
    <div className="relative z-[99999]">
      <div
        className="group fixed top-[130px] right-0 w-[90px] hover:w-[220px] py-[40px] px-[15px] flex flex-col justify-between items-center transition-all duration-500 rounded-l-2xl shadow-xl overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #f5a623 21.32%, #f55c47 130%)",
          opacity: 0.95,
        }}
      >
        <div className="flex flex-col items-center gap-4 w-full p-1 rounded-lg group-hover:bg-white/40 group-hover:backdrop-blur-sm transition-colors">
          {/* eslint-disable-next-js/no-img-element */}
          <img
            src="https://img.freepik.com/premium-vector/boy-with-dental-braces-dental-care-little-boy-portrait-circular-frame_254685-975.jpg?w=740"
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
            alt="User profile"
          />
          <div className="hidden group-hover:block text-center transition-all">
            <h2 className="text-white text-base font-semibold truncate max-w-[170px] drop-shadow">
              {state.userName || "User"}
            </h2>
            <p className="text-white/80 text-xs truncate max-w-[170px]">{state.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSideBar;

