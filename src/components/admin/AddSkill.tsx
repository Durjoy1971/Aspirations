"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

const AddSkill: React.FC = () => {
  const iconRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const keywordRef = useRef<HTMLInputElement>(null);

  const [nextId, setNextId] = useState<number | null>(null);

  useEffect(() => {
    fetchHighestId();
  }, []);

  const fetchHighestId = async () => {
    try {
      const skillQuery = query(
        collection(db, "SkillList"),
        orderBy("idValue", "desc"),
        limit(1)
      );
      const querySnapshot = await getDocs(skillQuery);

      if (querySnapshot.empty) {
        setNextId(1);
      } else {
        const highestId = parseInt(querySnapshot.docs[0].data().idValue);
        setNextId(isNaN(highestId) ? 1 : highestId + 1);
      }
    } catch (error) {
      console.error("Error fetching skills: ", error);
      setNextId(1);
    }
  };

  const handleAddSkill = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const idValue = nextId || 1;
      const iconValue = iconRef.current?.value || "";
      const titleValue = titleRef.current?.value || "";
      const descriptionValue = descriptionRef.current?.value || "";
      const keywordValue = keywordRef.current?.value || "";

      const newSkill = {
        idValue,
        iconValue,
        titleValue,
        descriptionValue,
        keywordValue,
      };

      await addDoc(collection(db, "SkillList"), newSkill);
      alert("Skill Added Successfully");

      if (iconRef.current) iconRef.current.value = "";
      if (titleRef.current) titleRef.current.value = "";
      if (descriptionRef.current) descriptionRef.current.value = "";
      if (keywordRef.current) keywordRef.current.value = "";

      fetchHighestId();
    } catch (error) {
      console.error("Error adding skill: ", error);
      alert("Failed to add skill");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-[1100px] mx-auto my-12 border border-gray-100">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold text-gray-900">Skill Section</h3>
        <p className="text-gray-500 mt-2">Add a new course category to the platform</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          {/* eslint-disable-next-js/no-img-element */}
          <img
            src="https://i.ibb.co/DGdxfqh/AddSkill.png"
            alt="Add Skill Illustration"
            className="w-full max-w-[420px] object-contain rounded-xl"
          />
        </div>

        <div>
          <form onSubmit={handleAddSkill} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Enter ID
              </label>
              <input
                type="text"
                value={nextId || ""}
                readOnly
                className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2.5 text-gray-600 outline-none cursor-not-allowed font-medium"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Enter Icon (FontAwesome class e.g. fa-brands fa-python)
              </label>
              <input
                ref={iconRef}
                type="text"
                placeholder="e.g. fa-brands fa-python"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Enter Title
              </label>
              <input
                ref={titleRef}
                type="text"
                placeholder="e.g. Python Programming"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Enter Description
              </label>
              <input
                ref={descriptionRef}
                type="text"
                placeholder="Course overview and objectives"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Enter YouTube Search Keyword
              </label>
              <input
                ref={keywordRef}
                type="text"
                placeholder="e.g. python programming full course"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>

            <button
              type="submit"
              className="fav-btn-primary w-full mt-4 text-center justify-center font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSkill;

