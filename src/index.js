import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./LandingPage/components/Navbar/NavigationItems/AboutUs";

// import Amplify from "aws-amplify";
// import config from './aws-exports';
// Amplify.configure(config);

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/aboutus" component={AboutUs} />
      <Redirect to="/"></Redirect>
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
