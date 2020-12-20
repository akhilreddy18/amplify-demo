import React from "react";
import classes from "./Reviews.module.css";
import Previous from "../../../assets/Images/previous.svg";
import Next from "../../../assets/Images/next.svg";

const Reviews = () => {
  return (
    <div style={{ position: "relative", padding: "3.5vw 0" }}>
      <div className={classes.revBg}></div>
      <div className={classes.content}>
        <div className={classes.rowCenter}>
          <h1 className={classes.heading}>Parents And Students Love Us</h1>
        </div>
        <div className={classes.rowCenter}>
          <p className={classes.p}>
            We're changing the lives of thousands of students across the UK.
          </p>
        </div>
        <div className={classes.evenSpace}>
          <img className={classes.img} src={Previous} alt="Previous"></img>
          <div>
            <div className={classes.card}>
              <p className={classes.p1}>
                “I love the fact that I don’t have to go out and find the right
                questions to practice, Edicat gives me questions at my level and
                as I get better, the questions gets harder.“
              </p>
              <p className={classes.p2}>Rebecca, Year 10</p>
            </div>
          </div>
          <div className={classes.displayCard}>
            <div className={classes.card}>
              <p className={classes.p1}>
                “My son has always struggled with Algebra but since following
                Edicat’s recommendation on what he needs to focus on he’s doing
                a lot better!”
              </p>
              <p className={classes.p2}>Teresa, Parent</p>
            </div>
          </div>
          <div className={classes.displayCard}>
            <div className={classes.card}>
              <p className={classes.p1}>
                “I’ve always done badly at maths but I couldn’t really tell why,
                the way Edicat breaks it down for me has done wonders for the
                effectiveness of my revision.”
              </p>
              <p className={classes.p2}>Samuel, Year 11</p>
            </div>
          </div>
          <img className={classes.img} src={Next} alt="next"></img>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
