import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";
// import {proj_img} from "../img/b2b_website.png";
class Projects extends Component {
  state = {};

  render() {
    let proj_img = require("../img/b2b_website.PNG");
    let proj_img3 = require("../img/b2b_old.PNG");
    let proj_img4 = require("../img/m_web.PNG");
    let proj_img2 = require("../img/shopping_web.PNG");
    return (
      <div className="project-content">
        <h3>AngularJS & Angular6 & Codeigniter</h3>
        <Grid>
          <Cell col={12}>
            <div className="content">
              <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: "url(" + proj_img + ") center / cover"
                    }}
                  >
                    {/* B2B Hotel Website */}
                  </CardTitle>
                  <CardText>
                    This is single page applications created using Angular6, it
                    is currently one of our company's website, created and
                    maintained by our front end team. It uses Restful APIs as
                    back end support.
                  </CardText>
                  <CardActions border>
                    <Button colored>
                      <a
                        href="https://aichotels.net"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </Button>
                    {/* <Button colored>CodePen</Button>
            <Button colored>Live Demo</Button> */}
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <a
                      href="https://aichotels.net"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton name="share" />
                    </a>
                  </CardMenu>
                </Card>

                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: "url(" + proj_img2 + ") center / cover"
                    }}
                  >
                    {/* Shopping Website */}
                  </CardTitle>
                  <CardText>
                    This is an Ice Cream & Dessert Shopping Website, where you
                    can browser our products and add them to shopping cart. It
                    is a simple demo, and I have included the code on GitHub. I
                    refer the front page to Wix.com.
                  </CardText>
                  <CardActions border>
                    <Button colored>
                      <a
                        href="https://coastal-scanner-137923.firebaseapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </Button>
                    <Button colored>
                      <a
                        href="https://github.com/xiawucha0908/shopping-web"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </Button>
                    {/*<Button colored>Live Demo</Button> */}
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <a
                      href="https://coastal-scanner-137923.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <IconButton name="share" />
                    </a>
                  </CardMenu>
                </Card>
              </div>
              <div className="projects-grid">
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: "url(" + proj_img3 + ") center / cover"
                    }}
                  >
                    {/* B2b Website */}
                  </CardTitle>
                  <CardText>
                    This is a B2B Hotel Resaler Website, it follow Codeigniter
                    web framework, use PHP as back end language, I'm responsible
                    for almost all front end pages and now maintain them.
                  </CardText>
                  <CardActions border>
                    <Button colored>
                      <a
                        href="https://aichotelsagent.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </Button>

                    {/*<Button colored>Live Demo</Button> */}
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <a
                      href="https://aichotelsagent.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <IconButton name="share" />
                    </a>
                  </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
                  <CardTitle
                    style={{
                      color: "#fff",
                      height: "176px",
                      background: "url(" + proj_img4 + ") center / cover"
                    }}
                  >
                    {/* B2b Website */}
                  </CardTitle>
                  <CardText>
                    The WAP version of our B2B Hotel Resaler Website. I'm the
                    front end team leader for this project and it only took us 1
                    week. Be noted, it can only be accessed through phone.
                  </CardText>
                  <CardActions border>
                    <Button colored>
                      <a
                        href="http://m.aichotelsagent.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </Button>

                    {/*<Button colored>Live Demo</Button> */}
                  </CardActions>
                  <CardMenu style={{ color: "#fff" }}>
                    <a
                      href="http://m.aichotelsagent.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <IconButton name="share" />
                    </a>
                  </CardMenu>
                </Card>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
