"use client";


import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";











// 
export default function Blog3Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog1">
      <div className="max-w-[1300px] mx-auto px-4 blog1_top">
        <div id="flexi_blog1">
          <Link className="blog1_link flex items-center gap-2" href="/blog">
            {/* <AiOutlineArrowLeft size={18} color=" hsl(39, 100%, 50%);" /> */}
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </Link>
          <h1 className="blog1_text">"Key Points of Web Development"</h1>
          <div className="blog1_img_contain">
            <Image className="blog1_img" src="/images/Q8kbwcH/durjoy.jpg" alt="Durjoy Barua" width={90} height={90} />
            <h4 className="blog1_img_title">Durjoy Barua</h4>
            <h6 className="blog1_img_title1">FullStack Developer</h6>
          </div>
        </div>
        <div id="flexi_blog1_1">
          <Image src="/images/M2KvjPp/18824957.jpg" alt="Blog cover" width={1200} height={600} priority className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-md" />
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
          <Image className="blog1_img1" src="/images/9bgTQVn/3426526.jpg" alt="Section 1 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">2.Back-End Development: </h1>
          <p className="blog1_text">
            Back-end development is the process of creating the server-side
            components of a website. This includes creating and managing
            databases, implementing APIs, and handling server requests. Back-end
            developers use a variety of programming languages, such as PHP,
            Python, and Ruby.
          </p>
          <Image className="blog1_img2" src="/images/bs4zc20/backend-1.jpg" alt="Section 2 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">3.Full-Stack Development: </h1>
          <p className="blog1_text">
            Full-stack development involves both front-end and back-end
            development. Full-stack developers are responsible for designing and
            implementing both the user interface and the server-side components
            of a website. Full-stack development requires a broad range of
            skills and knowledge, including database management, server
            administration, and user experience design.
          </p>
          <Image className="blog1_img3" src="/images/rQ3fcVX/4884785.jpg" alt="Section 3 illustration" width={800} height={510} style={{ height: "auto" }} />
          <h1 className="blog1_point1">4.Content Management Systems (CMS):</h1>
          <p className="blog1_text">
            Content management systems are software applications that allow
            users to create and manage website content without requiring
            extensive technical knowledge. Popular CMS platforms include
            WordPress, Drupal, and Joomla. CMS systems are often used in web
            development to simplify the process of website creation and
            maintenance.
          </p>
          <Image className="blog1_img4" src="/images/grwtVPR/4855307.jpg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">5.Web Development Frameworks: (CMS):</h1>
          <p className="blog1_text">
            Web development frameworks are pre-built libraries and tools that
            provide developers with a standardized set of features and
            functionality. This helps to speed up development time and ensure
            consistency across projects. Popular web development frameworks
            include React, Angular, and V
          </p>
          <Image className="blog1_img4" src="/images/rycm16G/19198999.jpg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />
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
      </div>
    </div>
  );
};
