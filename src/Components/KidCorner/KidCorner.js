import React, { useContext, useEffect, useState } from "react";
import "./KidCorner.css";
import { useNavigate } from "react-router-dom";
import { searchYoutube } from "../../YoutubeAPI";
import { UserContext } from "../../App";

const KidCorner = () => {
  const { state} = useContext(UserContext);

  console.log(state.isLoggedIn);


  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewCoursesClick = async (event, query) => {
    event.preventDefault();
    if (state.isLoggedIn === true) {
      const response = await searchYoutube(query);
      setResult(response);
      console.log(result);
      navigate("/skills-video-list", { state: { videos: response } });
    } else {
      alert("Please sign in to view videos.");
    }
  };
  const courses = [
    {
      id: 1,
      title: "Arts & Crafts",
      image: "https://i.ibb.co/XzBQ2hS/Kid-Corner.png",
      description:
        "Join our fun arts and crafts classes for kids and explore your creativity!",
      keywords: "Arts & Crafts For Kids",
    },
    {
      id: 2,
      title: "Science Experiments",
      image: "https://i.ibb.co/R964Cjw/Kid-Corner02.jpg",
      description:
        "Discover the wonders of science through exciting experiments and hands-on activities!",
      keywords: "Science Experiments For Kids",
    },
    {
      id: 3,
      title: "Music Lessons",
      image: "https://i.ibb.co/LvrV7Nv/Kid-Corner031.png",
      description:
        "Learn to play musical instruments and express yourself through the power of music!",
      keywords: "Music Lessons For Kids",
    },
    {
      id: 4,
      title: "Outdoor Adventures",
      image: "https://i.ibb.co/NFmWxsD/Kid-Corner04.png",
      description:
        "Embark on exciting outdoor adventures and explore the wonders of nature.",
      keywords: "Outdoor Adventures For Kids",
    },
    {
      id: 5,
      title: "Storytelling Sessions",
      image: "https://i.ibb.co/48HrvLk/Kid-Corner05.png",
      description:
        " Dive into the magical world of storytelling and let your imagination soar.",
      keywords: "English Storytelling Sessions For Kids",
    },
    {
      id: 6,
      title: "Coding for Kids",
      image: "https://i.ibb.co/qRpZNzQ/Kid-Corner06.png",
      description:
        "Learn the basics of coding and create your own games and animations.",
      keywords: "Coding For Kids",
    },
  ];

  return (
    <div className="kid-corner">
      <div className="kid-corner-cards">
        {courses.map((course) => (
          <div className="kid-corner-card" key={course.id}>
            <div className="kid-corner-card-image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="kid-corner-card-content">
              <h3 className="kid-corner-card-title">{course.title}</h3>
              <p className="kid-corner-card-description">
                {course.description}
              </p>
              <button
                className="kid-corner-card-button"
                onClick={(e) => handleViewCoursesClick(e, course.keywords)}
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
