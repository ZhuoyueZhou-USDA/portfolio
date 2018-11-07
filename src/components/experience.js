import React, { Component } from "react";
class Experience extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="experience-block">
          <h4>
            GIS Analyst/GIS Web developer, Amerilink International Corp., North
            Brunswick, NJ
          </h4>
          <ul>
            <li>
              Created single page applications using Angular 6 and use Restful
              APIs as back-end support to query required data. (You can access
              the website through this{" "}
              <a
                href="https://aichotels.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
              )
            </li>
            <li>
              Incorporate MVC software design pattern to build a global Hotel
              Search and Online Booking system, capable of multi languages for
              our clients all around the world. (You can access the website
              through this{" "}
              <a
                href="https://aichotelsagent.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                link
              </a>
            </li>
            <li>
              Lead a group of three to create a WAP version of the online
              booking system that have the basic functionalities compared to the
              Website version.
            </li>
            <li>
              Develop customized web applications using PHP, Angular, HTML5, CSS
              JSON, AJAX, Bootstrap for several projects that are capable for
              multi-devices and multi-browsers.
            </li>
            <li>
              Work with UI teams to develop front end web page capable for
              multi-browsers and promotion activities for the online system
              using Angular Framework.
            </li>
            <li>
              Assist in updating the back office system for sales and customer
              services to better serve their clients.
            </li>
            <li>
              Design, coordinate and prepare representations of Geographic
              Information Systems (GIS) databases.
            </li>
            <li>
              Use mySQL code to query data from our database that contains over
              600000+ hotel infos, and create Ajax APIs to accomplish the
              communication between front-end and back-end.
            </li>
            <li>
              Enhances and promotes the utilization of GIS through technical
              support and training of end users.
            </li>
            <li>
              Analyzes GIS data and data processing procedures to ensure that
              user s' needs are addressed. Produce high quality cartographic
              products for reports, meetings and presentations.
            </li>
            <li>
              Assist in management of data, maps, graphics and other spatial
              materials as a member of a project team.
            </li>
          </ul>
        </div>
        <div>
          <h4>
            Teaching Assistant for Python Programming, Clark University,
            Worcester, MA
          </h4>
          <ul>
            <li>
              Tutored students in graduate level course for python programming
            </li>
            <li>
              Assisted professor design lab assignments, demonstrated and
              evaluated assignments.
            </li>
            <li>
              Provided supports with their final projects in creating Graphic
              User Interface (GUI) tool in ArcMap.
            </li>
          </ul>
        </div>
        <div className="">
          <h4>Research Assistant / GIS Analyst, Clark Labs, Worcester, MA </h4>
          <ul>
            <li>
              Produced baseline mapping of coastal habitats and aquaculture for
              coast of Vietnam, Cambodia and Thailand.
            </li>
            <li>
              Performed change analysis using Land Change Modeler and process
              statistical analysis based on the output.
            </li>
            <li>
              Wrote python scripts to calculate the land use transition
              potentials using Multi Criteria Evaluation and create JSON files
              to store data to ArcGIS Server.
            </li>
            <li>
              Published web services and display maps using ArcGIS Online for
              better communication and visualization, and then tested web
              application.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
