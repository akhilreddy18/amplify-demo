import React, { useState, useEffect} from "react";
import classes from "./LogInForm.module.css";
import Facebook from "../../../assets/Images/facebook-icon.png";
import Google from "../../../assets/Images/google-icon.png";
import Mail from "../../../assets/Images/Icon Mail.png";
import { Modal, Col, Row } from "react-bootstrap";
import Auth from "../Auth/Auth";
import { useHistory } from "react-router-dom";

const SignUpForm = (props) => {

    const [firstLayer, setFirstLayer] = useState(true);
    const [secondLayer, setSecondLayer] = useState(false);
    const [first, setFirst] = useState(props.first);

    let history = useHistory();

    useEffect(() => {
        setFirst(props.first);
    }, [props])
 

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handlesecondLayer = () => {
        setFirstLayer(false);
        setSecondLayer(true);
        setFirst(!first);
    };

    const handleInput = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            <Col style={{ display: (firstLayer || first) ? "block" : "none" }}>
                <div
                    style={{
                        paddingBottom: "3vw",
                        display: "block",
                    }}
                >
                    <button className={classes.combineButton}>Student</button>
                    <button className={classes.combineButton}>Parent</button>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <button
                        className={classes.signUpButton}
                        onClick={Auth.handleGoogleSignIn}
                    >
                        <img
                            style={{
                                width: "2vw",
                                height: "2vw",
                                float: "left",
                            }}
                            src={Google}
                            alt="Google"
                        ></img>
                        <span style={{ verticalAlign: "middle", alignContent: "center" }}>
                            {"Sign Up with Google"}
                        </span>
                    </button>
                    <button
                        className={classes.signUpButton}
                        onClick={Auth.handleFacebookSigIn}
                    >
                        <img
                            style={{ width: "1.3vw", height: "2.5vw", float: "left" }}
                            src={Facebook}
                            alt="Facebook"
                        ></img>
                        <span style={{ verticalAlign: "middle", alignContent: "center" }}>
                            {"Sign Up with Facebook"}
                        </span>
                    </button>
                    <button
                        style={{ display: "block" }}
                        className={classes.signUpButton}
                        onClick={handlesecondLayer}
                    >
                        <img
                            style={{ width: "2.5vw", height: "2vw", float: "left" }}
                            src={Mail}
                            alt="Mail"
                        ></img>
                  Sign Up with Email
                </button>
                </div>
                <p
                    style={{
                        maxWidth: "19vw",
                        fontSize: "1.5vw",
                        fontWeight: "normal",
                        textAlign: "center",
                        color: "#0f0e0e",
                        marginTop: "2vw",
                        marginBottom: "0",
                    }}
                >
                    {"Already have an account?"}
                </p>
            </Col>
            <Col style={{ display: (secondLayer && !first) ? "block" : "none" }}>
                <div className="row justify-content-center">
                    <button className={classes.combineButton}>Student</button>
                    <button className={classes.combineButton}>Parent</button>
                </div>
                <p
                    style={{
                        fontSize: "2vw",
                        fontWeight: "550",
                        textAlign: "center",
                        color: "0f0e0e",
                    }}
                >
                    Sign up with Email
              </p>
                <Row className="justify-content-center">
                    <form>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <div>
                                <label htmlFor="firstName" style={style.label}>
                                    First name*
                      </label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    name="firstName"
                                    value={user.firstName}
                                    placeholder="First name"
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="lastName" style={style.label}>
                                    Last name*
                      </label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    name="lastName"
                                    value={user.lastName}
                                    placeholder="Last name"
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="email" style={style.label}>
                                    Email*
                      </label>
                                <input
                                    className={classes.input}
                                    type="text"
                                    name="email"
                                    value={user.email}
                                    placeholder="Email"
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="password" style={style.label}>
                                    Password*
                      </label>
                                <input
                                    className={classes.input}
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    placeholder="Create Password"
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" style={style.label}>
                                    Re-enter Password*
                      </label>
                                <input
                                    className={classes.input}
                                    type="password"
                                    name="confirmPassword"
                                    value={user.confirmPassword}
                                    placeholder="Confirm Password"
                                    onChange={handleInput}
                                ></input>
                            </div>
                            <div
                                style={{ margin: "1vw 0" }}
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
                            <input
                                type="submit"
                                value="Sign Up"
                                className={classes.submitForm}
                                onClick={(e) => Auth.handleSignup(e, user, history)}
                            ></input>
                        </div>
                    </form>
                </Row>
            </Col>
        </>
    );
}

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

export default SignUpForm;