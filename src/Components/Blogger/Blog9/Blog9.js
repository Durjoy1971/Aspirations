import React from "react";

import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Blog9 = () => {
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
            src="https://i.ibb.co/bHPrnpn/4903406.jpg"
            alt=""
            style={{ minWidth: 100, maxWidth: 1300 }}
          />
          {/* <img src='https://i.ibb.co/LQXqFj4/blg-final.png'/>
{/* <img src='https://i.ibb.co/kxC7z42/blog.jpg' style={{
                                                     height:510}}/> */}
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Time is a valuable resource, and how we utilize it can determine our
            success in life. We all have 24 hours in a day, but some people seem
            to accomplish more than others. In this blog post, we will explore
            some tips and strategies for utilizing our time effectively and
            achieving our goals.
          </p>
          <h1 className="blog1_point1">1. Set Priorities:</h1>
          <p className="blog1_text">
            Start by identifying your most important tasks and setting
            priorities. Focus on completing the tasks that will have the
            greatest impact on your goals and objectives.
          </p>
          <img
            className="blog1_img1"
            src="https://i.ibb.co/3zP4yxB/45227.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">2.Create a Schedule: </h1>
          <p className="blog1_text">
            Create a schedule for your day, week, or month, and stick to it as
            much as possible. This will help you stay on track and make the most
            of your time
          </p>
          <img
            className="blog1_img2"
            src="https://i.ibb.co/pw53Tww/6234265.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">3.Eliminate Distractions: </h1>
          <p className="blog1_text">
            Identify the things that distract you the most and try to eliminate
            them. This might include turning off your phone, closing your email,
            or finding a quiet space to work.
          </p>
          <img
            className="blog1_img3"
            src="https://i.ibb.co/WsmpnMH/3681597.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <h1 className="blog1_point1">4.Take Breaks:</h1>
          <p className="blog1_text">
            It's important to take regular breaks to avoid burnout and maintain
            productivity. This might include going for a walk, doing some
            stretching exercises, or taking a power nap.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/MSGv6KS/4436053.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">5.Learn to Say No:</h1>
          <p className="blog1_text">
            Saying no to unnecessary commitments can free up more time for the
            things that matter most. Be selective about the tasks and projects
            you take on, and focus on those that align with your goals.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/mF2Wv6N/4097791.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">6.Delegate Tasks: </h1>
          <p className="blog1_text">
            If possible, delegate tasks to others to free up more time for the
            things that require your attention. This might include hiring a
            virtual assistant or delegating tasks to colleagues or family
            members.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/q9SZMj4/2109-q708-020-S-m012-c10-politicians-round-table-flat.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <p className="blog1_bottom">
            In conclusion, utilizing our time effectively is essential for
            achieving our goals and living a fulfilling life. By setting
            priorities, creating a schedule, eliminating distractions, taking
            breaks, learning to say no, and delegating tasks, we can make the
            most of our time and achieve greater success. It's important to
            remember that time is a limited resource, and we must use it wisely
            to make the most of our lives.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog9;
