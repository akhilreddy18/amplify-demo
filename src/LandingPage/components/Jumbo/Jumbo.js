import React from "react";
import classes from "./Jumbo.module.css";

const Jumbo = () => {
  return (
    <div>
      <div className={classes.DesktopOnly}>
        <div
          className="jumbotron"
          style={{
            backgroundColor: "#f7f7f7",
            borderRadius: "98px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h1 className={classes.heading}>How it works</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div className={classes.column}>
              <li className={classes.lib}>1</li>
              <p className={classes.p2}>Measure</p>
              <p className={classes.p1} style={{ width: "24vw" }}>
                Our test adapts its questions to your ability and needs so you
                can practice the topics that matter.
              </p>
            </div>
            <div className={classes.column}>
              <li className={classes.li}>2</li>
              <p className={classes.p2}>Understand</p>
              <p className={classes.p1} style={{ width: "26.35vw" }}>
                Learn about your performance across all learning outcomes to see
                what’s holding you back from the grades you deserve.
              </p>
            </div>
            <div className={classes.column}>
              <li className={classes.li}>3</li>
              <p className={classes.p2}>Improve</p>
              <p className={classes.p1} style={{ width: "29.28vw" }}>
                Study the areas we recommend to see the biggest improvement to
                your grades and track improvement from our dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mobileOnly}>
        <div
          className="jumbotron"
          style={{ backgroundColor: "#f7f7f7", borderRadius: "98px" }}
        >
          <div style={{ width: "100%" }}>
            <div className="row justify-content-center">
              <h1 className={classes.heading}>How it works</h1>
            </div>
          </div>
          <div style={{ margin: "0 30px" }}>
            <div className="row justify-content-around">
              <li className={classes.circle1} style={{ listStyle: "none" }}>
                1
              </li>
              <div>
                <p className={classes.p2}>Improve</p>
                <p className={classes.text}>
                  your ability<br></br> so you can practice the topics that
                  matter.
                </p>
              </div>
            </div>
            <div className="row justify-content-around">
              <li className={classes.circle} style={{ listStyle: "none" }}>
                2
              </li>
              <div>
                <p className={classes.p2}>Understand</p>
                <p className={classes.text}>
                  your performance<br></br> across all learning outcomes.
                </p>
              </div>
            </div>
            <div className="row justify-content-around">
              <li className={classes.circle} style={{ listStyle: "none" }}>
                3
              </li>
              <div>
                <p className={classes.p2}>Measure</p>
                <p className={classes.text}>
                  your grades and track improvement from our dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbo;
