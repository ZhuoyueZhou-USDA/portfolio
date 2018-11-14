import React, { Component } from "react";
class Education extends Component {
  state = {};
  render() {
    // $(".mdl-layout__content").css("background-color", "#000");
    return (
      <div>
        <div className="education_block">
          <img
            src={require("../img/clarkuniversity.png")}
            alt="clark University"
          />
          Master of Science, GIS for Development and Environment, Clark
          University
          <br />
          Received in May 2016
        </div>
        <div className="education_block">
          <img
            src={require("../img/sd_agriculture.gif")}
            alt="shandong agriculture"
          />
          Bachelor of Science, GIS, Shandong Agriculture University
          <br /> Received in July 2014
        </div>
      </div>
    );
  }
}

export default Education;
