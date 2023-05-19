import React from "react";

import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { AiOutlineArrowLeft } from "react-icons/ai";
const Blog8 = () => {
  return (
    <div className="blog1">
      <Container className="blog1_top">
        <div id="flexi_blog1">
          <Nav.Link className="blog1_link" as={Link} to="/blog">
            {/* <AiOutlineArrowLeft size={18} color=" hsl(39, 100%, 50%);" /> */}
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </Nav.Link>
          <h1 className="blog1_text">
            "Unlocking the Benefits of Online Education for Kids"
          </h1>
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
            src="https://i.ibb.co/Ns5tpKx/mjtt-gmi7-210901.jpg"
            alt=""
            style={{ minWidth: 100, maxWidth: 1300 }}
          />
          {/* <img src='https://i.ibb.co/LQXqFj4/blg-final.png'/>
{/* <img src='https://i.ibb.co/kxC7z42/blog.jpg' style={{
                                                     height:510}}/> */}
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Online education has become an increasingly popular option for
            parents who want to provide their children with quality education
            from the comfort of their own homes. With the rise of technology,
            kids can now access a wide range of educational resources and
            courses online. In this blog post, we will explore the benefits of
            online education for kids and how it can help them thrive
            academically.
          </p>
          <h1 className="blog1_point1">1. Flexibility:</h1>
          <p className="blog1_text">
            Online education offers parents and children the flexibility to
            learn at their own pace and on their own schedule. This means that
            kids can learn when they are most alert and focused, rather than
            being constrained by a fixed classroom schedule.
          </p>
          <img
            className="blog1_img1"
            src="https://i.ibb.co/Jkqtv1W/cvnn-5eqa-220905.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">2.Personalized Learning: </h1>
          <p className="blog1_text">
            Online education allows for personalized learning, where each child
            can learn according to their own strengths, weaknesses, and learning
            style. This tailored approach can help kids achieve their full
            potential and excel academically.
          </p>
          <img
            className="blog1_img2"
            src="https://i.ibb.co/kxTxqV2/ata4-c3te-220905.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">3.Wide Range of Resources: </h1>
          <p className="blog1_text">
            Online education provides access to a wide range of educational
            resources and courses that may not be available in traditional
            classrooms. Kids can explore different subjects and topics that
            interest them, and learn in a way that suits their individual needs.
          </p>
          <img
            className="blog1_img3"
            src="https://i.ibb.co/TMHyBTR/nytf-miov-210901.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <h1 className="blog1_point1">4.Safe Learning Environment:</h1>
          <p className="blog1_text">
            Online education provides a safe learning environment for kids, free
            from distractions and negative influences. Parents can rest assured
            that their children are learning in a secure and supportive
            environment.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/nwSf6vH/51825.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">5.Interactive Learning:</h1>
          <p className="blog1_text">
            Online education offers interactive learning opportunities, where
            kids can engage with teachers and other students in real-time. This
            can help them develop communication and collaboration skills, which
            are essential for their future academic and professional success.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/rynMGYg/3702965.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <p className="blog1_bottom">
            In conclusion, online education offers numerous benefits for kids,
            including flexibility, personalized learning, access to a wide range
            of resources, a safe learning environment, and interactive learning
            opportunities. As parents, it's important to explore different
            options and find the best educational resources for our children.
            With online education, kids can thrive academically and develop
            essential skills that will serve them well throughout their lives.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog8;
