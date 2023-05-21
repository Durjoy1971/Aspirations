import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Blog.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="blog">
      <Container className="blog_container_img">
        <img
          className="blog_banner_img"
          src="https://i.ibb.co/LQwjtHb/Blogging-removebg-preview.png"
          alt=""
        />
      </Container>
      <div className="blog_caro">
        <Slider {...settings}>
          <div className="blog_card">
            <img
              className="blog_img"
              src="https://i.ibb.co/cbbGZc8/pquy-9o2w-220905.jpg"
              alt=""
            />
            <button className="blog_btn">
              <Nav.Link className="blog_link" as={Link} to="/blog001">
                Programming{" "}
              </Nav.Link>
            </button>
            <h5 className="blog_text">Learn to Code: Beginner's Edition</h5>
            <p className="blog_text1">March 11,2023</p>
          </div>
          <div className="blog_card">
            <img
              className="blog_img"
              src="https://i.ibb.co/k9gL8gr/18140.jpg"
              alt=""
            />
            <button className="blog_btn">
              <Nav.Link className="blog_link" as={Link} to="/blog002">
                Data Science{" "}
              </Nav.Link>
            </button>
            <h5 className="blog_text">4 Key Points in Data Science</h5>
            <p className="blog_text1">March 09,2023</p>
          </div>
          <div className="blog_card">
            <img
              className="blog_img"
              src="https://i.ibb.co/8j3KLdB/4380747.jpg"
              alt=""
            />
            <button className="blog_btn">
              <Nav.Link className="blog_link" as={Link} to="/blog003">
                Web Development{" "}
              </Nav.Link>
            </button>
            <h5 className="blog_text">Key Points of Web Development</h5>
            <p className="blog_text1">May 11,2023</p>
          </div>
          <div className="blog_card">
            <img
              className="blog_img"
              src="https://i.ibb.co/hymHfDH/4428861.jpg"
              alt=""
            />
            <button className="blog_btn">
              <Nav.Link className="blog_link" as={Link} to="/blog004">
                Mobile Development{" "}
              </Nav.Link>
            </button>
            <h5 className="blog_text">The Essentials of Mobile Development</h5>
            <p className="blog_text1">Feb 11,2023</p>
          </div>
          <div className="blog_card">
            <img
              className="blog_img"
              src="https://i.ibb.co/ky2LFJ2/close-up-old-retro-things-shooted-with-vintage-style-colors-155003-38265.jpg"
              alt=""
            />
            <button className="blog_btn">
              <Nav.Link className="blog_link" as={Link} to="/blog005">
                Photography{" "}
              </Nav.Link>
            </button>
            <h5 className="blog_text">
              Exploring the Essentials of Photography
            </h5>
            <p className="blog_text1">March 1,2023</p>
          </div>
          <div className="blog_card">
            <img
              className="blog_img"
              src="https://i.ibb.co/ftgK8GM/splash-colorful-paints-happiness-abstraction-generative-ai-74760-4847.jpg"
              alt=""
            />
            <button className="blog_btn">
              <Nav.Link className="blog_link" as={Link} to="/blog006">
                Art & Design{" "}
              </Nav.Link>
            </button>
            <h5 className="blog_text">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The Essentials of
              Art and Design
            </h5>
            <p className="blog_text1">March11,2023</p>
          </div>
        </Slider>
      </div>

      <div className="blog_main_card">
        <img
          className="blog_main_img"
          src="https://i.ibb.co/vzNKwY7/3785210.jpg"
          alt=""
        />
        <h4 className="blog_main_text">
          Your One-Stop Learning Destination: Courses, Videos, and Tutorials
        </h4>
        <p className="blog_main_text1">
          Tag: Education{" "}
          <span className="blog_main_text2">Date: March 11 , 2023</span>
        </p>
        <p className="blog_main_text3">
          Welcome to our website, where you can access a comprehensive library
          of free courses and tutorials on programming, CSS, Photoshop, and much
          more. Our user-friendly platform makes it easy for you to learn
          anything you want without having to waste time searching for videos.
          With our website, you can unlock your potential and become a pro in no
          time! Start learning today and take your skills to the next level.
        </p>

        <button className="blog_main_btn">
          <Nav.Link className="blog_link" as={Link} to="/blog007">
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Nav.Link>
        </button>
      </div>

      <div className="blog_main_card">
        <img
          className="blog_main_img"
          src="https://i.ibb.co/Mf4f4sY/young-boy-studying-front-computer-1308-79636-1.jpg"
          alt=""
        />
        <h4 className="blog_main_text">
          Unlocking the Benefits of Online Education for Kids
        </h4>
        <p className="blog_main_text1">
          Tag: Education{" "}
          <span className="blog_main_text2">Date: May 1,2023</span>
        </p>
        <p className="blog_main_text3">
          Discover the advantages of online education for kids, from
          personalized learning to a safe and interactive environment. Explore
          the benefits of flexible schedules and access to a wide range of
          educational resources. With online education, kids can thrive
          academically and develop essential skills for their future
        </p>

        <button className="blog_main_btn">
          <Nav.Link className="blog_link" as={Link} to="/blog008">
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Nav.Link>
        </button>
      </div>

      <div className="blog_main_card">
        <img
          className="blog_main_img"
          src="https://i.ibb.co/9ZCwmzQ/31989.jpg"
          alt=""
        />
        <h4 className="blog_main_text">
          Time Management: Strategies for Utilizing Your Time Effectively
        </h4>
        <p className="blog_main_text1">
          Tag: Productivity{" "}
          <span className="blog_main_text2">Date: April 11,2023</span>
        </p>
        <p className="blog_main_text3">
          Discover practical strategies for managing your time effectively, from
          setting priorities to delegating tasks. Learn how to eliminate
          distractions, take regular breaks, and create a schedule that works
          for you. By utilizing these tips, you can make the most of your time
          and achieve your goals with greater easel.
        </p>

        <button className="blog_main_btn">
          <Nav.Link className="blog_link" as={Link} to="/blog009">
            Read More <FontAwesomeIcon icon={faArrowRight} />
          </Nav.Link>
        </button>
      </div>
    </div>
  );
};

export default Blog;
