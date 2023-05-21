import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Blog2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blog1">
      <Container className="blog1_top">
        <div id="flexi_blog1">
          <Nav.Link className="blog1_link" as={Link} to="/blog">
            <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
          </Nav.Link>
          <h1 className="blog1_text">"4 Key Points in Data Science"</h1>
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
            src="https://i.ibb.co/TqBPwg1/data.jpg"
            alt=""
            style={{ minWidth: 100, maxWidth: 1300 }}
          />
        </div>

        <div id="flexi_blog1_2">
          <p className="blog1_head">
          Data Science is a rapidly growing field that involves extracting insights and knowledge from large and complex datasets. With the increasing amount of data being generated every day, data science has become an integral part of many businesses and industries. In this blog, we will discuss four important points that you need to know about data science.
          </p>
          <h1 className="blog1_point1">
            1. Importance of Data Cleaning:
          </h1>
          <p className="blog1_text">
          Data cleaning is an essential process in data science. It involves identifying and correcting errors, inconsistencies, and missing values in the data. The quality of the data determines the accuracy of the results obtained from the analysis. Therefore, it is crucial to ensure that the data is cleaned properly before performing any analysis. Data cleaning can be time-consuming, but it is a necessary step in data science.
          </p>
          <img
            className="blog1_img1"
            src="https://i.ibb.co/jW8RgJP/databaseadmin-2.jpg"
            alt=""
            style={{
              height: 510,
              width:800
            }}
          />

          <h1 className="blog1_point1">2.Machine Learning</h1>
          <p className="blog1_text">
          Machine learning is a subset of artificial intelligence that involves building algorithms that can learn from data and make predictions or decisions without being explicitly programmed. It is used in various applications, such as image recognition, speech recognition, and natural language processing. Machine learning algorithms can be supervised, unsupervised, or semi-supervised, depending on the availability of labeled data. With the increasing availability of data and computing power, machine learning has become an important tool in data science.
          </p>
          <img
            className="blog1_img2"
            src="https://i.ibb.co/QkpqT4n/3033279.jpg"
            alt=""
            style={{
                height: 510,
                width:800
            }}
          />

          <h1 className="blog1_point1">3.Data Visualization</h1>
          <p className="blog1_text">
          Data visualization is the process of representing data in a graphical or pictorial form. It helps in understanding complex data and communicating insights effectively. Data visualization can be used to identify patterns, trends, and outliers in the data. It is an important step in data analysis and can help in making informed decisions. There are various tools available for data visualization, such as Tableau, Power BI, and matplotlib.
          </p>
          <img
            className="blog1_img3"
            src="https://i.ibb.co/30PbG12/5031659.jpg"
            alt=""
            style={{
                height: 510,
                width:800
            }}
          />
          <h1 className="blog1_point1">4. Ethics in Data Science</h1>
          <p className="blog1_text">
          Data science involves dealing with large amounts of data that can be personal and sensitive. Therefore, it is important to ensure that ethical considerations are taken into account while working with data. This includes obtaining consent from the data subjects, protecting the privacy of the data, and ensuring that the data is used for legitimate purposes. Ethical considerations are important in building trust with the data subjects and maintaining the integrity of the data science field.
          </p>
          <img
            className="blog1_img4"
            src="https://i.ibb.co/7XymPQ6/4674949.jpg"
            alt=""
            style={{
                height: 510,
                width:800
            }}
          />

          <p className="blog1_bottom">
          Data science is an exciting field that offers endless opportunities for exploring and discovering insights from data. The four points discussed in this blog are essential for anyone who wants to get started in data science. Data cleaning, machine learning, data visualization, and ethics are important considerations that can help in producing accurate and meaningful insights from data. With the increasing amount of data being generated every day, data science will continue to play an important role in shaping the future.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Blog2;