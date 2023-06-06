import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SkillsMenu.css";
import { searchYoutube } from "../../YoutubeAPI";
import { UserContext } from "../../App";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

function SkillsMenu() {
  const { state } = useContext(UserContext);
  const [result, setResult] = useState([]);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCourses();
    document.title = "Skills | Aspiration";
    return () => {
      document.title = "Skills | Aspiration";
    };
  }, []);

  const fetchCourses = async () => {
    try {
      const skillQuery = query(
        collection(db, "SkillList"),
        orderBy("idValue", "asc")
      );
      const querySnapshot = await getDocs(skillQuery);
      const coursesData = querySnapshot.docs.map((doc) => doc.data());
      setCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses: ", error);
    }
  };

  const handleViewCoursesClick = async (event, query) => {
    event.preventDefault();

    // Redundent Code --> Durjoy1971

    if (state.isLoggedIn === true) {
      const response = await searchYoutube(query);
      setResult(response);
      console.log(result);
      navigate("/skills-video-list", { state: { videos: response } });
    } else {
      alert("Please sign in to view videos.");
    }
  };

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {courses.map((course) => (
            <div className="skill-card" key={course.idValue}>
              <div className="skill-icon">
                <i className={course.iconValue}></i>
              </div>
              <h3 className="skill-title">{course.titleValue}</h3>
              <p className="skill-description">{course.descriptionValue}</p>
              <button
                className="skill-button"
                onClick={(e) => handleViewCoursesClick(e, course.keywordValue)}
              >
                {" "}
                View Courses{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsMenu;
