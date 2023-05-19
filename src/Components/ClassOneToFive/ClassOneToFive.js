import React, { useState, useEffect } from "react";
import "./ClassOneToFive.css";
import { Container } from "react-bootstrap";
import { faClock, faVideo, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ClassOneToFive = () => {
  const [activeFilter, setActiveFilter] = useState("class1");

  const filterSelection = (category) => {
    setActiveFilter(category);
    const filterDivs = document.querySelectorAll(".filterDiv");
    filterDivs.forEach((filterDiv) => {
      if (filterDiv.classList.contains(category) || category === "all") {
        filterDiv.style.display = "block";
      } else {
        filterDiv.style.display = "none";
      }
    });
  };
  useEffect(() => {
    const filterDivs = document.querySelectorAll(".filterDiv");
    filterDivs.forEach((filterDiv) => {
      if (!filterDiv.classList.contains("class1")) {
        filterDiv.style.display = "none";
      }
    });
  }, []);
  return (
    <div className="class">
      {/* Control buttons */}
      <Container className="class_btn">
        <div className="row_class">
          <div className="col" id="flexi_class">
            <button
              className={activeFilter === "class1" ? "btn05 active" : "btn05"}
              id="btn_class"
              onClick={() => filterSelection("class1")}
            >
              Class 1
            </button>
          </div>
          <div className="col" id="flexi_class">
            <button
              className={activeFilter === "class2" ? "btn05 active" : "btn05"}
              id="btn_class"
              onClick={() => filterSelection("class2")}
            >
              Class 2
            </button>
          </div>

          <div className="col" id="flexi_class">
            <button
              className={activeFilter === "class3" ? "btn05 active" : "btn05"}
              id="btn_class"
              onClick={() => filterSelection("class3")}
            >
              Class 3
            </button>
          </div>
          <div className="col" id="flexi_class">
            <button
              className={activeFilter === "class4" ? "btn05 active" : "btn05"}
              id="btn_class"
              onClick={() => filterSelection("class4")}
            >
              Class 4
            </button>
          </div>

          <div className="col" id="flexi_class">
            <button
              className={activeFilter === "class5" ? "btn05 active" : "btn05"}
              id="btn_class"
              onClick={() => filterSelection("class5")}
            >
              Class 5
            </button>
          </div>
        </div>
      </Container>

      <Container className="class_card1">
        <div className="row_class1">
          <div className="col filterDiv class1" id="flexi_class1-1">
            <div>
              <div className="class1_img_contain1">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/prGbV9q/download-1.jpg"
                  alt=""
                />
              </div>

              <div className="class1_text">
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className="" id="class1_btn1">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class1" id="flexi_class1-2">
            <div>
              <div className="class1_img_contain2">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/BTbZwn6/download-1.jpg"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className="" id="class1_btn2">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class1" id="flexi_class1-3">
            <div>
              <div className="class1_img_contain3">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/Fm89XF2/download.png"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class1_btn3">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="class_card2">
        <div className="row_class1">
          <div className="col filterDiv class2" id="flexi_class2-1">
            <div>
              <div className="class1_img_contain1">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/prGbV9q/download-1.jpg"
                  alt=""
                />
              </div>

              <div className="class1_text">
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className="" id="class2_btn1">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class2" id="flexi_class2-2">
            <div>
              <div className="class1_img_contain2">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/BTbZwn6/download-1.jpg"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class2_btn2">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class2" id="flexi_class2-3">
            <div>
              <div className="class1_img_contain3">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/Fm89XF2/download.png"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class2_btn3">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="class_card3">
        <div className="row_class1">
          <div className="col filterDiv class3" id="flexi_class3-1">
            <div>
              <div className="class1_img_contain1">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/prGbV9q/download-1.jpg"
                  alt=""
                />
              </div>

              <div className="class1_text">
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class3_btn1">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class3" id="flexi_class3-2">
            <div>
              <div className="class1_img_contain2">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/BTbZwn6/download-1.jpg"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class3_btn2">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class3" id="flexi_class3-3">
            <div>
              <div className="class1_img_contain3">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/Fm89XF2/download.png"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class3_btn3">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="class_card4">
        <div className="row_class1">
          <div className="col filterDiv class4" id="flexi_class4-1">
            <div>
              <div className="class1_img_contain1">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/prGbV9q/download-1.jpg"
                  alt=""
                />
              </div>

              <div className="class1_text">
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class4_btn1">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class4" id="flexi_class4-2">
            <div>
              <div className="class1_img_contain2">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/BTbZwn6/download-1.jpg"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class4_btn2">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class4" id="flexi_class4-3">
            <div>
              <div className="class1_img_contain3">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/Fm89XF2/download.png"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class4_btn3">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container className="class_card5">
        <div className="row_class1">
          <div className="col filterDiv class5" id="flexi_class5-1">
            <div>
              <div className="class1_img_contain1">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/prGbV9q/download-1.jpg"
                  alt=""
                />
              </div>

              <div className="class1_text">
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class5_btn1">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class5" id="flexi_class5-2">
            <div>
              <div className="class1_img_contain2">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/BTbZwn6/download-1.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class5_btn2">
                  Start Now
                </button>
              </div>
            </div>
          </div>
          <div className="col filterDiv class5" id="flexi_class5-3">
            <div>
              <div className="class1_img_contain3">
                <img
                  className="class1_img"
                  src="https://i.ibb.co/Fm89XF2/download.png"
                  alt=""
                />
              </div>

              <div>
                <p className="class1_icon1">
                  {" "}
                  <FontAwesomeIcon icon={faUserGroup} />
                  &nbsp; &nbsp; 8996 people are doing the course
                </p>
                <br />
                <p className="class1_icon2">
                  {" "}
                  <FontAwesomeIcon icon={faClock}  /> &nbsp;&nbsp;It will take 3 hours
                </p>
                <br />
                <p className="class1_icon3">
                  <FontAwesomeIcon icon={faVideo}  />
                  &nbsp;&nbsp; 25 videos
                </p>
                <br />
                <button className ="" id="class5_btn3">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ClassOneToFive;