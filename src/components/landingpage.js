import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landingpage extends Component {
  state = {};

  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={require("../img/kk_self.png")}
              className="avatar-img"
              alt="kiki"
            />
            <div className="banner-text">
              <h1>Front End Developer</h1> <hr />
              <h5>
                HTML/CSS | Bootstrap | Angular | React | JavaScript | JQuery
              </h5>
              <hr />
              <p className="landing-desc">
                I currently work as a Front end developer at Amerilink
                International Corp., mainly responsible for creating and
                maintain our online booking website as well as creating landing
                pages. I'm fluent in HTML, JavaScript, JQuery, Angular, React,
                CSS, and I also have experience in PHP and NodeJS.
              </p>
              <p className="landing-desc">
                Looking to build a great career as Front end developer!
              </p>
            </div>
            <div className="landing-desc" />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
