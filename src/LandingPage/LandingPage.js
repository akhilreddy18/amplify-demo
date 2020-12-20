import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Foooter from "./components/Footer/Footer";
import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";

const LandingPage = () => {
  let history = useHistory();

  async function checkUser() {
    Auth.currentAuthenticatedUser({
      bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then((user) => console.log(user))
      .catch((err) => console.log(err));
  }

  const redirect = () => {
    if (Auth.currentAuthenticatedUser) {
      history.push("/admin");
      checkUser();
    }
  };
  return (
    <div>
      {/* {redirect()} */}
      <Navbar />
      <Main />
      <Foooter />
    </div>
  );
};

export default LandingPage;
