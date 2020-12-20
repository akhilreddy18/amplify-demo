import React from "react";
import { Col, Modal, Row } from "react-bootstrap";
import classes from "./Communities.module.css";
import Logo from "../../../assets/Images/Group 2178.png";

const Communities = (props) => {
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
          <Modal.Title className={classes.title}>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-around">
            <div style={{ border: "2px solid", paddingTop: "2vw" }}>
              <Col>
                <p
                  style={{
                    maxWidth: "20vw",
                    fontSize: "1.5vw",
                    textAlign: "center",
                    color: "#0f0e0e",
                  }}
                >
                  Join us on our mission to provide affordable, personalised
                  learning solutions to every child.
                </p>
                <div className="row justify-content-center">
                  <img src={Logo} style={{ width: "15vw" }} alt="Logo"></img>
                </div>
                <p
                  style={{
                    maxWidth: "19vw",
                    fontSize: "1.5vw",
                    textAlign: "center",
                    color: "#0f0e0e",
                  }}
                >
                  By creating your account, you agree to our Terms and
                  Conditions & Privacy Policy.
                </p>
              </Col>
            </div>
            <div
              style={{ border: "2px solid", padding: "1vw 1.5vw" }}
              className={classes.column}
            >
              {/* <Col className={classes.column}> */}
              <p
                style={{
                  color: "#0f0e0e",
                  fontSize: "1.7vw",
                  fontWeight: "550",
                  textAlign: "center",
                }}
              >
                Get in touch
              </p>
              <div className={classes.column}>
                <div style={{ display: props.school ? "block" : "none" }}>
                  <label style={style.label}>School Name*</label>
                  <input
                    type="text"
                    placeholder="School Name"
                    className={classes.input}
                  ></input>
                </div>
                <div style={{ display: props.investors ? "block" : "none" }}>
                  <label style={style.label}>
                    Investors Name/Organisation*
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className={classes.input}
                  ></input>
                </div>
                <div
                  style={{
                    display: props.tuitionProvider ? "block" : "none",
                  }}
                >
                  <label style={style.label}>Tuition Provider Name*</label>
                  <input
                    type="text"
                    placeholder="Organisation name"
                    className={classes.input}
                  ></input>
                </div>
                <div
                  style={{
                    display: props.tutor || props.parent ? "block" : "none",
                  }}
                >
                  <label style={style.label}>Full Name*</label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className={classes.input}
                  ></input>
                </div>
                <div>
                  <label style={style.label}>Email Address*</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className={classes.input}
                  ></input>
                </div>
                <div>
                  <label style={style.label}>Phone Number</label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className={classes.input}
                  ></input>
                </div>
                <div style={{ display: props.tutor ? "block" : "none" }}>
                  <label style={style.label}>Academic Levels*</label>
                  <input
                    type="text"
                    placeholder="Academic levels"
                    className={classes.input}
                  ></input>
                </div>
                <div style={{ display: props.tutor ? "block" : "none" }}>
                  <label style={style.label}>Number of Students*</label>
                  <input
                    type="text"
                    placeholder="Number of students"
                    className={classes.input}
                  ></input>
                </div>
                <div style={{ display: props.parent ? "block" : "none" }}>
                  <label style={style.label}>Child's academic year*</label>
                  <input
                    type="text"
                    placeholder="Child's academic year"
                    className={classes.input}
                  ></input>
                </div>
                <div>
                  <label style={style.label}>Query</label>
                  <input
                    type="text"
                    placeholder="Type your message"
                    style={{
                      width: "18vw",
                      height: "7vw",
                      fontSize: "1.2vw",
                      border: "1px solid #e2e2e6",
                    }}
                  ></input>
                </div>
                <div
                  style={{
                    display:
                      props.parent || props.school ? "inlineBlock" : "none",
                    margin: "1vw",
                  }}
                  className="row justify-content-center align-items-center"
                >
                  <input type="checkbox"></input>
                  <p
                    style={{
                      maxWidth: "15vw",
                      fontSize: "1vw",
                      textAlign: "center",
                      color: "#0f0e0e",
                      marginBottom: "0",
                    }}
                  >
                    I would like to receive special offers, exam tips and
                    updates
                  </p>
                </div>
              </div>
              <input
                type="submit"
                placeholder="Submit"
                className={classes.submitForm}
              ></input>
              {/* </Col> */}
            </div>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const style = {
  label: {
    display: "block",
    fontWeight: "bold",
    fontSize: "1.2vw",
    marginBottom: "0",
  },
};

export default Communities;
