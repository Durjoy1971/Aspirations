import React from "react";
import { Col, Row } from "react-bootstrap";
import './AdUnderLarge.css'
const AdUnderLarge = () => {
    return (
            <div className="d-flex Addiv">
                <div className="AdLeft">
                    <Row>
                        <Col className="AdCol1">
                            <h3 className="AdCaption"> 1 Crore +</h3>
                            <h5 className="AdCaption2">Total Student</h5>
                        </Col>
                        <Col className="AdCol2 mx-3">
                            <h3 className="AdCaption">47 Lakh +</h3>
                            <h5 className="AdCaption2">Website Users</h5>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="AdCol3 my-2">
                            <h3 className="AdCaption">3,000+</h3>
                            <h5 className="AdCaption2">Study Material</h5>
                        </Col>
                        <Col className="AdCol4 my-2 mx-3">
                            <h3 className="AdCaption">24,000 +</h3>
                            <h5 className="AdCaption2">Learning Content</h5>
                        </Col>
                    </Row>
                </div>

                <div>
                    <img
                     src="https://cdn.10minuteschool.com/lg/images/1667905292144.png"
                     alt="First slide"
                     width="auto"
                     height="90%"
                     >
                    </img>
                </div>
            </div>


    )
}

export default AdUnderLarge;