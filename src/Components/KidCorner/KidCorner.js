import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import "./MaAbout.css";

const MaAbout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="maabout">
      <Container className="maabout_1">
        <div className="row_maabout">
          <div className="col" id="flexi_maabout_1">
            <h4 className="maabout_text1"> Aspiration</h4>
            <h1 className="maabout_text2">
              Start Your
              <br />
              Journey With
              <br />
              Us
            </h1>
            <h4 className="maabout_text3">Online Courses</h4>
            <p className="maabout_text4">
              We provideyou free online courses with high-quality video content.
              Which is a great way to o learn new skills without having to
              search for the best videos by yourselves
            </p>
            {/* <p className="maabout_icon">
              <SiGmail size={30} /> <AiFillFacebook size={30} />
              <AiFillInstagram size={30} /> <AiFillLinkedin size={30} />
            </p> */}
          </div>
          <div className="col" id="flexi_maabout_1">
            <img
              src="https://i.ibb.co/2KpZXzk/woman-attending-online-class.jpg"
              alt=""
              style={{
                width: 630,
              }}
            />
          </div>
        </div>
      </Container>

      <Container className="maabout_2">
        <h1 className="maabout_text5"> Learn and Explore with Our Website</h1>
        <h5 className="maabout_text6">
          In the digital age, online learning platforms are revolutionizing the
          way students access education. Our website is one such platform that
          offers free video lessons for class 1 to 5 students, an array of
          skill-building courses, and a dedicated section for kids' learning. In
          this blog, we'll explore three key features of our website that make
          it a valuable tool for learners of all ages.
        </h5>
      <h2 className="maabout_text7">Empowering Students:</h2>
        <h5 className="maabout_text8">
        Empowering Students: Life Guidance and Motivational Insights for Success" is a comprehensive program designed to equip students with the necessary tools and knowledge to navigate their journey through life. Through a series of engaging and thought-provoking videos, we inspire and motivate students by sharing valuable insights on making informed decisions, setting goals, and developing crucial life skills. Our aim is to empower students to make positive choices, embrace personal growth, and unlock their full potential, ultimately leading them towards a successful and fulfilling future
        </h5>
        <img
          className="maabout_img1"
          src="https://i.ibb.co/GnrYdJW/19198407-removebg-preview.png"
          alt=""
          style={{
            width: 630,
          }}
        />
        <h2 className="maabout_text7">Skill-Building Courses:</h2>
        <h5 className="maabout_text8">
          Our website's skill-building section is a treasure trove of courses
          aimed at enhancing learners' skill sets. From programming and
          languages to English grammar and CSS, we offer a range of courses to
          cater to learners' diverse needs. Our courses are designed to be
          self-paced, allowing learners to study at their own pace and
          convenience.
        </h5>
        <img
          className="maabout_img1"
          src="https://i.ibb.co/rGYFGc9/22-removebg-preview.png"
          alt=""
          style={{
            width: 630,
          }}
        />
        <h2 className="maabout_text7">Kids' Corner:</h2>
        <h5 className="maabout_text8">
          Our website's kids' corner is a dedicated section for children's
          learning. It offers a range of courses specially designed for young
          learners, including kid's programming, kids' grammar, and coding
          courses like beginner CSS and HTML. The courses are designed to be
          interactive and fun, making learning enjoyable for children.
        </h5>
        <img
          className="maabout_img1"
          src="https://i.ibb.co/Y3xFs1N/www.png"
          alt=""
          style={{
            width: 630,
          }}
        />

<h2 className="maabout_text7">Blog:</h2>
        <h5 className="maabout_text8">
        Insights and Skills for Student Success" is a blog dedicated to providing valuable guidance and practical advice to students as they embark on their career journey. With a focus on essential skills and life lessons, our blog equips students with the knowledge and tools necessary to make informed decisions about their career choices. Whether it's exploring different career paths, honing transferable skills, or understanding the demands of various industries, our blog serves as a trusted resource to help students build a solid foundation for a successful and fulfilling career.

        </h5>
        <img
          className="maabout_img1"
          src="https://i.ibb.co/wWCS03s/3963180-removebg-preview.png"
          alt=""
          style={{
            width: 630,
          }}
        />
        <h5 className="maabout_text9">
          In conclusion, our website is a comprehensive online learning platform
          that caters to learners of all ages. From class 1 to 5 video lessons
          to skill-building courses and a dedicated section for kids' learning,
          we offer a range of educational resources and activities to suit every
          learner's needs. With our easy-to-use platform and engaging content,
          learners can explore and learn in a fun and interactive way.
        </h5>
      </Container>

      <div className="developers_container">
        <div className="developers_title">
          <h1>
            <b>Behind The Project</b>
          </h1>
        </div>
        <div className="developer">
          <div className="part1">
            <div className="dev_img">
              <img
                src="https://i.ibb.co/h7T1c0g/profile-pic-4.png"
                alt=""
                className="dev_card_img"
              />
            </div>
            <div className="dev_about">
              <p className="dev_name">Md. Mahtab Uddin</p>
              <p className="dev_role">Frontend Developer</p>
              <p className="dev_intro">
                Passionate web designer specializing in front-end development,
                dedicated to crafting visually stunning and user-friendly
                websites
              </p>
            </div>
          </div>
          <div className="part2">
            <div className="dev_img">
              <img
                src="https://i.ibb.co/23Nmdgm/photo-2023-04-25-19-46-13.jpg"
                alt=""
                className="dev_card_img"
              />
            </div>
            <div className="dev_about">
              <p className="dev_name">Durjoy Barua</p>
              <p className="dev_role">FullStack Developer</p>
              <p className="dev_intro">
                Passionate competitive programmer and full-stack web developer,
                dedicated to coding and love to create visually stunning, user-friendly and dynamic websites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaAbout;