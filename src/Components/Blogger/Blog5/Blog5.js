import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { AiOutlineArrowLeft } from "react-icons/ai";
const Blog5 = () => {
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
          <h1 className="blog1_text">
            "Exploring the Essentials of Photography"
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
            src="https://i.ibb.co/rZswsNF/professional-camera-blurred.jpg"
            alt=""
            style={{ minWidth: 100, maxWidth: 1300 }}
          />
          {/* <img src='https://i.ibb.co/LQXqFj4/blg-final.png'/>
{/* <img src='https://i.ibb.co/kxC7z42/blog.jpg' style={{
                                                     height:510}}/> */}
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
          <img
            className="blog1_img1"
            src="https://i.ibb.co/7JTvHHb/top-view-autumn-leaves-with-photos-camera.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">2.Lighting: </h1>
          <p className="blog1_text">
            Lighting is a critical component of photography. The way a subject
            is lit can significantly affect the mood and tone of a photograph.
            Lighting involves factors such as the direction of light, the
            intensity of light, and the quality of light.
          </p>
          <img
            className="blog1_img2"
            src="https://i.ibb.co/kmRqDDy/1163.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">3.Camera Settings: </h1>
          <p className="blog1_text">
            Understanding camera settings is essential for taking high-quality
            photographs. Camera settings include aperture, shutter speed, and
            ISO. Aperture controls the amount of light entering the lens,
            shutter speed controls the duration of the exposure, and ISO
            controls the sensitivity of the camera to light.
          </p>
          <img
            className="blog1_img3"
            src="https://i.ibb.co/7gGG2Ng/sl-121019-25870-83.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
          <h1 className="blog1_point1">4.Editing:</h1>
          <p className="blog1_text">
            Editing is the process of post-processing a photograph to enhance
            its visual appeal. Editing involves adjusting factors such as
            brightness, contrast, and color balance. Editing can also involve
            cropping and removing unwanted elements from a photograph.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/rxMg40Q/empty-modern-creative-agency-office-with-dual-monitors-setup-with-processing-video-film-montage-vide.jpg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />

          <h1 className="blog1_point1">5.Photography Styles:</h1>
          <p className="blog1_text">
            There are many different styles of photography, including portrait,
            landscape, and street photography. Each style has its own unique
            characteristics and requires a different set of skills.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/c1PvhB4/medium-shot-man-wearing-hat-23-2149126957.jpgg"
            alt=""
            style={{
              height: 510,
              width: 800,
            }}
          />
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
      </Container>
    </div>
  );
};

export default Blog5;
