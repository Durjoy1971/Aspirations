"use client";


import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";












// 
export default function Blog1Page() {
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
          <h1 className="blog1_text">"Learn to Code: Beginner's Edition"</h1>
          <div className="blog1_img_contain">
            <Image className="blog1_img" src="/images/Q8kbwcH/durjoy.jpg" alt="Durjoy Barua" width={90} height={90} />
            <h4 className="blog1_img_title">Durjoy Barua</h4>
            <h6 className="blog1_img_title1">FullStack Developer</h6>
          </div>
        </div>
        <div id="flexi_blog1_1">
          <Image src="/images/m8ZppcR/2.jpg" alt="Blog cover" width={1200} height={600} priority className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-md" />
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Are you interested in learning how to code, but don't know where to
            start? The world of programming can seem daunting to beginners, with
            its unfamiliar jargon and seemingly endless variety of languages and
            frameworks. But fear not! With a bit of guidance and a lot of
            practice, anyone can learn to code. Here are four key points to
            consider as you begin your journey as a beginner coder:
          </p>
          <h1 className="blog1_point1">
            1. Choose a language and stick with it
          </h1>
          <p className="blog1_text">
            There are dozens of programming languages to choose from, each with
            its own syntax and features. As a beginner, it's best to start with
            a language that's widely used and has a supportive community. Some
            popular options include Python, JavaScript, and Ruby. Once you've
            chosen a language, stick with it and focus on learning its
            fundamentals. Don't be tempted to jump from language to language too
            quickly, as this can be overwhelming and counterproductive
          </p>
          <Image className="blog1_img1" src="/images/2v2ZB2K/3.jpg" alt="Section 1 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">2. Practice, practice, practice</h1>
          <p className="blog1_text">
            As with any skill, the key to becoming a good programmer is to
            practice regularly. Start with simple exercises and gradually work
            your way up to more complex projects. There are many online
            resources available that provide coding challenges and exercises,
            such as HackerRank and Codewars. You can also practice by building
            your own projects, such as a website or a small game. The more you
            practice, the more comfortable you'll become with the language and
            the better your coding skills will become
          </p>
          <Image className="blog1_img2" src="/images/nrQZkZB/4.png" alt="Section 2 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">3.Learn from otherst</h1>
          <p className="blog1_text">
            Coding can be a solitary activity, but that doesn't mean you have to
            learn alone. Join online communities and forums where you can ask
            questions, get feedback on your code, and learn from more
            experienced programmers. Sites like Stack Overflow and GitHub are
            great resources for connecting with other coders and learning from
            their code. You can also attend coding meetups and conferences to
            network with other programmers in person.
          </p>
          <Image className="blog1_img3" src="/images/SVvvCcM/5.jpg" alt="Section 3 illustration" width={800} height={510} style={{ height: "auto" }} />
          <h1 className="blog1_point1">4. Have fun!</h1>
          <p className="blog1_text">
            Learning to code can be challenging, but it can also be incredibly
            rewarding. Don't forget to have fun and enjoy the process! Try to
            approach coding with a sense of curiosity and playfulness, and don't
            be afraid to experiment with new ideas and approaches. If you find
            yourself getting frustrated, take a break and come back to it later
            with a fresh perspective.
          </p>
          <Image className="blog1_img4" src="/images/mDb8D6B/6.jpg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />

          <p className="blog1_bottom">
            Learning to code can be a fulfilling and empowering experience, even
            for beginners. By choosing a language, practicing regularly,
            learning from others, and having fun, you can become a proficient
            programmer in no time. Don't be intimidated by the world of coding –
            with dedication and persistence, anyone can learn to code.
          </p>
        </div>
      </div>
    </div>
  );
};
