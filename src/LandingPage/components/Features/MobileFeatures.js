import classes from "./MobileFeatures.module.css";
import React from "react";
import Logo1 from "../../../assets/Images/Group 1671.svg";
import Logo2 from "../../../assets/Images/Group 1672.svg";
import Logo3 from "../../../assets/Images/Group 1673.svg";
import Logo4 from "../../../assets/Images/Group 1674.svg";
import Logo5 from "../../../assets/Images/Group 1675.png";
import Logo6 from "../../../assets/Images/Group 349@2x.png";
import Logo7 from "../../../assets/Images/Group 350@2x.png";
import Logo8 from "../../../assets/Images/Group 421@2x.png";

const MobileFeatures = () => {
  return (
    <div className={classes.mobileOnly}>
      <div className="jumbotron" style={style.container}>
        <div className="row justify-content-center">
          <h1 className={classes.heading}>Features</h1>
        </div>
        <div className="row justify-content-around">
          <div className={classes.evenSpace}>
            <img style={style.img} src={Logo2} alt="Logo2"></img>
            <p className={classes.p1}>
              Personalised<br></br> Recommendations
            </p>
          </div>
          <div className={classes.evenSpace}>
            <img style={style.img} src={Logo5} alt="Logo5"></img>
            <p className={classes.p1}>
              {" "}
              Exam-Style<br></br> questions
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className={classes.evenSpace}>
            <img style={style.img} src={Logo3} alt="Logo3"></img>
            <p className={classes.p1}>
              Adaptive<br></br> Test
            </p>
          </div>
          <div className={classes.evenSpace} style={{ paddingLeft: "40px" }}>
            <img style={style.img} src={Logo1} alt="Logo1"></img>
            <p className={classes.p1}>
              {" "}
              Improvement<br></br> Tracker
            </p>
          </div>
        </div>
        <div className="row justify-content-around">
          <div className={classes.evenSpace}>
            <div className="row">
              <img
                style={{ width: "61px", height: "61px" }}
                src={Logo6}
                alt="Logo6"
              ></img>
              <img
                style={{ width: "61px", height: "60px", marginTop: "40px" }}
                src={Logo7}
                alt="Logo7"
              ></img>
              <img
                style={{ width: "72px", height: "63px" }}
                src={Logo8}
                alt="Logo8"
              ></img>
            </div>
            <p className={classes.p1}>
              Question<br></br> variety
            </p>
          </div>
          <div className={classes.evenSpace}>
            <img
              style={{
                width: "80px",
                height: "70px",
                marginRight: "15px",
                marginBottom: "20px",
              }}
              src={Logo4}
              alt="Logo4"
            ></img>
            <p
              className={classes.p1}
              style={{ marginRight: "15px", paddingTop: "12px" }}
            >
              {" "}
              Parental<br></br>Reports
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = {
  container: {
    backgroundColor: "#fff",
    border: "6px solid #f7f7f7",
    borderRadius: "98px",
  },
  img: {
    width: "100px",
    height: "90px",
  },
};
export default MobileFeatures;
