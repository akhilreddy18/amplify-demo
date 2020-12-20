import React, { useState } from "react";
import Category from "../Category/Category";
import Features from "../Features/Features";
import Jumbo from "../Jumbo/Jumbo";
import classes from "./Main.module.css";
import Reviews from "../Reviews/Reviews";
import NewsLetter from "../NewsLetter/NewsLetter";
import MobileFeatures from "../Features/MobileFeatures";
import Logo from "../../../assets/Images/group-bged.png";
import Logo1 from "../../../assets/Images/Image 1.png";
import Logo2 from "../../../assets/Images/Image 2.png";
import Logo3 from "../../../assets/Images/Image 3.png";
import Logo4 from "../../../assets/Images/Image 4.png";
import Logo5 from "../../../assets/Images/Image 5.png";
import Logo6 from "../../../assets/Images/next.svg";
import Logo7 from "../../../assets/Images/previous.svg";
import Logo8 from "../../../assets/Images/image6.png";
import Logo9 from "../../../assets/Images/Path 163.svg";
// import { ClassSharp } from "@material-ui/icons";
import Modaljs from "../Modal/Modal";

const Main = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      {/* <div className={classes.mainBg}></div> */}
      <div className={classes.rowBetween}>
        <div className={classes.text}>
          <div className="d-none d-lg-block">
            <p className={classes.heading}>
              Track & improve your grades<br></br>with our personalised math
              tests
            </p>
          </div>
          <div className="d-lg-none">
            <p className={classes.heading}>
              Track & improve your <br></br>grades with our <br></br>{" "}
              personalised math tests
            </p>
          </div>
          <p className={classes.description}>
            Our assessment platform learns your ability and generates questions
            targeting your growth areas <br></br> to accelerate improvement
          </p>
          <button className={classes.tryButton} onClick={handleShow}>
            TRY IT FOR FREE
          </button>
        </div>
        <img src={Logo} alt="Logo" className={classes.img}></img>
      </div>
      <Jumbo />
      <Category />
      <Features />
      <MobileFeatures />
      <Reviews />
      <NewsLetter />
      <div style={{ position: "relative", padding: "3.5vw 0" }}>
        <div className={classes.bottomBg}></div>
        <div className={classes.instContent}>
          <div className={classes.rowCenter}>
            <p className={classes.p}>
              Our platform is supported by top institutions
            </p>
          </div>
          <div className={classes.institutions}>
            {/* <a href="#Logo">
              <img style={style.image} src={Logo3} alt="Logo3"></img>
            </a> */}
            <a href="#Logo">
              <img style={style.image} src={Logo2} alt="Logo2"></img>
            </a>
            <a href="#Logo">
              <img style={style.image} src={Logo8} alt="Logo4"></img>
            </a>
            <a href="#Logo">
              <img style={style.image} src={Logo1} alt="Logo1"></img>
            </a>
            <a href="#Logo">
              <img style={style.image} src={Logo5} alt="Logo5"></img>
            </a>
          </div>
        </div>
      </div>
      <div className={classes.mobileInstitutions}>
        <img
          style={{ width: "10%", marginLeft: "15px" }}
          src={Logo7}
          alt="previous"
        ></img>
        <img src={Logo3} alt="Logo3"></img>
        <img
          style={{ width: "10%", marginRight: "15px" }}
          src={Logo6}
          alt="next"
        ></img>
      </div>
      <div className={classes.rowCenter}>
        <p className={classes.p1}>
          Our Mission it to provide high-quality personalized education to every
          child.
        </p>
      </div>
      <Modaljs show={show} handleClose={handleClose}></Modaljs>
    </div>
  );
};

const style = {
  image: {
    width: "14vw",
  },
};

export default Main;
