import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SkillsMenu.css";
import { searchYoutube } from "../../YoutubeAPI";
import { UserContext } from "../../App";

function SkillsMenu() {
  const { state } = useContext(UserContext);
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleViewCoursesClick = async (event, query) => {
    event.preventDefault();
    
    if(state.isLoggedIn===true){
      const response = await searchYoutube(query);
      setResult(response);
      console.log(result);
      navigate("/skills-video-list", { state: { videos: response } });
    }
    else
    {
      alert("Please sign in to view videos.");
    }

  };

  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">Our Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-laptop-code"></i>
            </div>
            <h3 className="skill-title">Web Development</h3>
            <p className="skill-description">
              Learn how to build responsive and dynamic websites using the
              latest technologies like HTML, CSS, and JavaScript.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Web Development")}
            >
              {" "}
              View Courses{" "}
            </button>
          </div>

          {/* {result.map((video) => (
            <VideoCard video={video} />
          ))} */}

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-chart-bar"></i>
            </div>
            <h3 className="skill-title">Data Science</h3>
            <p className="skill-description">
              Discover how to analyze, visualize, and manipulate data using
              Python, R, and other popular data science tools and libraries.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Data Science")}
            >
              {" "}
              View Courses{" "}
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <h3 className="skill-title">Mobile Development</h3>
            <p className="skill-description">
              Build mobile applications for Android and iOS using React Native,
              Swift, or Kotlin and become a professional mobile developer.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Mobile Development")}
            >
              {" "}
              View Courses{" "}
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-camera"></i>
            </div>
            <h3 className="skill-title">Photography</h3>
            <p className="skill-description">
              Master the art of photography and learn how to capture stunning
              photos using the latest cameras and editing software.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Photography Basic")}
            >
              {" "}
              View Courses{" "}
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-paint-brush"></i>
            </div>
            <h3 className="skill-title">Art & Design</h3>
            <p className="skill-description">
              Explore the world of art and design and learn how to create
              beautiful designs, illustrations, and animations using various
              tools and techniques.
            </p>
            <button
              className="skill-button"
              onClick={(e) =>
                handleViewCoursesClick(e, "Design and Art Tutorial")
              }
            >
              {" "}
              View Courses{" "}
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-brain"></i>
            </div>
            <h3 className="skill-title">Machine Learning</h3>
            <p className="skill-description">
              Learn how to build intelligent systems and algorithms that can
              automatically improve their performance over time using the power
              of data and machine learning.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Machine Learning")}
            >
              {" "}
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="skill-title">Cybersecurity</h3>
            <p className="skill-description">
              Learn how to protect your computer, network, and data from cyber
              attacks.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Cybersecurity")}
            >
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-gamepad"></i>
            </div>
            <h3 className="skill-title">Game Development</h3>
            <p className="skill-description">
              Learn how to create your own video games using the latest tools
              and techniques.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Game Development")}
            >
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3 className="skill-title">Marketing</h3>
            <p className="skill-description">
              Learn how to create and execute effective marketing campaigns that
              will reach your target audience and achieve your business goals.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Marketing")}
            >
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-pen"></i>
            </div>
            <h3 className="skill-title">Writing and Communication</h3>
            <p className="skill-description">
              Improve your writing and communication skills so that you can
              communicate your ideas effectively in any situation.
            </p>
            <button
              className="skill-button"
              onClick={(e) =>
                handleViewCoursesClick(e, "Writing and Communication")
              }
            >
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <h3 className="skill-title">Project Management</h3>
            <p className="skill-description">
              Learn how to successfully manage projects of all sizes and
              complexity.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Project Management")}
            >
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <h3 className="skill-title">Entrepreneurship</h3>
            <p className="skill-description">
              Learn how to start and grow your own business.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Entrepreneurship")}
            >
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-globe"></i>
            </div>
            <h3 className="skill-title">Language Learning</h3>
            <p className="skill-description">
              Learn a new language and open up new opportunities for yourself.
            </p>
            <button
              className="skill-button"
              onClick={(e) => handleViewCoursesClick(e, "Language Learning")}
            >
              {" "}
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-money-bill-alt"></i>
            </div>
            <h3 className="skill-title">Finance and Investing</h3>
            <p className="skill-description">
              Learn how to manage your finances and make wise investments.
            </p>
            <button
              className="skill-button"
              onClick={(e) =>
                handleViewCoursesClick(e, "Finance and Investing")
              }
            >
              {" "}
              View Courses
            </button>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 className="skill-title">Leadership and Management</h3>
            <p className="skill-description">
              Develop your leadership and management skills so that you can be
              successful in your career.
            </p>
            <button
              className="skill-button"
              onClick={(e) =>
                handleViewCoursesClick(e, "Leadership and Management")
              }
            >
              {" "}
              View Courses
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsMenu;
