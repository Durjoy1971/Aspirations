import React, { useEffect, useState } from "react";
import "./UpdateSkill.css";
import { collection, getDocs, deleteDoc, doc, query, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

const UpdateSkill = () => {
  const [skills, setSkills] = useState([]);

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
        ...doc.data(),
      }));
      setSkills(skillsData);
    } catch (error) {
      console.error("Error fetching skills: ", error);
    }
  };

  const handleDeleteSkill = async (id) => {
    try {
      await deleteDoc(doc(db, "SkillList", id.toString()));
      alert("Skill deleted successfully");
      fetchSkills();
    } catch (error) {
      console.error("Error deleting skill: ", error);
    }
  };

  return (
    <div className="update-skill-container">
      <div className="Update-Text">
        <h2>Delete Skills</h2>
      </div>

      <div className="skills-cards">
        {skills.map((skill) => (
          <div className="skills-card" key={skill.id}>
            <div className="skills-card-content">
              <div className="skill-icon">
                <i className={skill.iconValue}></i>
              </div>
              <h3 className="skills-title">{skill.titleValue}</h3>
              <p className="skills-description">{skill.descriptionValue}</p>
              <div className="skills-buttons">
                <button
                  className="delete-button"
                  onClick={() => handleDeleteSkill(skill.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateSkill;
