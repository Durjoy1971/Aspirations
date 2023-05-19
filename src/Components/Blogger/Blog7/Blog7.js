import React from "react";

import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { AiOutlineArrowLeft } from "react-icons/ai";
const Blog7 = () => {
  return (
    <div className="blog1">
      <Container className="blog1_top">
        <div id="flexi_blog1">
          <Nav.Link className="blog1_link" as={Link} to="/blog">
            {/* <AiOutlineArrowLeft size={18} color=" hsl(39, 100%, 50%);" /> */}
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </Nav.Link>
          <h1 className="blog1_text">"The Essentials of Mobile Development"</h1>
          <div className="blog1_img_contain">
            <img
              className="blog1_img"
              src="https://i.ibb.co/Q8kbwcH/durjoy.jpg"
              alt=""
            />
            <h4 className="blog1_img_title">Durjoy Barua</h4>
            <h6 className="blog1_img_title1">FullStack Developer</h6>
          </div>
        </div>
        <div id="flexi_blog1_1">
          <img
            src="https://i.ibb.co/R0gg08z/29493.jpg"
            alt=""
            style={{ minWidth: 100, maxWidth: 1300 }}
          />
          {/* <img src='https://i.ibb.co/LQXqFj4/blg-final.png'/>
{/* <img src='https://i.ibb.co/kxC7z42/blog.jpg' style={{
                                                     height:510}}/> */}
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Our website is an online learning platform that provides free
            courses and tutorials on a variety of topics, including programming,
            CSS, Photoshop, and more. Our mission is to make learning accessible
            and easy for anyone, regardless of their skill level or experience.
            In this blog post, we will explore the key features of our website
            and the benefits of using our platform.
          </p>
          <h1 className="blog1_point1">1. Comprehensive Library:</h1>
          <p className="blog1_text">
            Our website offers a comprehensive library of courses and tutorials
            on a wide range of topics. Whether you are a beginner or an expert,
            you can find courses that match your skill level and interests.
          </p>
          <img
            className="blog1_img1"
            src="https://i.ibb.co/NxWk8hp/people-education-online-with-computer-illustration-design-24877-63616.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">2.User-Friendly Platform: </h1>
          <p className="blog1_text">
            Our website is designed to be user-friendly and easy to navigate.
            You can access courses and tutorials with just a few clicks, and our
            intuitive interface makes it easy to find what you are looking for.
          </p>
          <img
            className="blog1_img2"
            src="https://i.ibb.co/ws12Qt4/visual-teenager-reading-book-mobile-phone-educate-learing-online-concept-design-isometric-illustrati.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">3.Free Access: </h1>
          <p className="blog1_text">
            All of our courses and tutorials are available for free, which means
            that anyone can access them without having to pay a dime. We believe
            that education should be accessible to everyone, and our platform
            reflects that commitment.
          </p>
          <img
            className="blog1_img3"
            src="https://i.ibb.co/Z1wjYL2/media-content-management-vlogging-activities-product-videos-sharing-online-marketing-advertising-too.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <h1 className="blog1_point1">4.Quality Content:</h1>
          <p className="blog1_text">
            Our courses and tutorials are created by experts in their respective
            fields. We ensure that all of our content is of the highest quality,
            so you can be confident that you are learning from the best.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/1Kmz97y/student-girl-with-laptop-dreams-diploma-255494-102.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">5.Flexibility:</h1>
          <p className="blog1_text">
            Our website offers flexibility in terms of when and where you can
            learn. You can access our courses and tutorials from anywhere, at
            any time, and on any device. This means that you can learn at your
            own pace, according to your own schedule.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/FHTWv61/social-network-teamwork-vector-concept-81522-387.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <p className="blog1_bottom">
            Our website is a valuable resource for anyone who wants to learn new
            skills or improve their existing ones. With our comprehensive
            library, user-friendly platform, free access, quality content, and
            flexibility, we make learning easy and accessible for everyone.
            Start exploring our courses and tutorials today, and unlock your
            potential to become a pro in no time!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog7;
