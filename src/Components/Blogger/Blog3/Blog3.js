import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { AiOutlineArrowLeft } from "react-icons/ai";
const Blog3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog1">
      <Container className="blog1_top">
        <div id="flexi_blog1">
          <Nav.Link className="blog1_link" as={Link} to="/blog">
            {/* <AiOutlineArrowLeft size={18} color=" hsl(39, 100%, 50%);" /> */}
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </Nav.Link>
          <h1 className="blog1_text">"Key Points of Web Development"</h1>
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
            src="https://i.ibb.co/M2KvjPp/18824957.jpg"
            alt=""
            style={{ minWidth: 100, maxWidth: 1300 }}
          />
          {/* <img src='https://i.ibb.co/LQXqFj4/blg-final.png'/>
{/* <img src='https://i.ibb.co/kxC7z42/blog.jpg' style={{
                                                     height:510}}/> */}
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Web development is the process of creating and maintaining websites,
            web applications, and other online solutions. It involves a wide
            range of skills and technologies, including HTML, CSS, JavaScript,
            and backend programming languages. In this blog post, we will
            discuss the key points of web development and its significance.
          </p>
          <h1 className="blog1_point1">1. Front-End Development:</h1>
          <p className="blog1_text">
            Front-end development is the process of creating the user interface
            and experience of a website. This includes designing layouts,
            implementing user interactions, and optimizing performance.
            Front-end developers use a variety of tools and technologies,
            including HTML, CSS, and JavaScript.
          </p>
          <img
            className="blog1_img1"
            src="https://i.ibb.co/9bgTQVn/3426526.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">2.Back-End Development: </h1>
          <p className="blog1_text">
            Back-end development is the process of creating the server-side
            components of a website. This includes creating and managing
            databases, implementing APIs, and handling server requests. Back-end
            developers use a variety of programming languages, such as PHP,
            Python, and Ruby.
          </p>
          <img
            className="blog1_img2"
            src="https://i.ibb.co/bs4zc20/backend-1.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">3.Full-Stack Development: </h1>
          <p className="blog1_text">
            Full-stack development involves both front-end and back-end
            development. Full-stack developers are responsible for designing and
            implementing both the user interface and the server-side components
            of a website. Full-stack development requires a broad range of
            skills and knowledge, including database management, server
            administration, and user experience design.
          </p>
          <img
            className="blog1_img3"
            src="https://i.ibb.co/rQ3fcVX/4884785.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <h1 className="blog1_point1">4.Content Management Systems (CMS):</h1>
          <p className="blog1_text">
            Content management systems are software applications that allow
            users to create and manage website content without requiring
            extensive technical knowledge. Popular CMS platforms include
            WordPress, Drupal, and Joomla. CMS systems are often used in web
            development to simplify the process of website creation and
            maintenance.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/grwtVPR/4855307.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">5.Web Development Frameworks: (CMS):</h1>
          <p className="blog1_text">
            Web development frameworks are pre-built libraries and tools that
            provide developers with a standardized set of features and
            functionality. This helps to speed up development time and ensure
            consistency across projects. Popular web development frameworks
            include React, Angular, and V
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/rycm16G/19198999.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <p className="blog1_bottom">
            Web development is a complex and rapidly evolving field that
            requires a diverse set of skills and technologies. The key points of
            web development include front-end development, back-end development,
            full-stack development, content management systems, and web
            development frameworks. By leveraging these tools and techniques,
            web developers can create high-quality websites and online solutions
            that meet the needs of businesses and organizations.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog3;
