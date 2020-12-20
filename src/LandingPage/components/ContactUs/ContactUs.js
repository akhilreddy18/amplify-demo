import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import classes from "./ContactUs.module.css";
import Logo from "../../../assets/Images/Group 2178.png";
import Logo1 from "../../../assets/Images/Image.png";

const ContactUs = (props) => {
  return (
    <div>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header className={classes.header} closeButton>
          <Modal.Title className={classes.title}>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-around">
            <div style={{ border: "2px solid", paddingTop: "2vw" }}>
              <Col>
                <p
                  style={{
                    maxWidth: "22vw",
                    fontSize: "1.5vw",
                    color: "#0f0e0e",
                  }}
                >
                  Join us on our mission to provide affordable, personalised
                  learning solutions to every child.
                </p>
                <div className="row justify-content-center">
                  <img src={Logo} style={{ width: "15vw" }} alt="Logo"></img>
                </div>
              </Col>
            </div>
            <div style={{ border: "2px solid", paddingTop: "2vw" }}>
              <Col className={classes.column}>
                <p
                  style={{
                    color: "#0f0e0e",
                    fontSize: "2vw",
                    fontWeight: "550",
                    textAlign: "center",
                  }}
                >
                  Reach out to us at...
                </p>
                <p
                  style={{
                    color: "#0f0e0e",
                    fontSize: "1.5vw",
                    fontWeight: "550",
                  }}
                >
                  support@edicat.co.uk
                </p>
                <p
                  style={{
                    color: "#186aa5",
                    fontSize: "1.5vw",
                    fontWeight: "550",
                  }}
                >
                  Our Address
                </p>
                <p
                  style={{
                    color: "#0f0e0e",
                    maxWidth: "20vw",
                    fontSize: "1.3vw",
                    fontWeight: "550",
                    textAlign: "center",
                  }}
                >
                  Edicat Learning Ltd<br></br> IDEALondon , 69 Wilson Street
                  London, EC2A 2BB
                </p>
                <p>Map here</p>
                <img src={Logo1}></img>
              </Col>
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactUs;
