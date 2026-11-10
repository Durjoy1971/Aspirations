"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { UserContext } from "@/context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const AdminSideBar: React.FC = () => {
  const { state } = useContext(UserContext);

  if (!state || state.email !== "durjoybarua1971@gmail.com") {
    return null;
  }

  return (
    <div className="relative z-[99999]">
      <div
        className="group fixed top-[130px] right-0 w-[90px] hover:w-[220px] py-[40px] px-[15px] flex flex-col justify-between items-center transition-all duration-500 rounded-l-2xl shadow-xl overflow-hidden text-yellow-300"
        style={{
          background: "linear-gradient(90deg, #3a3fdb 21.32%, #00c9a7 130%)",
          opacity: 0.95,
        }}
      >
        {/* User Card */}
        <div className="flex flex-col items-center gap-3 w-full p-2 rounded-lg group-hover:bg-black/30 group-hover:backdrop-blur-sm transition-colors">
          <Image
            src="/images/avatars/boy-with-braces-teeth-dental-care_254685-1461.jpg"
            className="w-14 h-14 rounded-full object-cover border-2 border-yellow-300 shadow-md"
            alt="Admin profile"
            width={56}
            height={56}
          />
          <div className="hidden group-hover:block text-center transition-all">
            <h2 className="text-yellow-300 text-base font-bold tracking-wider">ASPIRANT</h2>
            <p className="text-xs text-white/80">Administrator</p>
          </div>
        </div>

        {/* Links */}
        <ul className="list-none p-0 m-0 w-full mt-6 space-y-4">
          <li>
            <Link
              href="/update-delete"
              className="flex items-center gap-3 py-2 px-3 text-yellow-300 hover:text-white rounded-lg hover:bg-white/20 transition-all cursor-pointer"
            >
              <FontAwesomeIcon icon={faTrashCan} className="text-xl w-6 text-center text-yellow-300" />
              <p className="hidden group-hover:block text-base font-semibold whitespace-nowrap m-0">
                Delete
              </p>
            </Link>
          </li>
          <li>
            <Link
              href="/add"
              className="flex items-center gap-3 py-2 px-3 text-yellow-300 hover:text-white rounded-lg hover:bg-white/20 transition-all cursor-pointer"
            >
              <FontAwesomeIcon icon={faPlus} className="text-xl w-6 text-center text-yellow-300" />
              <p className="hidden group-hover:block text-base font-semibold whitespace-nowrap m-0">
                Add
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;

