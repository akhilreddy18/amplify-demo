import React from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer/Footer";
import Logo from "../../../../assets/Images/Group 2.svg";
import Logo1 from "../../../../assets/Images/Every class has students of varying needs and abilities. Teachers don’t have the time to identify exactly what each student needs and address them ind.svg";
import Logo2 from "../../../../assets/Images/Group 44.svg";
import Logo3 from "../../../../assets/Images/Group 43.svg";
import Logo4 from "../../../../assets/Images/Group 173.png";
import classes from "./AboutUs.module.css";
import Logo5 from "../../../../assets/Images/Image 1.png";
import Logo6 from "../../../../assets/Images/Image 2.png";
import Logo7 from "../../../../assets/Images/Image 3.png";
import Logo8 from "../../../../assets/Images/image6.png";
import Logo9 from "../../../../assets/Images/Image 5.png";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "#f7f7f7", borderRadius: "5vw" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className={classes.bg}
          >
            <img
              src={Logo2}
              style={{
                width: "35vw",
                height: "11vw",
                marginTop: "4vw",
                marginLeft: "9vw",
              }}
            ></img>
            <img
              src={Logo3}
              style={{ width: "65vw", marginLeft: "4vw", marginTop: "2vw" }}
            ></img>
          </div>
          <p
            style={{
              color: "#000",
              fontSize: "2.12vw",
              width: "30vw",
              marginTop: "10vw",
              marginRight: "2.2vw",
              textAlign: "center",
            }}
          >
            We are a team of educators driven by our common vision that one day
            every child will have equal access to quality personalized
            education.
          </p>
        </div>
      </div>
      <div style={{ margin: "2vw 6vw" }}>
        <div className="row justify-content-around">
          <div className="col">
            <p
              style={{
                fontSize: "3.66vw",
                fontWeight: "bold",
                color: "#186aa5",
              }}
            >
              Why personalised learning?
            </p>
            <p
              style={{
                fontSize: "2.05vw",
                color: "#000",
                width: "40vw",
                marginBottom: "1vw",
              }}
            >
              Every class has students of varying needs and abilities. Teachers
              don’t have the time to identify exactly what each student needs
              and address them individually.
            </p>
            <p
              style={{
                fontSize: "2.05vw",
                color: "#000",
                width: "40vw",
                marginBottom: "1vw",
              }}
            >
              Because every lesson builds up on the previous one, unaddressed
              misconceptions can compound and have detrimental effects
              long-term.
            </p>
            <p
              style={{
                fontSize: "2.05vw",
                color: "#000",
                width: "40vw",
                marginBottom: "1vw",
              }}
            >
              That’s where we come in…
            </p>
          </div>
          <img
            src={Logo4}
            style={{ width: "25vw", height: "25vw", alignSelf: "center" }}
          ></img>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f7f7f7",
          borderRadius: "3vw",
          padding: "2vw 0",
        }}
      >
        <p className={classes.p}>
          Our platform is supported by top institutions
        </p>
        <div className={classes.institutions}>
          <a href="#Logo">
            <img style={style.image} src={Logo7} alt="Logo3"></img>
          </a>
          <a href="#Logo">
            <img style={style.image} src={Logo6} alt="Logo2"></img>
          </a>
          <a href="#Logo">
            <img style={style.image} src={Logo8} alt="Logo4"></img>
          </a>
          <a href="#Logo">
            <img style={style.image} src={Logo5} alt="Logo1"></img>
          </a>
          <a href="#Logo">
            <img style={style.image} src={Logo9} alt="Logo5"></img>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const style = {
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    width: "14vw",
  },
};

export default AboutUs;
