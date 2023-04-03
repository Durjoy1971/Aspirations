import React from "react";
import "./Review.css";
import { Carousel } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Review = () => {
  return (
    <div className="caro1">
      <div className="tit">
        <h1
          style={{
            color: "gold",
          }}
        >
          Why we are the first <br />
          choice of students and parents?
        </h1>
      </div>
      <Carousel fade>
        <Carousel.Item className="des3">
          <Container className="des">
            <Row>
              <Col>
                <div className="design ">
                  <i class="px-2 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3  mt-3 "
                    >
                      Each section of the course had clear instructions.
                      Especially, the “Reading” and “Writing” sections were so
                      informative which made the Mock Test and Real Exam easy
                      for me. I like the “Writing Part” the most.
                    </p>
                  </div>

                  <p className="des1">Tahiya Faiza</p>

                  <p className="des4">Teaching Assistant, Brac University</p>
                </div>
              </Col>
              <Col>
                <div className="design">
                  <i class="px-2 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      There was no time to learn offline so opt for online
                      courses. In the course, the font Tanveen Maad has been
                      taught very beautifully. I was able to master Shuddha
                      Tilawat very quickly by practicing every day very easily.
                    </p>
                  </div>

                  <p className="des1">Zakirul Islam</p>

                  <p className="des4">Businessman</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="des3">
          <Container className="des">
            <Row>
              <Col>
                <div className="design ">
                  <i class="px-1 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      There was no time to learn offline so opt for online
                      courses. In the course, the font Tanveen Maad has been
                      taught very beautifully. I was able to master Shuddha
                      Tilawat very quickly by practicing every day very easily.
                    </p>
                  </div>

                  <p className="des1">Zakirul Islam</p>

                  <p className="des4">Businessman</p>
                </div>
              </Col>
              <Col>
                <div className="design">
                  <i class="px-2 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      I had an online page but could not understand anything
                      about how to move forward with the page. By doing the
                      course, I learned how to give a basic post, how to use it,
                      how to contact.
                    </p>
                  </div>

                  <p className="des1">Hasibur Rahman</p>

                  <p className="des4">Online Business Owner</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="des3">
          <Container className="des">
            <Row>
              <Col>
                <div className="design ">
                  <i class="px-1 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      I had an online page but could not understand anything
                      about how to move forward with the page. By doing the
                      course, I learned how to give a basic post, how to use it,
                      how to contact.
                    </p>
                  </div>

                  <p className="des1">Hasibur Rahman</p>

                  <p className="des4">Online Business Owner</p>
                </div>
              </Col>
              <Col>
                <div className="design">
                  <i class="px-2 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      I got 90+ marks in English subject after doing English
                      classes in online batch of Ten Minute School. Also Ten
                      Minute School's live chat, polls and leaderboard features
                      are excellent which have helped us to constantly increase
                      our interest in learning.
                    </p>
                  </div>

                  <p className="des1">Mushfiq Jaman</p>

                  <p className="des4">
                    Class 8, Bedkashi Collegiate School, Khulna
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

        <Carousel.Item className="des3">
          <Container className="des">
            <Row>
              <Col>
                <div className="design ">
                  <i class="px-1 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      I got 90+ marks in English subject after doing English
                      classes in online batch of Ten Minute School. Also Ten
                      Minute School's live chat, polls and leaderboard features
                      are excellent which have helped us to constantly increase
                      our interest in learning.
                    </p>
                  </div>

                  <p className="des1">Mushfiq Jaman</p>

                  <p className="des4">
                    Class 8, Bedkashi Collegiate School, Khulna
                  </p>
                </div>
              </Col>
              <Col>
                <div className="design">
                  <i class="px-2 mt-3 fa-solid fa-quote-left fa-2xl"></i>
                  <div>
                    <p
                      style={{
                        height: 100,
                      }}
                      className="px-3 mt-3"
                    >
                      The best thing about online batch classes is the class
                      teaching technique. Every teacher conducts the classes
                      with such care that my child enjoys the classes very much.
                      Learning should be fun! Besides, the monthly exam, lecture
                      sheets are also very standard.
                    </p>
                  </div>

                  <p className="des1">Miftahul Jannat</p>

                  <p className="des4">Class 7</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Review;
