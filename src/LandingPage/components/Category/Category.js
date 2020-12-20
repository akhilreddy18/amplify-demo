import React from "react";
import classes from "./Category.module.css";
// import Logo from "../../assets/Images/Path 875.svg";

const Category = () => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "3.5vw",
      }}
    >
      <div className={classes.catBg}></div>
      <div className={classes.content}>
        <div className={classes.rowCenter}>
          <h1 className={classes.heading}>Practice questions by...</h1>
        </div>

        {/*  <div
          style={{
            borderRadius: Math.round(window.innerWidth + window.innerHeight) / 2,
            width: window.innerWidth * 0.01,
            height: window.innerWidth * 0.01,
            background: "green"
          }}>
        </div> */}

        <div className={classes.containCat}>
          <div className={classes.line}>
            <li className={classes.li}></li>
            <p className={classes.Category}>Tier</p>
          </div>
          <div className={classes.line}>
            <li className={classes.li}></li>
            <p className={classes.Category}>Grade</p>
          </div>
          <div className={classes.line}>
            <li className={classes.li}></li>
            <p className={classes.Category}>Topic</p>
          </div>
          <div className={classes.line}>
            <li className={classes.lineline}></li>
            <p className={classes.Category}>Calculator</p>
          </div>
        </div>
        <div className={classes.row}>
          <p className={classes.Category}>Foundation</p>
          <p className={classes.Category}>Higher</p>
        </div>
        <div className={classes.rowCenter}>
          <p className={classes.p}>Don't know where to start? </p>
        </div>
        <div className={classes.rowCenter}>
          <p className={classes.p1}>
            <strong>
              <a className={classes.p1} href="#start">
                Click here
              </a>
            </strong>{" "}
            to take a comprehensive assessment and we'll tell you what to focus
            on
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
