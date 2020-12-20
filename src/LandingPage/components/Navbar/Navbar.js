import React from "react";
import classes from "./Navbar.module.css";
import { Nav, Navbar, Form, Button } from "react-bootstrap";
import { useState } from "react";
import Modaljs from "../Modal/Modal";
import CustomModal from "../CustomModal/CustomModal";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useState(false);

  const handleAuth = () => {
    setAuth(true);

    setShow(true);
  };
  const handleClose = () => {
    setAuth(false);

    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar className={classes.navbar} expand="lg" fixed="top">
        <Navbar.Brand href="#home" style={style.brand}>
          <div style={{ paddingLeft: "20px" }}>Edicat</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" style={style.links}>
              Home
            </Nav.Link>
            <Nav.Link href="/aboutus" style={style.links}>
              About Us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button onClick={handleAuth} className={classes.loginButton}>
              LOG IN
            </Button>
            <Button onClick={handleShow} className={classes.tryButton}>
              TRY IT FOR FREE
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {/* <Modaljs auth={auth} show={show} handleClose={handleClose}></Modaljs> */}
      <CustomModal auth={auth} show={show} modalClosed={handleClose}>
        <div
          style={{
            backgroundColor: "#186aa5",
            color: "#fff",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "bold",
          }}
        >
          Sign UP
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "20px 0",
          }}
        >
          <div style={{ border: "2px solid", padding: "10px 20px" }}>
            <h1>Sign Up</h1>
            <label style={{ display: "block" }}>First Name*</label>
            <input type="text"></input>
            <label style={{ display: "block" }}>Last Name*</label>
            <input type="text"></input>
            <label style={{ display: "block" }}>Email*</label>
            <input type="text"></input>
            <label style={{ display: "block" }}>Password*</label>
            <input type="text"></input>
            <label style={{ display: "block" }}>Confirm Password*</label>
            <input type="text"></input>
          </div>
          <div style={{ border: "2px solid", padding: "10px 20px" }}>
            <h1>Login</h1>
            <label style={{ display: "block" }}>Email*</label>
            <input type="text"></input>
            <label style={{ display: "block" }}>Password*</label>
            <input type="text"></input>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

const style = {
  brand: {
    color: "#707070",
    fontSize: "40px",
    fontWeight: "bold",
  },
  links: {
    fontSize: "20px",
    color: "#050505",
    fontWeight: "550",
    marginLeft: "20px",
    paddingTop: "0",
    paddingBottom: "0",
  },
};

export default NavbarComponent;
