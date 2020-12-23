import React, { useState } from "react";
import classes from "./LogInForm.module.css";
import Facebook from "../../../assets/Images/facebook-icon.png";
import Google from "../../../assets/Images/google-icon.png";
import Auth from "../Auth/Auth";
import { useHistory } from "react-router-dom";
import Aws from "aws-amplify";

const LogInForm = (props) => {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      let history = useHistory();

    const handleInput = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
      };

    const checkUser = async (e) => {
        const user = await Aws.Auth.currentAuthenticatedUser();
        console.log(user);
    }
    return (
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
                    {"Log in with Google"}
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
                    {"Log in with Facebook"
                        }
                </span>
            </button>
            {/* <button
                onClick={checkUser()}
            >
                check user
            </button> */}
            <p
                style={{
                    maxWidth: "19vw",
                    fontSize: "1.5vw",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#0f0e0e",
                    marginTop: "0",
                    marginBottom: "0",
                }}
            >
                {"Log in with Email"}
            </p>
            <div style={{ display: "block" }}>
                <form>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ margin: "0.5vw 0" }}>
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
                        <div style={{ margin: "0.5vw 0" }}>
                            <label htmlFor="password" style={style.label}>
                                Password*
                      </label>
                            <input
                                className={classes.input}
                                name="password"
                                value={user.password}
                                type="password"
                                placeholder="Password"
                                onChange={props.handleInput}
                            ></input>
                        </div>
                        <input
                            style={{ marginTop: "2vw" }}
                            type="submit"
                            value="Log in"
                            className={classes.submitForm}
                            onClick={(e) => Auth.handleSignIn(e, user, history)}
                        ></input>
                    </div>
                </form>
                <p style={{ fontSize: "1.4vw", textAlign: "center" }}>
                    Forgot Password?
                </p>
                <p style={{ fontSize: "1.4vw", textAlign: "center" }}>
                    Don't have an account?
                </p>
            </div>
        </div>
    )
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

export default LogInForm;