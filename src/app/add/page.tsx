"use client";

import React, { useEffect } from "react";
import AddSkill from "@/components/admin/AddSkill";
import AddKidsCorner from "@/components/admin/AddKidsCorner";

export default function AddPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Add Course | Aspiration Admin";
  }, []);

  return (
    <div className="pt-[140px] pb-[100px] px-4 min-h-screen">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Admin Portal: Add New Courses
        </h1>
        <AddSkill />
        <AddKidsCorner />
      </div>
    </div>
  );
}
