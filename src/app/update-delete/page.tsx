"use client";

import React, { useEffect } from "react";
import UpdateSkill from "@/components/admin/UpdateSkill";
import UpdateKidCorner from "@/components/admin/UpdateKidCorner";

export default function UpdateDataPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Delete & Update | Aspiration Admin";
  }, []);

  return (
    <div className="pt-[140px] pb-[100px] px-4 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Admin Portal: Delete Courses
        </h1>
        <UpdateSkill />
        <UpdateKidCorner />
      </div>
    </div>
  );
}

