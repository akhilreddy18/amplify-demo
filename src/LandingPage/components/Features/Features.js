import classes from "./Features.module.css";
import React from "react";
import Logo1 from "../../../assets/Images/Group 1671.svg";
import Logo2 from "../../../assets/Images/Group 1672.svg";
import Logo3 from "../../../assets/Images/Group 1673.svg";
import Logo4 from "../../../assets/Images/Group 1674.svg";
import Logo5 from "../../../assets/Images/Group 1675.png";
import Logo6 from "../../../assets/Images/Group 1698.png";

const Features = () => {
  return (
    <div className={classes.DesktopOnly}>
      <div className="jumbotron" style={style.Jumbo}>
        <div className="row justify-content-center">
          <h1 className={classes.heading}>Features</h1>
        </div>
        <div className="row justify-content-center">
          <div className={classes.card}>
            <div className={classes.verticalSpacing}>
              <div className="row justify-content-around">
                <div className={classes.evenSpace}>
                  <img
                    className={classes.image}
                    src={Logo2}
                    alt="Logo2"
                    style={{ marginBottom: "20px", marginTop: "5px" }}
                  ></img>
                  <p className={classes.p1}>
                    Personalised<br></br> Recommendations
                  </p>
                  <p className={classes.p2}>
                    Receive feedback on what you need to focus on to make the
                    biggest improvement.
                  </p>
                </div>
                <div className={classes.evenSpace}>
                  <img
                    className={classes.image}
                    src={Logo3}
                    alt="Logo3"
                    style={{ marginBottom: "3.3vw" }}
                  ></img>
                  <div>
                    <p className={classes.p1} style={{ marginBottom: "35px" }}>
                      Adaptive Test
                    </p>
                  </div>
                  <p className={classes.p2}>
                    Our tests adopt their difficulty based on your performance
                    so you're always being challenged to grow.
                  </p>
                </div>
                <div className={classes.evenSpace}>
                  <img
                    className={classes.image}
                    src={Logo1}
                    alt="Logo1"
                    style={{ marginBottom: "0.73vw" }}
                  ></img>
                  <div>
                    <p className={classes.p1} style={{ marginBottom: "30px" }}>
                      Improvement Tracker
                    </p>
                  </div>
                  <p className={classes.p2}>
                    Track your performance across all learning outcomes so you
                    can see how much you've improved.
                  </p>
                </div>
              </div>
              <div className="row justify-content-around">
                <div className={classes.evenSpace}>
                  <img
                    className={classes.image}
                    src={Logo5}
                    alt="Logo2"
                    style={{ marginBottom: "0.73vw" }}
                  ></img>
                  <p className={classes.p1}>Exam-Style Questions</p>
                  <p className={classes.p2}>
                    Our questions are the type you'd expect to get in exams to
                    give you good practice.
                  </p>
                </div>
                <div className={classes.evenSpace}>
                  <img
                    className={classes.img}
                    src={Logo6}
                    alt="Logo3"
                    style={{ marginBottom: "2.2vw" }}
                  ></img>
                  <p className={classes.p1}>Questions Variety</p>
                  <p className={classes.p2}>
                    We have over 700 questions that cover the entire curriculum
                    that you can filter by topic, difficulty and tier.
                  </p>
                </div>
                <div className={classes.evenSpace}>
                  <img src={Logo4} alt="Logo1" className={classes.image}></img>
                  <p className={classes.p1}>Parental Reports</p>
                  <p className={classes.p2}>
                    Receive reports on your child's performance and improvement
                    so you're always kept in the loop.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  Jumbo: {
    background: "#f7f7f7",
    borderRadius: "98px",
    marginBottom: "0",
  },
};
export default Features;
