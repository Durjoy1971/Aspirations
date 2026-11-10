"use client";


import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";












// 
export default function Blog5Page() {
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
          <h1 className="blog1_text">
            "Exploring the Essentials of Photography"
          </h1>
          <div className="blog1_img_contain">
            <Image className="blog1_img" src="/images/Q8kbwcH/durjoy.jpg" alt="Durjoy Barua" width={90} height={90} />
            <h4 className="blog1_img_title">Durjoy Barua</h4>
            <h6 className="blog1_img_title1">FullStack Developer</h6>
          </div>
        </div>
        <div id="flexi_blog1_1">
          <Image src="/images/rZswsNF/professional-camera-blurred.jpg" alt="Blog cover" width={1200} height={600} priority className="w-full max-w-[1200px] h-auto object-cover rounded-xl shadow-md" />
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
            Photography is the art and science of capturing images using a
            camera. Photography has been around for over 200 years, and it has
            evolved significantly since the first camera was invented. Today,
            photography is a popular hobby and profession, and it is used in a
            wide range of fields, including advertising, journalism, and art. In
            this blog post, we will explore the key points of photography and
            its significance.
          </p>
          <h1 className="blog1_point1">1. Composition:</h1>
          <p className="blog1_text">
            Composition is the art of arranging the elements in a photograph in
            a way that creates a visually pleasing image. Composition involves
            factors such as framing, angles, and balance. Good composition can
            make an ordinary photograph look extraordinary.
          </p>
          <Image className="blog1_img1" src="/images/7JTvHHb/top-view-autumn-leaves-with-photos-camera.jpg" alt="Section 1 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">2.Lighting: </h1>
          <p className="blog1_text">
            Lighting is a critical component of photography. The way a subject
            is lit can significantly affect the mood and tone of a photograph.
            Lighting involves factors such as the direction of light, the
            intensity of light, and the quality of light.
          </p>
          <Image className="blog1_img2" src="/images/kmRqDDy/1163.jpg" alt="Section 2 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">3.Camera Settings: </h1>
          <p className="blog1_text">
            Understanding camera settings is essential for taking high-quality
            photographs. Camera settings include aperture, shutter speed, and
            ISO. Aperture controls the amount of light entering the lens,
            shutter speed controls the duration of the exposure, and ISO
            controls the sensitivity of the camera to light.
          </p>
          <Image className="blog1_img3" src="/images/7gGG2Ng/sl-121019-25870-83.jpg" alt="Section 3 illustration" width={800} height={510} style={{ height: "auto" }} />
          <h1 className="blog1_point1">4.Editing:</h1>
          <p className="blog1_text">
            Editing is the process of post-processing a photograph to enhance
            its visual appeal. Editing involves adjusting factors such as
            brightness, contrast, and color balance. Editing can also involve
            cropping and removing unwanted elements from a photograph.
          </p>
          <Image className="blog1_img4" src="/images/rxMg40Q/empty-modern-creative-agency-office-with-dual-monitors-setup-with-processing-video-film-montage-vide.jpg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />

          <h1 className="blog1_point1">5.Photography Styles:</h1>
          <p className="blog1_text">
            There are many different styles of photography, including portrait,
            landscape, and street photography. Each style has its own unique
            characteristics and requires a different set of skills.
          </p>
          <Image className="blog1_img4" src="/images/c1PvhB4/medium-shot-man-wearing-hat-23-2149126957.jpgg" alt="Section 4 illustration" width={800} height={510} style={{ height: "auto" }} />
          <p className="blog1_bottom">
            Photography, the art and science of capturing images, has evolved
            significantly over two centuries. Its significance lies in freezing
            moments, conveying emotions, documenting reality, and inspiring
            creativity. From a popular hobby to a powerful tool in advertising,
            journalism, and art, photography plays a vital role in our lives.
            Its accessibility and impact in the digital age make it an
            invaluable medium of self-expression and storytelling.
          </p>
        </div>
      </div>
    </div>
  );
};
