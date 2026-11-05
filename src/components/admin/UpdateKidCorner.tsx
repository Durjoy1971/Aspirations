"use client";

import React, { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface KidItemWithId {
  id: string;
  idValue?: number | string;
  imageValue?: string;
  titleValue?: string;
  descriptionValue?: string;
  keywordValue?: string;
}

const UpdateKidCorner: React.FC = () => {
  const [courses, setCourses] = useState<KidItemWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const kidQuery = query(
        collection(db, "kidList"),
        orderBy("idValue", "asc")
      );
      const querySnapshot = await getDocs(kidQuery);
      const skillsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as any),
      }));
      setCourses(skillsData);
    } catch (error) {
      console.error("Error fetching courses: ", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSkill = async (id: string) => {
    if (!confirm("Are you sure you want to delete this course from Kid's Corner?")) return;
    try {
      await deleteDoc(doc(db, "kidList", id));
      alert("Video deleted successfully from Kid's Corner");
      fetchSkills();
    } catch (error) {
      console.error("Error deleting skill: ", error);
      alert("Failed to delete course");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 max-w-[1100px] mx-auto my-12 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Manage &amp; Delete Kid&apos;s Corner</h2>
        <p className="text-gray-500 mt-2">Active children courses stored in database</p>
      </div>

      {loading ? (
        <p className="text-center text-gray-500 py-8">Loading courses...</p>
      ) : courses.length === 0 ? (
        <p className="text-center text-gray-500 py-8">No kid courses currently in database.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#f9f9f9] border border-gray-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-full h-44 overflow-hidden bg-gray-200">
                  {/* eslint-disable-next-js/no-img-element */}
                  <img
                    src={course.imageValue}
                    alt={course.titleValue}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 truncate">
                    {course.titleValue}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {course.descriptionValue}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <button
                  onClick={() => handleDeleteSkill(course.id)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors cursor-pointer border-none shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpdateKidCorner;

