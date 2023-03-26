import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
    <section className="section-contact">
      <Container className="Container_Background">
        
   

        <Row className="mb-5 ">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

  

        <Row className="sec_sp">
          <Col lg="5" className="mb-5"> 

      

            <h3 className="color_sec py-4">Get in touch</h3>

          

            <address>
              <strong>
                Email: <span> ASPIRATION@gmail.com</span>
              </strong>
              <br />
              <br />
              <p>
                <strong>
                  Phone: <span> 01815823481</span>
                </strong>
              </p>
            </address>

           

            <div id="social">
              <a
                href="https://www.facebook.com/profile.php?id=100005243536152"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://github.com/Durjoy1971" target="_blank">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://t.me/Durjoy_Barua" target="_blank">
                {" "}
                <i class="fa-brands fa-telegram"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
              <a href="">
                <i class="fa-brands fa-snapchat"></i>
              </a>
            </div>
          </Col>

      

          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>

        

                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                </Col>

            

                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                </Col>
              </Row>

         

              <textarea
                className="form-control rounded-0 mt-5"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                <Button variant="outline-success" className="btn ac_btn" type="submit"> 
                  Send
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );

  
};

export default Contact;
