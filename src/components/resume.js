import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Skills from "./skills";
import Education from "./education";
import Experience from "./experience";
class Resume extends Component {
  state = {};
  render() {
    const skillsets = [
      { skill: "JavaScript/JQuery", process: 90 },
      { skill: "Angular", process: 87 },
      { skill: "HTML/CSS", process: 92 },
      { skill: "React", process: 70 },
      { skill: "PHP", process: 76 },
      { skill: "MySQL", process: 60 },
      { skill: "Bootstrap", process: 83 }
    ];
    var skill_divs = skillsets.map(function(skill) {
      return (
        <Skills
          key={skill.skill}
          skill={skill.skill}
          progress={skill.process}
        />
      );
    });
    return (
      <div className="resume-container">
        <Grid style={{ margin: "30px" }}>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../img/kk_self.png")}
                className="avatar-img"
                alt="kiki"
              />
            </div>
            <h3>Zhuoyue Zhou</h3>
            <h5>Web Developer</h5>
            <hr />
            <p> Have experience in Front end develop and GIS.</p>
            <hr />
            <h5>Address</h5>
            <p>Highland Park, NJ 08904</p>
            <h5>Phone</h5>
            <p>(508)615-9825</p>
            <h5>Email</h5>
            <p>zhuoyuezhou@gmail.com</p>
            <h5>Website</h5>
            <p>zhuoyue-portfolio.firebaseapp.com</p>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Work Experience</h2>
            <Experience />
            <hr />
            <h2>Education</h2>
            <Education />
            <hr />
            <h2>Skills</h2>
            {skill_divs}
            {/* <Skills skill="javascript" progress={100} /> */}
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
