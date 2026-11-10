"use client";


import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";












// 
export default function Blog6Page() {
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
          <h1 className="blog1_text">"The Essentials of Art and Designt"</h1>
          <div className="blog1_img_contain">
            <Image className="blog1_img" src="/images/Q8kbwcH/durjoy.jpg" alt="Durjoy Barua" width={90} height={90} />
            <h4 className="blog1_img_title">Durjoy Barua</h4>
            <h6 className="blog1_img_title1">FullStack Developer</h6>
          </div>
        </div>
        <div id="flexi_blog1_1">
          <Image src="/images/4MYp9Z4/vibrant-yellow-peony-bouquet-symbolizes-spring-freshness-generated-by-ai-188544-11712.jpg" alt="Blog cover" width={1200} height={600} priority className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-md" />
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Art and design are forms of creative expression that have been a
            part of human culture for thousands of years. Art and design
            encompass a wide range of disciplines, including painting,
            sculpture, graphic design, fashion design, and architecture. In this
            blog post, we will explore the key points of art and design and
            their significance.
          </p>
          <h1 className="blog1_point1">1.Creativity:</h1>
          <p className="blog1_text">
            Creativity is the foundation of art and design. Creativity involves
            the ability to think outside the box and come up with original
            ideas. Creativity is essential for artists and designers to create
            works that are innovative and unique.
          </p>
          <Image className="blog1_img1" src="/images/n7HHJTz/colorful-painting-with-brush-it-1340-32188.jpg" alt="Section 1 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">2.Composition: </h1>
          <p className="blog1_text">
            Composition is the arrangement of elements in a work of art or
            design. Composition involves factors such as balance, contrast, and
            visual flow. Good composition is essential for creating works that
            are aesthetically pleasing and effective.
          </p>
          <Image className="blog1_img2" src="/images/6XTmtVk/colorful-paper-art-piece-that-has-word-it-1340-35458.jpg" alt="Section 2 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">3.Color Theory: </h1>
          <p className="blog1_text">
            Color theory is the study of how colors interact with each other.
            Color theory involves understanding concepts such as color
            temperature, color harmony, and color psychology. Color theory is
            critical for artists and designers to create works that effectively
            communicate their intended message.
          </p>
          <Image className="blog1_img3" src="/images/6PKX1LK/collection-colored-pencils-drawing-lemon-1340-29087.jpg" alt="Section 3 illustration" width={800} height={510} style={{ height: "auto" }} />
          <h1 className="blog1_point1">4.Materials and Tools:</h1>
          <p className="blog1_text">
            Materials and tools are essential for creating works of art and
            design. Different materials and tools have unique properties and
            require different techniques to work with. Understanding how to use
            materials and tools effectively is essential for artists and
            designers to bring their ideas to life.
          </p>
          <Image className="blog1_img4" src="/images/Ny9pkWy/colorful-set-items-including-pencil-notebook-pencil-marker-1340-29059.jpg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">5.History and Context: </h1>
          <p className="blog1_text">
            Art and design are influenced by historical and cultural contexts.
            Understanding the history and context of art and design can help
            artists and designers create works that are culturally relevant and
            meaningful.
          </p>
          <Image className="blog1_img4" src="/images/Nt1NfyD/handcrafted-memories-captured-photo-album-generated-by-ai-188544-10901.jpg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />
          <p className="blog1_bottom">
            Art and design are essential forms of creative expression that have
            shaped human culture for centuries. The key points of art and design
            include creativity, composition, color theory, materials and tools,
            and history and context. By mastering these essential skills and
            techniques, artists and designers can create works that are
            innovative, aesthetically pleasing, and culturally significant.
          </p>
        </div>
      </div>
    </div>
  );
};
