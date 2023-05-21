import React, { useContext, useEffect, useState } from "react";
import "./KidCorner.css";
import { useNavigate } from "react-router-dom";
import { searchYoutube } from "../../YoutubeAPI";
import { UserContext } from "../../App";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const KidCorner = () => {
  const { state } = useContext(UserContext);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCourses();
  }, []);

  
  const fetchCourses = async () => {
    try {
      const skillQuery = query(
        collection(db, "kidList"),
        orderBy("idValue", "asc")
      );
      const querySnapshot = await getDocs(skillQuery);
      const coursesData = querySnapshot.docs.map((doc) => doc.data());
      console.log(coursesData);
      setCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses: ", error);
    }
  };

  const handleViewCoursesClick = async (event, query) => {
    event.preventDefault();
    console.log("Kids Corner " + query);
    if (state.isLoggedIn === true) {
      const response = await searchYoutube(query);
      navigate("/skills-video-list", { state: { videos: response } });
    } else {
      alert("Please sign in to view videos.");
    }
  };

  return (
    <div className="kid-corner">
      <div className="kid-corner-cards">
        {courses.map((course) => (
          <div className="kid-corner-card" key={course.idValue}>
            <div className="kid-corner-card-image">
              <img src={course.imageValue} alt={course.titleValue} />
            </div>
            <div className="kid-corner-card-content">
              <h3 className="kid-corner-card-title">{course.titleValue}</h3>
              <p className="kid-corner-card-description">
                {course.descriptionValue}
              </p>
              <button
                className="kid-corner-card-button"
                onClick={(e) => handleViewCoursesClick(e, course.keywordValue)}
              >
                View Videos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KidCorner;
