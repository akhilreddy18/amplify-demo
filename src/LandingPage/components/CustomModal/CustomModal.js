import React, { useState } from "react";
import "../CustomModal/CustomModal.css";
import Backdrop from "../Backdrop/Backdrop";
import Logo from "../../../assets/Images/Group 2136.png";
import { Modal, Col, Row } from "react-bootstrap";
import Logo1 from "../../../assets/Images/Group 2164.png";
import Mail from "../../../assets/Images/Icon Mail.png";
import Facebook from "../../../assets/Images/facebook-icon.png";
import Google from "../../../assets/Images/google-icon.png";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const CustomModal = (props) => {
  const [radioValue, setRadioValue] = useState(1);
  const radios = [
    { name: "Student", value: "1" },
    { name: "Parent", value: "0" },
  ];

  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {/* {props.children} */}
        <div
          style={{
            backgroundColor: "#186aa5",
            color: "#fff",
            textAlign: "center",
            fontSize: "2.2vw",
            fontWeight: "bold",
            padding: "10px 0",
          }}
        >
          <p style={{ display: "inline-block", marginBottom: "0" }}>
            {props.auth ? "Log In" : "Sign Up"}
          </p>
          <button
            onClick={props.modalClosed}
            style={{
              border: "none",
              backgroundColor: "#186aa5",
              color: "#fff",
              marginRight: "10px",
              float: "right",
            }}
          >
            X
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "20px 0",
          }}
        >
          <div style={style.border}>
            <p style={style.join}>
              Join us on our mission to provide affordable, personalised
              learning solutions to every child.
            </p>
            <img src={Logo} style={{ width: "15vw" }} alt="Logo"></img>
            <p style={style.agreement}>
              By creating your account, <br></br> you agree to our Terms and
              Conditions & Privacy Policy.
            </p>
          </div>
          <div style={style.border}>
            <div className="btnGroup">
              <button>Student</button>
              <button>Parent</button>
            </div>
            <div
              // onClick={handleGoogleSignIn}
              className="googlebtn"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                margin: "0.5vw 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img
                  style={{
                    width: "2.5vw",
                    height: "2.5vw",
                    float: "left",
                  }}
                  src={Google}
                  alt="Google"
                />
                <p className="btnText">
                  {props.auth ? "Log in with Google" : "Sign Up with Google"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  join: {
    maxWidth: "20vw",
    fontSize: "1.7vw",
    textAlign: "center",
    lineHeight: "2.2vw",
    color: "#0f0e0e",
  },
  agreement: {
    maxWidth: "19vw",
    fontSize: "1.3vw",
    textAlign: "center",
    marginTop: "1.15vw",
    marginBottom: "0",
    lineHeight: "1.7vw",
    color: "#0f0e0e",
  },
  border: {
    border: "2px solid",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    fontSize: "1.2vw",
    marginBottom: "0",
  },
  icon: {
    width: "2vw",
    height: "2vw",
  },
};

export default React.memo(
  CustomModal,
  (prevProps, nextProps) =>
    nextProps.show === prevProps.show &&
    nextProps.children === prevProps.children
);
