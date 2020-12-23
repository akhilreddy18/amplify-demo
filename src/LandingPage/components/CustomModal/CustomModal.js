import React from "react";
import { Hub } from "aws-amplify";

import classes from "./CustomModal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import Logo from "../../../assets/Images/Group 2136.png";
import LogInForm from "../Auth/LogInForm";
import SignUPForm from "../Auth/SignUpForm";

const CustomModal = (props) => {
  Hub.listen("auth", (data) => {
    const { payload } = data;
    this.onAuthEvent(payload);
    console.log(
      "A new auth event has happened: ",
      data.payload.data.username + " has " + data.payload.event
    );
  });
  
  return (
    <div>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
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
            padding: "5px 0",
          }}
        >
          <p style={{ display: "inline-block", marginBottom: "0" }}>
            {props.auth ? "Log in" : "Sign Up"}
          </p>
          <button
            onClick={() => {
              props.modalClosed();
            }}
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
            justifyContent: "space-evenly",
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
            {props.auth?
            <LogInForm />
            :<SignUPForm first="true" />}
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  join: {
    maxWidth: "20vw",
    fontSize: "1.6vw",
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
    maxHeight: "75vh",
    marginBottom: "10px",
    marginTop: "10px"
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
