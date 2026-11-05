"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface SkillItemWithId {
  id: string;
  idValue?: number | string;
  iconValue?: string;
  titleValue?: string;
  descriptionValue?: string;
  keywordValue?: string;
}

const UpdateSkill: React.FC = () => {
  const [skills, setSkills] = useState<SkillItemWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const skillQuery = query(
        collection(db, "SkillList"),
        orderBy("idValue", "asc")
      );
      const querySnapshot = await getDocs(skillQuery);
      const skillsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));
      setSkills(skillsData);
    } catch (error) {
      console.error("Error fetching skills: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSkill = async (id: string) => {
    if (!confirm("Are you sure you want to delete this skill?")) return;
    try {
      await deleteDoc(doc(db, "SkillList", id));
      alert("Skill deleted successfully");
      fetchSkills();
    } catch (error) {
      console.error("Error deleting skill: ", error);
      alert("Failed to delete skill");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-[1100px] mx-auto my-12 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Manage &amp; Delete Skills</h2>
        <p className="text-gray-500 mt-2">Active skill categories stored in database</p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 py-8">Loading skills...</p>
      ) : skills.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No skills currently in database.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-[#f9f9f9] border border-gray-200 rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="text-3xl text-teal-600 mb-3 text-center">
                  <i className={skill.iconValue || "fa-solid fa-graduation-cap"}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {skill.titleValue}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 text-center">
                  {skill.descriptionValue}
                </p>
              </div>
              <button
                onClick={() => handleDeleteSkill(skill.id)}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer border-none shadow"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateSkill;
